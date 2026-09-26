export default function Education() {
    return (
        <main className="education-page">

            {/* Education Page Header */}
            <section className="education-header">
                <p className="section-label">MY BACKGROUND</p>
                <h1>Education</h1>

                <p>
                    My educational background reflects my experience across
                    software engineering, aviation, and automotive technology.
                </p>
            </section>

            {/* Education Timeline */}
            <section className="education-container">

                {/* Artificial Intelligence - Software Engineering */}
                <div className="education-card">
                    <div className="education-year">
                        Present
                    </div>

                    <div className="education-content">
                        <h2>
                            Artificial Intelligence - Software Engineering
                        </h2>

                        <h3>Centennial College</h3>

                        <p>
                            Currently studying Artificial Intelligence -
                            Software Engineering and developing skills in
                            programming, software development, artificial
                            intelligence, web development, databases, and
                            software design.
                        </p>

                        <div className="education-skills">
                            <span>Software Engineering</span>
                            <span>Artificial Intelligence</span>
                            <span>Web Development</span>
                            <span>Database Systems</span>
                        </div>
                    </div>
                </div>


                {/* Aviation Studies */}
                <div className="education-card">
                    <div className="education-year">
                        2020 - 2021
                    </div>

                    <div className="education-content">
                        <h2>
                            Bachelor of Science in Aviation - Major in Flying
                        </h2>

                        <h3>Airlink International Aviation School</h3>

                        <p>
                            Completed 40 units of undergraduate studies in
                            aviation, gaining foundational knowledge in civil
                            aviation, aviation law, and applied physics.
                        </p>

                        <div className="education-skills">
                            <span>Civil Aviation</span>
                            <span>Aviation Law</span>
                            <span>Applied Physics</span>
                        </div>
                    </div>
                </div>


                {/* Motive Power */}
                <div className="education-card">
                    <div className="education-year">
                        2023
                    </div>

                    <div className="education-content">
                        <h2>Motive Power</h2>

                        <h3>Centennial College</h3>

                        <p>
                            Completed studies in the Motive Power program at
                            Centennial College, developing technical knowledge,
                            practical skills, and problem-solving abilities in
                            automotive technology.
                        </p>

                        <div className="education-skills">
                            <span>Automotive Technology</span>
                            <span>Technical Skills</span>
                            <span>Problem Solving</span>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}