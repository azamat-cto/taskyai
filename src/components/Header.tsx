import Logo from "@/components/Logo.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full">
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-between h-16 px-4 border backdrop-blur-3xl rounded-xl">
                    <Logo />
                    <div className="flex items-center gap-x-2">
                        <Button asChild variant="ghost">
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/register">Start for free</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
