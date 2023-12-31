import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    userList: [],
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setData: (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.userList = action.payload;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { setData, setError, setLoading } = userSlice.actions;
export default userSlice.reducer;
