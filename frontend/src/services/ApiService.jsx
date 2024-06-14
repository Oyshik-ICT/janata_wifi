import axios from 'axios'

export function getStock(){
    return (axios.get('http://127.0.0.1:8000/stock/')
    .then(res => {
        return res.data
    }))
}


export function addStock(stock){
    return (axios.post('http://127.0.0.1:8000/stock/',
    {
        stock_id: null,
        date: stock.date.value,
        trade_code: stock.trade_code.value,
        high: stock.high.value,
        low: stock.low.value,
        open: stock.open.value,
        close: stock.close.value,
        volume: stock.volume.value,
    })
    .then(res => {
        return res.data
    }))
} 

export function editStock(id, stock){
    return (axios.put('http://127.0.0.1:8000/stock/'+id+'/',
    {
        date: stock.date.value,
        trade_code: stock.trade_code.value,
        high: stock.high.value,
        low: stock.low.value,
        open: stock.open.value,
        close: stock.close.value,
        volume: stock.volume.value,
    })
    .then(res => {
        return res.data
    }))
} 

export function deleteStock(id){
    return (axios.delete('http://127.0.0.1:8000/stock/'+id+'/')
    .then(res => {
        return res.data
    }))
}


