import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../config";

const getUsers = async () => {
    const data = await fetch("http://localhost:3001")
        .then((res) => res.json())
        .catch((err) => err.response);
    console.log(data);
    return data;
};

export const useFetchUsers = () => {
    return useQuery({
        queryKey: ["userList"],
        queryFn: getUsers,
        refetchOnMount: false,
        staleTime: 1000000,
    });
};
