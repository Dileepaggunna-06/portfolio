import "./Project.css";

function Projects() {

  const projects = [
    {
      title: "NearHelp",
      tech: "React • Node.js • Express.js • SQL • JWT",
      desc: "A full-stack platform that helps users find nearby services and people with secure authentication."
    },
    {
      title: "Course Station",
      tech: "React • Node.js • Express.js • SQL",
      desc: "An online learning platform where students can explore and manage courses."
    },
    {
      title: "NLP Document Ranking",
      tech: "Python • NLP",
      desc: "Ranks documents based on relevance using Natural Language Processing techniques."
    },
    {
      title: "Diet Tracker App",
      tech: "React Native",
      desc: "Tracks daily meals, calories, and health goals with an easy-to-use interface."
    },
    {
      title: "Weather App",
      tech: "React Native",
      desc: "Displays live weather information using a weather API."
    },
    {
      title: "Portfolio Website",
      tech: "React.js",
      desc: "A personal portfolio showcasing my education, skills, and projects."
    },
    {
      title: "React ID Card App",
      tech: "React.js",
      desc: "A responsive digital ID card application with a clean UI."
    },
    {
      title: "Todo List App",
      tech: "React Native",
      desc: "Create, edit, and manage daily tasks efficiently."
    }
  ];

  return (
    <div className="projects-container">

      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <h2>{project.title}</h2>

            <h4>{project.tech}</h4>

            <p>{project.desc}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Projects;