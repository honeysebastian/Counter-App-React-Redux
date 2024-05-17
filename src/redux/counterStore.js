import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';


const counterStore = configureStore({
    reducer: {
        // Add your reducers here
        counterReducer:counterSlice

    }
});

export default counterStore;
