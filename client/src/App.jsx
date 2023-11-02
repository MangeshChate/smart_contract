import React, { useState } from 'react'
import MainForm from './components/MainForm'
import Wallet from './components/Wallet'

function App() {

  const [ state , setState] = useState({
    web3:null,
    contract:null
  });

  const saveState = (state) => {
    setState(state);
  }

  return (
    <div  className='vh-100' style={{ backgroundImage: "url('https://external-preview.redd.it/yfVNONOE-JRyWcswbTrxIOKN38w_gzqe4tJhyXkPgKU.jpg?auto=webp&s=9a7d5abd43b32d3ee01cc61c0dccbecf985480af')" }}>

      <Wallet saveState={saveState}/>
      <MainForm state={state}/>
    </div>
  )
}

export default App
