import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { setData } from "../../Features/Users/Userslice";

const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 140,
        flex: 1,
    },
    {
        field: "username",
        headerName: "Username",
        width: 140,
        flex: 1,
    },
    {
        field: "password",
        headerName: "Password",
        width: 140,
        flex: 1,
    },
];

export const UserTable = () => {
    const { data } = useFetchUsers();
    const dispatch = useDispatch();

    if (data) {
        dispatch(setData(data.data.data));
    }
    const rows = useSelector((state) => state.user.userList);

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                columns={columns}
                rows={rows}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                pageSizeOptions={5}
                checkboxSelection
            />
        </div>
    );
};

export default UserTable;
