import React, { useEffect } from "react";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const UserList = () => {
    const { isLoading, isError, error, data } = useFetchUsers();

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <div>
            <ul>
                {data.data.data.map((user) => {
                    return <li key="user.id">{user.username}</li>;
                })}
            </ul>
        </div>
    );
};

export default UserList;
