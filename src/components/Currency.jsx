import React from 'react'
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function Currency({ currency }) {
    const { id, name, total_volume, symbol, image, current_price, market_cap, market_cap_rank, market_cap_change_24h, price_change_24h, price_change_percentage_24h } = currency;
    const navigate = useNavigate();
    return (
        <div className='flex space-x-3  '>
            <div className='grid grid-cols-[50px_2fr_1fr_1fr_1.5fr_1.5fr] gap-4 w-full items-center ' >
                <h1 className='font-bold  '>{market_cap_rank}</h1>
                <div className='flex space-x-5 items-center cursor-pointer hover:text-gray-500 duration-300' onClick={() => navigate('/crypto-details/' + id)}>
                    <img src={image} height={40} width={40} alt="" />
                    <h2 className='w-25 '>{name} {symbol}</h2>
                </div>

                <h2 className='w-25'>${current_price}</h2>
                <h2 className='w-25' style={{ color: price_change_percentage_24h > 0 ? 'green' : 'red' }}>{price_change_percentage_24h}%{price_change_percentage_24h > 0 ? <FaCaretUp style={{ color: 'green' }} /> : <FaCaretDown style={{ color: 'red' }} />} </h2>
                <h2 className='w-25'>${total_volume}</h2>
                <h2>${market_cap}</h2>
            </div>

        </div>
    )
}

export default Currency