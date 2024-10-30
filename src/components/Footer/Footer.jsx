import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>Sígueme en mis redes sociales</p>
            <ul className={styles.socialLinks}>
                <li><a href="https://web.facebook.com/profile.php?id=100011498852293" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/antonioszx_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://github.com/antonio18099" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/antonio-sanchez-5a9758335/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <p className={styles.signature}>"Viviendo en modo avion"</p>
            <p className={styles.signature}>Creado con dedicación por Antonio José Rodríguez Sánchez</p>
        </footer>
    );
};

export default Footer;
