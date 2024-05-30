import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/root';

//Aqui se reciben los estados de la vista y se manda a los reducers, y viceversa
//Creamos el store
export default configureStore({
    reducer: rootReducer
})