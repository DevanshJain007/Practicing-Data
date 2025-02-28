import React, { useEffect, useState } from 'react'

const Paginations = () => {
    const [finalData,setFinalData]=useState([]); 
    const [currPage,setCurrPage]=useState(1);
    const [postPage,setPostPage]=useState(12);

    const kk = "hellow"
    const ff = (params)=>{console.log(params)}
    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd?limit=3&skip";

    useEffect(()=>{
      const getData=async ()=>{
        const response =await fetch(url);
        const data= await response.json();
        console.log(data);
        setFinalData(data)
    }
        getData();
    },[])


    const limit = 10
    const page = 2

    const skip = (page-1)*limit
    const last = skip + limit

    const lastPostIndex=currPage * postPage ;
    const firstPostIndex=lastPostIndex-postPage;
    const currentPosts=finalData.slice(firstPostIndex,lastPostIndex);
     

  return (
    <div>
      <h1>Showing Data in Form of Table</h1>
      <button onClick={()=>ff(kk)}>hello</button>

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
             <List finalData={currentPosts} />
        </tbody>
      </table>

      </div>
      <div>
        <ButtonList setCurrPage={setCurrPage}/>
        
      </div>
    </div>
  )
}
const List =({finalData})=>{
    return(
        <>
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
    
    </>)
}
const ButtonList = ({ setCurrPage }) => {
    const buttons = [];
    
    for (let i = 0; i < 10; i++) {
      buttons.push(
        <button key={i} onClick={() => setCurrPage(i)}>
          {i}
        </button>
      );
    }
  
    return <>
    <div>{buttons}</div>;
    </>
  };
  
export default Paginations;
