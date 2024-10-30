import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Sígueme en mis redes sociales</p>
            <ul className={styles.socialLinks}>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
                <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
