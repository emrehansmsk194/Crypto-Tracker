import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../redux/store';
import Currency from './Currency';

function FavoriteCurrency() {

    const { favouriteCurrencies, currencies } = useSelector((store) => store.crypto);
    const { name, symbol, current_price, image, market_cap_rank, price_change_24h, price_change_percentage_24h } = favouriteCurrencies;

    const actualFavorites = currencies.filter(currency =>
        favouriteCurrencies.includes(currency.id)
    );

    return (
        <div className='flex flex-col justify-center items-center space-y-4'>
            <h1 className='font-inter font-bold text-xl '>Watch Your Favorites</h1>
            <div className='flex space-x-22 mt-10'>
                <h1 ></h1>
                <h1 className='font-inter font-bold'>Name</h1>
                <h1 className='font-inter font-bold'>Price</h1>
                <h1 className='font-inter font-bold'>24h</h1>
                <h1 className='font-inter font-bold'>Total Volume</h1>
                <h1 className='font-inter font-bold'>Market Cap</h1>
            </div>


            {
                actualFavorites && actualFavorites.map((currency) => (
                    <Currency div={currency.id} currency={currency} />
                ))
            }
        </div>
    )
}

export default FavoriteCurrency