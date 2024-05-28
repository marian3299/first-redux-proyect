import { combineReducers } from "redux";
import navReducer from './navReducer';

//Exportat la combinacion de todos los reducers
export default combineReducers({nav: navReducer}); //Pasamos como parametro un objeto con cada uno de los reducers