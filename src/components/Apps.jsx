import Formulario from "./components/Formulario";
import PrincipiosSolid from "./components/PrincipiosSolid";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/form" element={<Formulario />} />
                <Route path="/solid" element={<PrincipiosSolid />} />
                <Route path="*" element={<p>Not found page</p>} />
            </Routes>
            <Footer />
        </Router>
    )
    }