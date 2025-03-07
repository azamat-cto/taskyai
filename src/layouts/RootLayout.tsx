import { Outlet } from "react-router";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

function RootLayout() {
    return (
        <div className="min-h-svh flex flex-col overflow-hidden">
            <Header />
            <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
