import profile from "./assets/profile.png";

function Home() {
  return (
    <section className="home">

      <div className="home-left">
        <h1>Hi, I'm</h1>

        <h2>Aggunna Dileep</h2>

        <h3>Full Stack Developer</h3>

        <p>
          Passionate about building modern web applications
          using React, Node.js, Express.js, and SQL.
        </p>
      </div>

      <div className="home-right">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Home;