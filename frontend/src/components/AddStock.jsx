function AddStock({handleAddSubmit}){
    return(
        <>
            <h3>ADD</h3>
            <form onSubmit={handleAddSubmit}>
                <label htmlFor='id1'>Date : </label>
                <input type="text" name="date"  id="id1"/>
                <br/>
                <br/>
                <label htmlFor='id2'>Trade_Code : </label>
                <input type="text" name="trade_code" id="id2"/>
                <br/>
                <br/>
                <label htmlFor='id3'>High : </label>
                <input type="text" name="high" id="id3"/>
                <br/>
                <br/>
                <label htmlFor='id4'>Low : </label>
                <input type="text" name="low" id="id4"/>
                <br/>
                <br/>
                <label htmlFor='id5'>Open : </label>
                <input type="text" name="open" id="id5"/>
                <br/>
                <br/>
                <label htmlFor='id6'>Close : </label>
                <input type="text" name="close" id="id6"/>
                <br/>
                <br/>
                <label htmlFor='id7'>Volume : </label>
                <input type="text" name="volume" id="id7"/>
                <br/>
                <br/>
                <button type="submit">ADD</button>
            </form>
        </>
    )
}

export default AddStock