import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/App/App.css"

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    // simula los ciclos de vida
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        // yo quiero agregar a un personaje que se va a entrar por data
        if (data.name) {
          // aca le digo si hay un data.name osea si existe
          setCharacter(data); // se ejecuta esto, es decir guadra aca la info que viene de fetch
          // del personaje uqef ui a buscar
        } else {
          window.alert("No hay personaje con ese id");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className="App">
      <br/>
      <button className="btn">
        <Link to="/home">Home</Link>
      </button> <br/><br/>
      <div className="contenedor">
       <div className="pp" >
      <h2 >{character.name}</h2>
      <p >{character.status}</p>
      <p >{character.specie}</p>
      <p >{character.gender}</p>
      <p >{character?.origin?.name}</p> <br/>
      </div>
      <div className="imgDetal" >
      <img src={character?.image} alt={character.name}  />
      </div>
      </div>
      
    </div>
  );
};

export default Detail;
