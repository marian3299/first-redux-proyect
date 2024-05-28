import * as types from '../actions/actionsTypes';

//Declaramos el estado incial de lo que vamos a modificar
const initialState = {
    title: 'home'
}

//Metodo para implementar el reducer
const navState = (state = initialState, action) => { //Recupera un estado y una accion
    switch(action.type){
        case types.NAV_CLICK: {
            return{
                ...state, //Devolvemos el estado
                title: action.payload.title //De la accion NAV_CLICK retornamos el title del payload que es el titulo que queremos modificar
            }
        }

        //Si recibimos una accion para la cual no tenemos respuesta devolvemos el estado como esta
        default: return state;
    }
}

export default navState;