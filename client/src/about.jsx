export default function About() {
    return (
        <main className="about-page">
            <section className="about-container">

                {/* Profile image placeholder */}
                <div className="profile-image">
                    <img
                        src="/images/profile.png"
                        alt="Rostom Lamadrid III"
                    />
                </div>

                {/* About Me information */}
                <div className="about-content">
                    <p className="section-label">ABOUT ME</p>

                    <h1>Rostom Lamadrid III</h1>

                    <h2>Artificial Intelligence - Software Engineering Student</h2>

                    <p>
                        I am an Artificial Intelligence - Software Engineering
                        student with a strong interest in software development,
                        web technologies, and problem-solving. My professional
                        experience in operations and team leadership has helped
                        me develop strong communication, organization, and
                        collaboration skills.
                    </p>

                    <p>
                        I enjoy learning new technologies and applying my
                        technical skills to practical projects. My goal is to
                        continue growing as a software developer while combining
                        my technical knowledge with my experience in leadership
                        and project planning.
                    </p>

                    {/* Opens the resume PDF in a new browser tab */}
                    <a
                        href="/Rostomlamadrid.pdf"
                        className="resume-button"
                    >
                        View My Resume
                    </a>
                </div>

            </section>
        </main>
    );
}