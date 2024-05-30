import "./Botonera.css";

import {nav_click} from '../../redux/actions/navActions.js'; //Importamos la accion
import { connect } from "react-redux";

const Botones = ({title, nav_click}) => { //Recuperamos dentro del componente la propiedad y el estado. Estos datos los envia el store recibidos a traves de connectedBotones

  //Metodo para ejecutar nav_click. Despachamos una accion que se va a mandar al store
  const btnClick = (_title) => { //Recibimos como parametro el titulo desde los botones
    nav_click({ //nav_click recibe como argumento un objeto con los datos que necesitamos para la action, en este caso un titulo
      title: _title 
    });
  }

    return (
        <div className="botonera">
          <header className="App-header">
            <div>
              <h1>{title}</h1>
            </div>
            <ul>
              {/* Agregamos eventos onClik que llame al btnClick pasando como parametro el titulo que es la data que recibe nav_click*/}
              <li onClick={() => btnClick('Home')}>Home</li>
              <li onClick={() => btnClick('List')}>List</li>
              <li onClick={() => btnClick('New')}>New</li>
            </ul>
          </header>
        </div>
      );
}

//Recuperamos la informacion del reducer
const mapStateToProps = (state) => { //Funcion para recuperar el estado y convertirla en propiedades que luego vamos a utilizar 
  //console.log('Estado recibido ',state )
  return{
    title: state.navState.title //Asociamos el estado que creamos dentro de navReducer. Nos va a devolver el estado incial y el estado cada vez que hay un cambio
  }
}


//Aqui recibimos desde el store los parametros estado y la accion necesarios para este componente
const connectedBotones = connect(
  mapStateToProps, //Estado
  {nav_click} //Accion
)(Botones);


export default connectedBotones;
