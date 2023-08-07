import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
    const data = useSelector((state) => state.user.userList);
    const isLoading = useSelector((state) => state.user.loading);
    const isError = useSelector((state) => state.user.error);

    if (isLoading) {
        return <h2>Loading</h2>;
    }

    if (isError) {
        return <h2>Error</h2>;
    }

    return (
        <div>
            <ul>
                {data?.map((user) => {
                    return <li key="user.id">{user.username}</li>;
                })}
            </ul>
        </div>
    );
};

export default UserList;
