import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    UuerInfo: {
        userId: "",
        userEmail: ""
    }
};

//reducer
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {

    },

});

export const {} = userSlice.actions;
export default userSlice.reducer;