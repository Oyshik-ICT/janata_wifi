function EditStock({handleEditSubmit, selecteditdata}){
    console.log(selecteditdata)
    console.log(selecteditdata.stock_id)
    console.log(selecteditdata.date)
    return(
        <>
        <h3>EDIT</h3>
        <form onSubmit={(e) => handleEditSubmit(e, selecteditdata.stock_id)}>
            <label htmlFor='id1'>Date : </label>
            <input type="text" name="date"  id="id1" defaultValue={selecteditdata.date}/>
            <br/>
            <br/>
            <label htmlFor='id2'>Trade_Code : </label>
            <input type="text" name="trade_code" id="id2" defaultValue={selecteditdata.trade_code}/>
            <br/>
            <br/>
            <label htmlFor='id3'>High : </label>
            <input type="text" name="high" id="id3" defaultValue={selecteditdata.high}/>
            <br/>
            <br/>
            <label htmlFor='id4'>Low : </label>
            <input type="text" name="low" id="id4" defaultValue={selecteditdata.low}/>
            <br/>
            <br/>
            <label htmlFor='id5'>Open : </label>
            <input type="text" name="open" id="id5" defaultValue={selecteditdata.open}/>
            <br/>
            <br/>
            <label htmlFor='id6'>Close : </label>
            <input type="text" name="close" id="id6" defaultValue={selecteditdata.close}/>
            <br/>
            <br/>
            <label htmlFor='id7'>Volume: </label>
            <input type="text" name="volume" id="id7" defaultValue={selecteditdata.volume}/>
            <br/>
            <br/>
            <button type="submit">EDIT</button>
        </form>
    </>
    )
}

export default EditStock;