import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>Sígueme en mis redes sociales</p>
            <ul className={styles.socialLinks}>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <p className={styles.signature}>"Viviendo en modo avion"</p>
            <p className={styles.signature}>Creado con dedicación por Antonio José Rodríguez Sánchez</p>
        </footer>
    );
};

export default Footer;
