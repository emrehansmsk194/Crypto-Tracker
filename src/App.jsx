import { useState } from 'react'
import './App.css'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer';
import Header from './components/Header';

function App() {


  return (
    <div>
      <PageContainer >
        <Header />
        <RouterConfig />
      </PageContainer>


    </div>
  )
}

export default App
