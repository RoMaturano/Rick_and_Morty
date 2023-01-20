

 const regexContrasena =
 /^(?=.\d)(?=.[\u0021-\u002b\u003c-\u0040])(?=.[A-Z])(?=.[a-z])\S{6,10}$/;
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

 const validation = (userData) => {
  
  let errors={}
 if (!regexEmail.test(userData.username) ){
   errors.username=" Debe ingresar un E-mail valido";
 }
 if (!userData.username) {
   errors.username="Este campo no puede estar vacio ";
 }
 if(userData.username.length>35){
  errors.username="El e-mail no puede superar los 35 caracteres"
 }
 if (!regexContrasena.test(userData.password)) {
   errors.password="Debe que tener al menos un número"
   }
 if(userData.password.length<6 || userData.password.length>10){
  errors.password="La contraseña debe tener entre 6 y 10 caracteres"
 }
 return errors
};

// if(userData.password.match(/\d\))
// el match  pregunta si matchea con  la regex, 
// es un metodo de string en el cual le pasamos por parametro la condicion
// esa pequeña regex seria la ondicion
///^[^\s@]+@[^\s@]+\.[^\s@]+$/



export default validation