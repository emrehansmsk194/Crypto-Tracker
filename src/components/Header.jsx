import React, { useState } from 'react'
import logo from '../images/Logo.webp';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { store } from '../redux/store';
import { setInputValue } from '../redux/slices/cryptoSlice';


function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [localInput, setLocalInput] = useState('');


    const handleSearch = (e) => {
        if (e.key == "Enter") {
            dispatch(setInputValue(localInput));
        }
    }

    return (
        <div className='flex justify-between items-center bg-gray-900 h-20  '>
            <div className='flex justify-center items-center hover:cursor-pointer space-x-5' >
                <img src={logo} width={80} height={80} onClick={() => navigate('/')} />
                <p className='font-bold  font-inter text-lg hover:text-gray-600 duration-200 ' onClick={() => navigate('/')}>CryptoRank</p>
                <p className='font-bold font-inter text-lg hover:text-gray-600 duration-200' onClick={() => navigate('/favorite')}>Favorites</p>

            </div>
            <div>
                <input type="text" onKeyDown={handleSearch} onChange={(e) => setLocalInput(e.target.value)} value={localInput} className='bg-white text-black border-none border-b-1-gray-700 p-1 mr-2.5 outline-none' placeholder='Find something ..' />
            </div>
        </div>
    )
}

export default Header