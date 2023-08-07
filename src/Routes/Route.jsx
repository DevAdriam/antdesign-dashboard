import { createBrowserRouter, useRoutes } from "react-router-dom";
import Container from "../Layouts/Dashboard";
import UserList from "../Components/Users/UserList";
import UserTable from "../Components/Users/UserTable";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Container />,
            },
            {
                path: "/userlist",
                element: <UserList />,
            },
            {
                path: "/usertable",
                element: <UserTable />,
            },
        ],
    },
]);
