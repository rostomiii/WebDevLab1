export default function Services() {
    return (
        <main className="services-page">

            {/* Services Page Header */}
            <section className="services-header">
                <p className="section-label">WHAT I CAN DO</p>
                <h1>My Services</h1>

                <p>
                    I offer technical services based on my experience and
                    education in software engineering, web development,
                    databases, and programming.
                </p>
            </section>

            {/* Services Cards */}
            <section className="services-container">

                {/* Web Development */}
                <div className="service-card">
                    <div className="service-icon">&lt;/&gt;</div>

                    <h2>Web Development</h2>

                    <p>
                        Building responsive and user-friendly websites using
                        modern web technologies.
                    </p>

                    <div className="service-skills">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                    </div>
                </div>


                {/* Software Development */}
                <div className="service-card">
                    <div className="service-icon">{"{ }"}</div>

                    <h2>Software Development</h2>

                    <p>
                        Developing software solutions using programming
                        concepts, object-oriented programming, and
                        problem-solving techniques.
                    </p>

                    <div className="service-skills">
                        <span>C#</span>
                        <span>JavaScript</span>
                        <span>OOP</span>
                        <span>Git</span>
                    </div>
                </div>


                {/* Database Development */}
                <div className="service-card">
                    <div className="service-icon">DB</div>

                    <h2>Database Development</h2>

                    <p>
                        Designing and working with relational databases,
                        including database queries, relationships, and
                        data organization.
                    </p>

                    <div className="service-skills">
                        <span>SQL</span>
                        <span>Oracle</span>
                        <span>Database Design</span>
                        <span>Normalization</span>
                    </div>
                </div>

            </section>
        </main>
    );
}