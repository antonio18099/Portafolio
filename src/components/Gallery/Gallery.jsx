import styles from './gallery.module.css';

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2>Galería de Imágenes</h2>
            <div className={styles.imageContainer}>
                <img src="url_imagen1.jpg" alt="Descripción 1" />
                <img src="url_imagen2.jpg" alt="Descripción 2" />
                <img src="url_imagen3.jpg" alt="Descripción 3" />
                {/* Agrega más imágenes según sea necesario */}
            </div>
        </section>
    );
};

export default Gallery;
