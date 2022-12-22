import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './modules/authenticateReducer';
import userReducer from './modules/userReducer';

const store = configureStore({
    reducer:{
        auth: authenticateReducer,
        user: userReducer,
    }
});

export default store;