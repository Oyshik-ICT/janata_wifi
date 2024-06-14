import { useEffect, useState } from "react"
import {getStock, addStock, editStock, deleteStock} from '../services/ApiService'
import style from "./StockList.module.css"
import AddStock from "./AddStock"
import EditStock from "./EditStock"


function StockList(){
    const [stocks, setstock] = useState([])
    const [showaddstockform, setshowaddstockform] = useState(false)
    const [showeditstockform, setshoweditstockform] = useState(false)
    const [selecteditdata, setselecteditdata] = useState()

    useEffect(() => {
        let mount = true
        getStock()
        .then(res => {
            console.log(res)
            setstock(res)
            return() => mount = false
        })
    }, [])

    const handleAddSubmit= (e) => {
        addStock(e.target)
        .then(res => {
            setstock(res)
        })
        .catch(error => {
      console.error('Error occurred in the then part:', error);
    });
    }

    const handleEditBtn = (stock) =>{
        setselecteditdata(stock)
        setshoweditstockform(true)
        setshowaddstockform(false)
    }

    const handleEditSubmit  =(e, id) => {
        console.log(id)
        editStock(id, e.target)
        .then(res => {
            setstock(res)
        })
        .catch(error => {
            console.error('Error occurred in the then part:', error);
          });
    }

    const handledeleteBtn = (id) =>{
        deleteStock(id)
        .then(res =>{
            setstock(stocks.filter(s=>s.stock_id !== id))
        })
    }
    return(
        <>
          <h2>Stock List</h2>
                <table className = {style.table}>
                <thead>
                    <tr className = {style.tr}>
                        <td className = {style.td}>date</td>
                        <td className = {style.tr}>trade_code</td>
                        <td className = {style.tr}>high</td>
                        <td className = {style.tr}>low</td>
                        <td className = {style.tr}>open</td>
                        <td className = {style.tr}>close</td>
                        <td className = {style.tr}>volume</td>
                        <td className = {style.tr}>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => {
                        return <tr key={stock.stock_id}className = {style.tr}>
                            <td className = {style.tr}>{stock.date}</td>
                            <td className = {style.tr}>{stock.trade_code}</td>
                            <td className = {style.tr}>{stock.high}</td>
                            <td className = {style.tr}>{stock.low}</td>
                            <td className = {style.tr}>{stock.open}</td>
                            <td className = {style.tr}>{stock.close}</td>
                            <td className = {style.tr}>{stock.volume}</td>
                            <td className = {style.tr}><button onClick={()=> handleEditBtn(stock)}>Edit</button><button onClick={()=> handledeleteBtn(stock.stock_id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
              </table>
          <button onClick={() => setshowaddstockform(true)}>ADD New Stock</button>
          {showaddstockform && <AddStock handleAddSubmit={handleAddSubmit}></AddStock>}
          {showeditstockform && <EditStock handleEditSubmit={handleEditSubmit} selecteditdata={selecteditdata}></EditStock>}
        </>
    )
}

export default StockList