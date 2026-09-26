import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to My Personal Portfolio</h1>

            <h2>Hi, I'm Rostom Lamadrid III</h2>

            <p>
                Welcome to my personal portfolio website. I am an Artificial
                Intelligence - Software Engineering Technology student interested in
                software development, web development, and technology.
            </p>

            <h2>My Mission</h2>

            <p>
                My goal is to continue developing my technical skills and
                create useful software solutions through programming,
                problem-solving, and continuous learning.
            </p>

            <Link to="/about">
                <button>Learn More About Me</button>
            </Link>
        </div>
    );
}