import { combineReducers } from "redux";
import navState from './navReducer';

//Recibimos estados del store y enviamos estados al store
//Exportat la combinacion de todos los reducers
export default combineReducers({navState}); //Pasamos como parametro un objeto con cada uno de los reducers