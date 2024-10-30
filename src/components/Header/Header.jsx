import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Antonio Rodríguez</h1>
            <nav>
                <ul className={styles.navList}>
                    <li>Acerca de mí</li>
                    <li>Mis estudios</li>
                    <li>Mis proyectos</li>
                    <li>Galería</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
