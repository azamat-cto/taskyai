import ImageLogo from "@/assets/img/logo.svg";
import { Link } from "react-router";

function Logo() {
    return (
        <Link
            className="flex items-center gap-x-2 text-lg font-semibold"
            to="/"
        >
            <img className="w-6 h-6" src={ImageLogo} alt="TaskyAI" />
            <span>TaskyAI</span>
        </Link>
    );
}

export default Logo;
