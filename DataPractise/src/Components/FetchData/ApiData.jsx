import React, { useEffect, useState } from 'react'

const ApiData = () => {
    const [finalData,setFinalData]=useState([]);
const kk = "hellow"
    const ff = (params)=>{console.log(params)}
    const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    const getData=async ()=>{
    const response =await fetch(url);
    const data= await response.json();
    console.log(data)
        setFinalData(data);
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center text-black mb-6">Crypto Market</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {finalData.map((d) => (
            <div 
                key={d.id} 
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center border border-gray-200 hover:shadow-xl transition"
            >
                <img 
                    src={d.image} 
                    alt={d.id} 
                    className="w-20 h-20 object-contain mb-4"
                />
                <p className="text-lg font-semibold capitalize">{d.id}</p>
                <p className="text-gray-600 text-sm">${d.current_price}</p>
            </div>
        ))}
    </div>
    <button onClick={ff(kk)}>hello</button>
</div>
  )
}

export default ApiData
