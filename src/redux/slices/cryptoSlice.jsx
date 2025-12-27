import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const getCryptoFromStorage = () => {
    if (localStorage.getItem("crypto")) {
        return JSON.parse(localStorage.getItem("crypto"));
    }
    return [];
}


const initialState = {
    currencies: [],
    selectedCurrency: {},
    favouriteCurrencies: getCryptoFromStorage(),
    loading: false,
    inputValue: ''
}


const writeFromFavoriteToStorage = (crypto) => {
    localStorage.setItem("crypto", JSON.stringify(crypto));
}

export const getTop50Cryptos = createAsyncThunk('getTop50Cryptos', async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
    return response.data;
})

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setSelectedCurrency: (state, action) => {
            state.selectedCurrency = action.payload;
        },
        addToFavourites: (state, action) => {
            const coinId = action.payload.id;
            if (!state.favouriteCurrencies.includes(coinId)) {
                state.favouriteCurrencies = [...state.favouriteCurrencies, coinId];
                writeFromFavoriteToStorage(state.favouriteCurrencies);
            }
        },
        removeFromFavourites: (state, action) => {
            const coinId = action.payload.id || action.payload;
            state.favouriteCurrencies = state.favouriteCurrencies.filter((id) => id !== coinId);
            writeFromFavoriteToStorage(state.favouriteCurrencies);
        },
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getTop50Cryptos.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getTop50Cryptos.fulfilled, (state, action) => {
            state.loading = false;
            state.currencies = action.payload;
        })
    }

})

export const { setSelectedCurrency, addToFavourites, setInputValue } = cryptoSlice.actions

export default cryptoSlice.reducer