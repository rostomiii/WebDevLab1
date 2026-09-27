import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className="home">
            <section className="hero">
                <div className="hero-content">
                    <p className="hero-intro">Hello, I'm</p>

                    <h1>Rostom Lamadrid III</h1>

                    <h2>Artificial Intelligence - Software Engineering Student</h2>

                    <p className="hero-description">
                        Welcome to my personal portfolio. I am passionate about
                        software development, web development, artificial
                        intelligence, and creating solutions through technology.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/about" className="primary-button">
                            About Me
                        </Link>

                        <Link to="/project" className="secondary-button">
                            View My Projects
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mission">
                <h2>My Mission</h2>

                <p>
                    My mission is to continuously develop my skills as a
                    software engineer and use technology to create practical,
                    efficient, and meaningful solutions.
                </p>
            </section>
        </main>
    );
}