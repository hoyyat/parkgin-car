import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    UuerInfo: {
        userId: "",
        userEmail: ""
    }
};

//reducer
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {

    },

});

export const {} = authSlice.actions;
export default authSlice.reducer;