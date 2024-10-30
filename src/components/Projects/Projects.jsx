import styles from './projects.module.css';

const Projects = () => {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Mis Proyectos</h2>
            <div className={styles.projectList}>
                <a href="https://english-blue.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.project}>
                    <img src="src/assets/img/my page.png" alt="Project 1" className={styles.projectImage} />
                    <div className={styles.projectInfo}>
                        <h3>My Page 2</h3>
                        <p>Este proyecto es una página web en inglés que funciona como portafolio. Aquí muestro mis habilidades y trabajos previos, orientado a un público angloparlante.</p>
                    </div>
                </a>
                <a href="https://fake-store--chi.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.project}>
                    <img src="src/assets/img/fake store.png" alt="Project 1" className={styles.projectImage} />
                    <div className={styles.projectInfo}>
                        <h3>Fake Store</h3>
                        <p>Este proyecto es una tienda en línea que utiliza la API de Fake Store para mostrar productos disponibles en tiempo real. Los usuarios pueden explorar diferentes categorías, ver detalles de productos y realizar compras de manera sencilla. La página está orientada a un público interesado en compras en línea y permite una experiencia interactiva y dinámica.</p>
                    </div>
                </a>
                <a href="https://simpsons-bice.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.project}>
                    <img src="src/assets/img/simpsons.png" alt="Project 1" className={styles.projectImage} />
                    <div className={styles.projectInfo}>
                        <h3>Simpsons Character Gallery</h3>
                        <p>Este proyecto es una galería de personajes de *Los Simpsons* que utiliza una API para mostrar información sobre los personajes de la serie. Los usuarios pueden generar una card con un personaje aleatorio y también tienen la opción de generar múltiples cards a la vez. Además, se ha implementado un buscador que permite filtrar personajes por nombre, ofreciendo una experiencia interactiva y divertida para los fanáticos de la serie.</p>
                    </div>
                </a>
                {/* Puedes agregar más proyectos aquí de forma similar */}
            </div>
        </section>
    );
};

export default Projects;
