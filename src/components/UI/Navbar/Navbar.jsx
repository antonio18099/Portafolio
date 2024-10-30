import { ItemNavbar } from "../itemNavbar/itemNavbar"



export const Navbar = () => {
    return (
        <nav>
            <h1> Benito Camelas</h1>
            <ul>
                <ItemNavbar text="¿Quien soy?" />
                <ItemNavbar text="Mi familia" />
                <ItemNavbar text="Mis estudios" />
            </ul>
        </nav>
    )
}


