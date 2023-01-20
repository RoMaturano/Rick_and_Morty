import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"


export default function Nav({onSearch}){
    return(
        <div className="App">
            <button className="btn">
            <Link to="about">About</Link>
            </button>

            <button>
                <Link to="/home">LOGOUT</Link>
            </button>

            <button className="btn">
            <Link to="home">Home</Link>
            </button>
            
            <button className="btn">
            Favorite
            </button>
           
            
            <SearchBar onSearch={onSearch} />
        </div>
    )
}