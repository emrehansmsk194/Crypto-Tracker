import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToFavourites, getTop50Cryptos, setSelectedCurrency } from '../redux/slices/cryptoSlice';
import { store } from '../redux/store';
import Currency from './Currency';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
function CurrencyDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currencies, selectedCurrency } = useSelector((store) => store.crypto);
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        dispatch(getTop50Cryptos());
    }, [])
    const { name, total_volume, symbol, image, current_price, market_cap, market_cap_rank, market_cap_change_24h, price_change_24h, price_change_percentage_24h, high_24h, low_24h, ath, fully_diluted_valuation, total_supply, max_supply, circulating_supply } = selectedCurrency;


    useEffect(() => {
        getCurrencyById();
    }, [currencies])


    const getCurrencyById = () => {
        if (currencies && currencies.length != 0) {
            currencies.map((currency) => {
                if (currency.id === id) {
                    dispatch(setSelectedCurrency(currency));
                }
            })
        }
    }

    const convert = () => {
        const value = input * current_price;
        setOutput(value);
    }

    const addFavourite = () => {
        if (currencies && currencies.length != 0) {
            currencies.map((currency) => {
                if (currency.id === id) {
                    dispatch(addToFavourites(currency));
                }
            })
        }
        setIsFavorite(true);
    }

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <div className='flex space-x-3 items-center'>
                <img src={image} width={50} height={50} alt="" />
                <h1 className='text-4xl font-bold font-inter'>{name}({symbol})</h1>
                <div className='flex space-x-1'>
                    <h1 className='text-3xl font-bold font-mono-jet'>24h: <span style={{ color: price_change_percentage_24h > 0 ? 'green' : 'red' }} className='font-mono-jet' >
                        {price_change_percentage_24h}%</span> </h1>
                    <h1 className='text-3xl'>{price_change_percentage_24h > 0 ? <FaCaretUp style={{ color: 'green' }} /> : <FaCaretDown style={{ color: 'red' }} />}</h1>
                </div>


            </div>

            <div className='flex flex-col'>
                <div className='flex space-x-2 gap-3 justify-center  '>
                    <div className='space-y-3 mt-10 flex flex-col '>
                        <h1 className='font-inter font-bold text-xl'>Price :<span className='font-mono-jet'> ${current_price?.toLocaleString()}</span></h1>
                        <h1 className='font-bold text-xl font-inter'>24h(amount): <span className='font-mono-jet'> ${price_change_24h?.toLocaleString()}</span></h1>
                        <h1 className='font-bold text-xl font-inter'>High 24h: <span className='font-mono-jet'>${high_24h?.toLocaleString()}</span> </h1>
                        <h1 className='font-bold text-xl font-inter'>Low 24h: <span className='font-mono-jet'>${low_24h?.toLocaleString()}</span></h1>

                    </div>
                    <div className='space-y-3 flex flex-col mt-10'>
                        <h1 className='font-inter font-bold text-xl'>MC Rank: <span className='font-mono-jet'>#{market_cap_rank}</span></h1>
                        <h1 className='font-inter font-bold text-xl'>Market Cap: <span className='font-mono-jet'>${market_cap?.toLocaleString()} </span></h1>
                        <h1 className='font-inter font-bold text-xl'>Market Cap24h: <span className='font-mono-jet'>${market_cap_change_24h?.toLocaleString()}</span>  </h1>

                        {max_supply ?
                            <h1 className='font-inter font-bold text-xl'>Max Supply:<span className='font-mono-jet'> ${max_supply?.toLocaleString()}</span>  </h1>
                            : <h1 className='font-inter font-bold text-xl'>Max Supply:<span className='font-mono-jet'> Undefined</span> </h1>
                        }


                    </div>
                    <div className='space-y-3 flex flex-col mt-10 ml-4'>
                        <h1 className='font-bold text-xl font-inter'>Ath: <span className='font-mono-jet'>${ath?.toLocaleString()}</span> </h1>
                        <h1 className='font-inter font-bold text-xl'>Total Supply: <span className='font-mono-jet'>${total_supply?.toLocaleString()}</span></h1>
                        <h1 className='font-inter font-bold text-xl'>Fully Diluted Val: <span className='font-mono-jet text-xl'>${fully_diluted_valuation?.toLocaleString()}</span>  </h1>
                        <h1 className='font-inter font-bold text-xl'>Total Volume: <span className='font-mono-jet'>${total_volume?.toLocaleString()}</span></h1>
                    </div>
                </div>
                <div className='mt-10 flex justify-center items-center space-x-4'>
                    <button className="font-inter bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-950 cursor-pointer duration-200">
                        BUY
                    </button>
                    {!isFavorite ?
                        <button onClick={() => addFavourite()} className="font-inter bg-slate-800 px-6 py-2 rounded-lg hover:bg-slate-950 cursor-pointer duration-200">
                            ⭐ FAVORITE
                        </button>
                        :
                        <button className="font-inter bg-red-800 px-6 py-2 rounded-lg hover:bg-slate-950 cursor-pointer duration-200">⭐ REMOVE </button>
                    }
                </div>

            </div>

            <div className='flex justify-center items-center space-x-4 mt-10'>
                <label htmlFor="">{symbol}</label>
                <input type="number" onChange={(e) => setInput(e.target.value)} value={input} placeholder={symbol} className='bg-white outline-none rounded-lg p-2 text-gray-900' />
                <FaArrowRightLong className='text-2xl' />
                <label htmlFor="">$</label>
                <input type="number" placeholder='usd' onChange={(e) => setOutput(e.target.value)} readOnly value={output} className='bg-white outline-none rounded-lg p-2 text-gray-900' />
                <button onClick={convert} className='font-inter bg-slate-800 px-6 py-2 rounded-lg hover:bg-slate-950 cursor-pointer duration-200'>Convert</button>
            </div>
            <div className='flex justify-center items-center space-x-1 mt-3'>
                <h1 className='font-inter text-xl font-bold'>{input} {symbol} is <span className='font-mono-jet'>{output.toLocaleString()}</span>$</h1>
            </div>




        </div>
    )
}

export default CurrencyDetails