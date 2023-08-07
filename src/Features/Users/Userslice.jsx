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
            state.loading = true;
        },
        setData: (state, action) => {
            state.loading = false;
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
