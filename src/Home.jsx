import profile from "./assets/profile.png";

function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <h1>Hi, I'm</h1>

        <h2>Aggunna Dileep</h2>

        <h3>Full Stack Developer</h3>
        <div className="floating-circle"></div>

        <p>
          Passionate about building modern web applications using React,
          Node.js, Express.js, and SQL.
          <div className="floating-circle"></div>
        </p>
      </div>

      <div className="home-right">
        <div className="floating-circle"></div>
        <img src={profile} alt="Profile" />
      </div>
      <div className="floating-circle"></div>
    </section>
  );
}

export default Home;
