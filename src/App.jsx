// App.jsx
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Studies from './components/Studies/Studies';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import './App.css'; // Archivo CSS general

const App = () => {
    return (
        <div className="container">
            <Header />
            <AboutMe />
            <Studies />
            <Projects />
            <Gallery />
            <Footer />
        </div>
    );
};

export default App;
