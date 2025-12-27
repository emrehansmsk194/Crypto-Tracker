import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store';
import { getTop50Cryptos } from '../redux/slices/cryptoSlice';
import Currency from './Currency';

function CurrencyList() {
    const dispatch = useDispatch();
    const { currencies, inputValue } = useSelector((store) => store.crypto);
    const filteredCurrencies = currencies.filter((currency) => currency.name.toLowerCase().includes(inputValue.toLowerCase()));

    useEffect(() => {
        dispatch(getTop50Cryptos());
    }, [])

    return (
        <div className='flex flex-col justify-center w-full items-center space-y-5 mt-5 text-white '>
            <div className='flex space-x-21 '>
                <h1 className='font-bold ml-2'></h1>
                <h1 className='font-bold'>Crypto</h1>
                <h1 className='font-bold'>Price</h1>
                <h1 className='font-bold'>24h</h1>
                <h1 className='font-bold'>Total Volume</h1>
                <h1 className='font-bold'>Market Cap</h1>
            </div>
            {
                filteredCurrencies && filteredCurrencies.map((currency) => (
                    <Currency key={currency.id} currency={currency} />
                ))
            }
            {
                !filteredCurrencies || filteredCurrencies.length == 0 &&
                <h1 className='text-red-600 font-bold font-inter text-2xl'>The crpytocurrency couldn't be found!</h1>
            }
        </div>
    )
}

export default CurrencyList