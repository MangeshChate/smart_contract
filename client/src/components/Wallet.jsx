import React, { useState } from 'react'
import ABI from './ABI.json';
import Web3 from "web3";
function Wallet({saveState}){

    const [connected, setConnected] = useState(true);

    const init = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({
                method:'eth_requestAccounts'
            });
            const contract = new web3.eth.Contract(
                ABI,
                "0x8B2755fCBE211D20FfBc829b24bBC7659A49D67B"
            );
            setConnected(false);
            saveState({web3:web3 , contract:contract});
            

        } catch (error) {
            alert('Please Install Metamask !');
        }
    }


    return (
        <div className='text-end'>
            <button className="btn btn-info fw-bold rounded-0 border-0 m-3 shadow" disabled={!connected} onClick={init}>
                {connected ? "Connect Metamask" : "Connected"}
            </button>
        </div>
    )
}

export default Wallet
