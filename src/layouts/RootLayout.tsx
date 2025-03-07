import { Outlet } from "react-router";

function RootLayout() {
    return (
        <div className="min-h-svh flex flex-col overflow-hidden">
            <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
