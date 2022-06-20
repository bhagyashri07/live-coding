import React,{useState,useEffect} from 'react'
import axios from axios;

const Showdata = () => {
    const [Data,setData]=useState([])

    const fetch_data=()=>{
        axios.get("http://localhost:5000/api/product/get").then((data)=>{
         setData(data.data.product)
        })
    }

    useEffect(()=>{
        fetch_data
    },[])
  return (
    <div>
      <tr className='table'>
        <thead>
      <th scope='col'>name</th>
      <th scope='col'>price</th>
      <th scope='col'>quantity</th>
      <th scope='col'>brand</th>
      </thead>
      </tr>
      <tbody>
        {

            Data.map((ele,ind)=>{
                return<tr className='table-warning'>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>{ele.quantity}</td>
                <td>{ele.brand}</td>
                </tr>
            })
        }
      </tbody>
    </div>
  )
}

export default Showdata
