import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CurrencyDetails from '../components/CurrencyDetails';
import FavoriteCurrency from '../components/FavoriteCurrency';

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/crypto-details/:id' element={<CurrencyDetails />} />
            <Route path='/favorite' element={<FavoriteCurrency />} />
        </Routes>
    )
}

export default RouterConfig