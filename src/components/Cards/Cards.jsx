import Card from "../Card/Card"; // lo que hay que hacer es muchos mapeos
// para mostrar las cards y ejecutarlas muchas veces
import "../../styles/App/App.css"

function Cards({ characters ,onClose}) {  

  return (
     <div className='App'>
        {
           characters.map(({id, name, species, gender, image}) => {
             return <Card
              key={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={()=>onClose(id)}
              id={id}
             />
           })
        }
     </div>
  )
}

export default Cards;
