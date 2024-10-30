import styles from './projects.module.css';

const Projects = () => {
    return (
        <section className={styles.projects}>
            <h2>Mis Proyectos</h2>
            <ul>
                <li>Proyecto 1 - Descripción breve</li>
                <li>Proyecto 2 - Descripción breve</li>
                <li>Proyecto 3 - Descripción breve</li>
            </ul>
        </section>
    );
};

export default Projects;
