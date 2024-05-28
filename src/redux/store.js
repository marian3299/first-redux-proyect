import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/root';

//Creamos el store
export default configureStore({
    reducer: rootReducer
})