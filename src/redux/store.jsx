import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from '../redux/slices/cryptoSlice'

export const store = configureStore({
    reducer: {
        crypto: cryptoReducer
    },
})