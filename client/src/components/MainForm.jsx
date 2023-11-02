import React, { useState } from 'react';

function MainForm({ state }) {
    const [name, setName] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [amount, setAmount] = useState('');

    const sendEther = async (e) => {
        e.preventDefault();
        try {
            const { contract, web3 } = state;
            const weiValue = web3.utils.toWei(amount, "ether");
            const accounts = await web3.eth.getAccounts();

            await contract.methods.sendEther(toAddress, name).send({
                from: accounts[0],
                value: weiValue,
                gas: 325666,
            });

            alert("Transaction Successful!");
        } catch (error) {
            alert("Transaction not successful!");
            console.log(error);
        }
    }

    return (
        <div className="wrapper w-100 d-flex h-80">
            <div className="container blue-glassmorphism">
                <h1 className='text-center mt-5 text-light font-monospace fw-bold fs-1'>Test Transaction Dapp</h1>
                <hr />
                <div className="container">
                    <form onSubmit={sendEther} className='fw-bold w-50 mt-5 container p'>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='form-control m-3 p-3 bg-opacity-25 border-0 shadow-lg bg-light fw-bold'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Enter Address'
                            className='form-control m-3 p-3 bg-opacity-25 border-0 shadow-lg bg-light fw-bold'
                            value={toAddress}
                            onChange={(e) => setToAddress(e.target.value)}
                        />
                        <input
                            type="text"
                            className='form-control m-3 p-3 bg-opacity-25 border-0 shadow-lg bg-light fw-bold'
                            placeholder='Enter Ether'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                        <button className="m-3 btn bg-primary rounded-0 shadow fw-bold bg-opacity-50 text-light">Send Eth</button>
                    </form>
                    <hr />
                    <h3 className='text-center fw-bold text-light'>Transaction Details</h3>
                    <div className='container m-3 p-3 w-100 rounded-5 white-glassmorphism w-100' style={{ height: "20em" }}>
                        <span className='m-3 text-light fw-bold'>Hello, I am fine</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainForm;
