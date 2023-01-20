import React from "react";
import "./Form.css";
import { useState,useEffect } from "react";
import validation from "./Validation";


const Form = ({login}) => {
  
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
   
    setUserData({
      ...userData,
      [event.target.name]:event.target.value,
    });
    setErrors(// le paso todo a medida que la persona va a escribiendo
    validation({
        ...userData,
        [event.target.name]:event.target.value,
      })
    )
  };

useEffect(() => {
  validation();
  }, [userData]);

  const handleSubmit=(event)=>{
    event.preventDefault()
    login(userData)
  }


  //onSubmit={handleSubmit} 

  return (
    <form onSubmit={handleSubmit} className="formu">
      <br />
      <label className="lblForm" htmlFor="password">
        Contraseña
      </label>
      <br />
      {errors.password && <p>{errors.password}</p>}
      <input
        className="inputForm"
        onChange={handleInputChange}
        value={userData.password}
        name="password"
        type="password"
      />
      <br />
      <br />

      <label className="lblForm" htmlFor="username">
        Usuario
      </label>
      <br />
      <input
        className="inputForm"
        onChange={handleInputChange}
        value={userData.username}
        name="username"
        type="text"
        maxLength="35"
      />
      <br />
      <br />
      {errors.username && <p>{errors.username}</p>} 

      <button className="btnForm" type="submit">
        Aceptar
      </button>
    </form>
  );
};

export default Form;
