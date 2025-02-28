import React, { useEffect, useState } from 'react'

const TableData = () => {
    const [finalData,setFinalData]=useState([]); 
    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    const getData=async ()=>{
        const response =await fetch(url);
        const data= await response.json();
        console.log(data);
        setFinalData(data)
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      <h1>Showing Data in Form of Table</h1>
      <div>

      <table>
        <thead className='border-2'>
            <tr className='border-2'>
            <th  className='border-2'>Name </th>
            <th className='border-2'>ALL Time High </th>
            <th className='border-2'>Change Percentage</th>
            <th className='border-2'>id</th>
            <th className='border-2'>Market Cap</th>
            <th className='border-2'>Symbol</th>
            <th className='border-2'>High 24hr</th>
        </tr>
        </thead>
        
        <tbody className='border-2'>
        {finalData.map((val,key)=>{
             const {name,ath,ath_change_percentage,id,market_cap,symbol,high_24h}=val;
            return(
                   <tr key={key} className='border-black border-2'>
                   
                    <td className='border-2 rounded-2xl'>{name}</td>
                    <td className='border-2 rounded-2xl'>{ath}</td>
                    <td className='border-2 rounded-2xl'>{ath_change_percentage}</td>
                    <td className='border-2 rounded-2xl'>{id}</td>
                    <td className='border-2 rounded-2xl'>{market_cap}</td>
                    <td className='border-2 rounded-2xl'>{symbol}</td>
                    <td className='border-2 rounded-2xl'>{high_24h}</td>
                </tr>  
               
            )
        })}
        </tbody>
      </table>

      </div>
    </div>
  )
}

export default TableData
