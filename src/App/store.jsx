import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Users/Userslice";
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
