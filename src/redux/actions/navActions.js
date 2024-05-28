import * as types from './actionsTypes';

//Metodo que se va a ejecutar cuando se haga click en los elementos de navegacion
export const nav_click = data => ({ //Recupera un parametro data
    type: types.NAV_CLICK, //Tipo de accion
    payload: { //Devolvemos datos
        title: data.title, //Devolvemos el titulo
    }
})