import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

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
    const rows = useSelector((state) => state.user.userList);

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                columns={columns}
                rows={rows}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
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
