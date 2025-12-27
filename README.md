🪙 Crypto-Tracker

A modern, real-time cryptocurrency tracking application built with React, Redux Toolkit, and Tailwind CSS. This project allows users to track current prices of the top 50 cryptocurrencies, view detailed statistics, and manage a personalized watchlist.
🚀 Features

    Real-time Data: Fetches live cryptocurrency data from the CoinGecko API.

    Global State Management: Uses Redux Toolkit for consistent data flow across multiple components.

    Async Logic: Managed API calls and side effects using createAsyncThunk.

    Dynamic Routing: Each cryptocurrency has its own detailed page with route parameters.

    Personalized Watchlist: Add your favorite coins to a watchlist, persisted via Local Storage.

    Currency Converter: Built-in calculator to convert crypto values to USD.

🛠️ Tech Stack

    Frontend: React (Vite)

    State Management: Redux Toolkit (Slices, AsyncThunks)

    Styling: Tailwind CSS (v4)

    HTTP Client: Axios

    Icons: React Icons

📸 Screenshots

# Coin List
<img width="700" height="700" alt="resim" src="https://github.com/user-attachments/assets/6f101b54-9b68-4ab5-8b36-ab4668548855" />

# Coin Details
<img width="700" height="700" alt="resim" src="https://github.com/user-attachments/assets/2acdf924-7243-424f-8577-849676afbea8" />

# Favorite Coins
<img width="700" height="700" alt="resim" src="https://github.com/user-attachments/assets/0dce81d8-01a7-418f-93b2-1fd44d48eeb7" />



⚙️ Installation & Setup

    Clone the repository:
    git clone https://github.com/emrehansmsk194/Crypto-Tracker.git
    Install dependencies:
    npm install react-router-dom axios react-icons 
    Run the development server:
    npm run dev
