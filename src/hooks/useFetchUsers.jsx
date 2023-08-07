import axios from "axios";
import { BACKEND_URL } from "../config";
import { useDispatch } from "react-redux";
import { setData, setError, setLoading } from "../Features/Users/Userslice";

export const useFetchUsers = () => {
    return async () => {
        const dispatch = useDispatch();

        try {
            dispatch(setLoading());
            const res = await axios({
                url: BACKEND_URL,
                method: "get",
                headers: {
                    "Allow-Control-Access-Origin": "*",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .catch((err) => err.response);

            if (res.data.success) {
                let userData = await res.data.data.map((user) => {
                    ({
                        id: user.id,
                        username: user.username,
                        password: user.password,
                    });
                });

                dispatch(setData(userData));
            } else {
                dispatch(setError("UserList not found"));
            }
        } catch (err) {
            dispatch(setError(err));
        }
    };
};