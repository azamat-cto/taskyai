import { createBrowserRouter, type RouteObject } from "react-router";
import RootLayout from "../layouts/RootLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";

const rootRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <HomePage />,
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: rootRouteChildren,
    },
]);

export default router;
