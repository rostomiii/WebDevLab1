export default function Project() {
    return (
        <main className="projects-page">

            <section className="projects-header">
                <p className="section-label">MY WORK</p>
                <h1>Projects</h1>
                <p>
                    Here are some projects that demonstrate my experience
                    in software development, web development, and data analysis.
                </p>
            </section>

            <section className="projects-container">

                {/* CareDupe Project */}
                <div className="project-card">
                    <img
                        src="/images/caredupe.png"
                        alt="CareDupe project"
                    />

                    <div className="project-content">
                        <h2>CareDupe</h2>

                        <p>
                            A software application concept designed to help users
                            find alternative personal care products based on
                            ingredients, characteristics, and user preferences.
                        </p>

                        <p>
                            <strong>My Role:</strong> I participated in the
                            requirements analysis, system design, UML modeling,
                            and development planning of the application.
                        </p>

                        <p>
                            <strong>Outcome:</strong> The project produced a
                            detailed software design that demonstrates how
                            personalized product recommendations can be
                            incorporated into a personal care platform.
                        </p>

                        <div className="project-technologies">
                            <span>Software Design</span>
                            <span>UML</span>
                            <span>AI</span>
                        </div>
                    </div>
                </div>


                {/* Luna Korean Restaurant Project */}
                <div className="project-card">
                    <img
                        src="/images/luna-restaurant.png"
                        alt="Luna Korean Restaurant website"
                    />

                    <div className="project-content">
                        <h2>Luna Korean Restaurant</h2>

                        <p>
                            A restaurant website created to provide customers
                            with information about the restaurant, menu,
                            gallery, events, and other services.
                        </p>

                        <p>
                            <strong>My Role:</strong> I designed and developed
                            multiple pages using HTML, CSS, and JavaScript and
                            implemented interactive web features.
                        </p>

                        <p>
                            <strong>Outcome:</strong> The project resulted in a
                            multi-page restaurant website demonstrating
                            front-end development and responsive web design
                            concepts.
                        </p>

                        <div className="project-technologies">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>


                {/* Data Visualization Project */}
                <div className="project-card">
                    <img
                        src="/images/data-dashboard.png"
                        alt="Food order data visualization dashboard"
                    />

                    <div className="project-content">
                        <h2>Food Order Data Dashboard</h2>

                        <p>
                            A data visualization dashboard created using food
                            order data from a CSV dataset.
                        </p>

                        <p>
                            <strong>My Role:</strong> I processed and normalized
                            the dataset using JavaScript and created
                            visualizations to examine relationships between
                            different variables.
                        </p>

                        <p>
                            <strong>Outcome:</strong> The dashboard displayed
                            data using interactive charts and applied linear
                            regression to analyze relationships within the
                            dataset.
                        </p>

                        <div className="project-technologies">
                            <span>JavaScript</span>
                            <span>Chart.js</span>
                            <span>CSV</span>
                            <span>Linear Regression</span>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}