import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="w-full">
            <nav className="w-9/12 mx-auto flex items-center justify-between">
                <h1 className="text-white">Resxurces.</h1>
                <ul className="flex gap-2">
                    <li className="">
                        <Link className="text-white" to="form">React Hook Form</Link>
                    </li>
                    <li className="">
                        <Link className="text-white" to="">Principios SOLID</Link>
                    </li>
                    <li className="">
                        <Link className="text-white" to="">Item 3</Link>
                    </li>
                    <li className="">
                        <Link className="text-white" to="">Item 4</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}