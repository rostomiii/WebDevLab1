import {Link} from 'react-router-dom';

export default function Layout () {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Layout</title>
            </head>
            <body>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </body>        
        </html>
    );
}