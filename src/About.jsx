import './About.css'

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          Full stack developer focused on building practical, user-friendly web
          applications with modern tools.
        </p>
      </header>

      <div className="about-grid">
        <div className="about-card about-card-wide">
          <h2>Who I Am</h2>
          <p>
            Hello! I'm <strong>Aggunna Dileep</strong>, a passionate Full Stack
            Developer who enjoys building modern and scalable web applications.
            I love learning new technologies and solving real-world problems
            through software development.
          </p>
        </div>

        <div className="about-card">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-label">B.Tech</span>
              <h3>IIIT Dharwad</h3>
            </div>
            <div className="timeline-item">
              <span className="timeline-label">Intermediate</span>
              <h3>Sri Bhavisya Educational Academy</h3>
            </div>
            <div className="timeline-item">
              <span className="timeline-label">SSC</span>
              <h3>Sompeta Srinivasa Vidya Nilayam</h3>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h2>Experience</h2>
          <p className="experience-intro">
            Built <strong>2 public-useful projects</strong> using modern web
            technologies.
          </p>
          <ul className="project-list">
            <li>
              <strong>NearHelp</strong>
              <span>A platform to connect users with nearby helpers and services.</span>
            </li>
            <li>
              <strong>Course Station</strong>
              <span>An online course management platform.</span>
            </li>
          </ul>
        </div>

        <div className="about-card about-card-wide">
          <h2>Skills</h2>
          <div className="skill-groups">
            <div className="skill-group">
              <h3>Frontend</h3>
              <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>React Native</span>
              </div>
            </div>
            <div className="skill-group">
              <h3>Backend</h3>
              <div className="skills">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>SQL</span>
                <span>Python</span>
              </div>
            </div>
            <div className="skill-group">
              <h3>Other</h3>
              <div className="skills">
                <span>MATLAB</span>
                <span>Git</span>
                <span>RAG</span>
                <span>LLMs</span>
                <span>github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
