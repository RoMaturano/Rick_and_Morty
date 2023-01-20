import { useState } from 'react'
import "../../styles/Buttons/Button.css"
import "../../styles/Varios/input.css"


function SearchBar({ onSearch }) {
   const[id,setId]=useState("")
   const handleChange = (event)=>{
      setId(event.target.value)
   }

   return (
      <div className="App">
         <input className='inputS' type='search'  value={id} onChange={handleChange}/>
         <button className='btn' onClick={()=>onSearch(id)}>Agregar</button> <br/><br/><br/>
      </div>
   );
}

export default SearchBar;
