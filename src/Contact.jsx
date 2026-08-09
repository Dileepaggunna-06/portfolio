import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-subtitle">
        Feel free to reach out. I'm always open to discussing new
        opportunities and exciting projects.
      </p>

      <div className="contact-card">
        <h2>📧 Email</h2>
        <p>
          <a href="mailto:dillepagguna@gmail.com">
            dillepagguna@gmail.com
          </a>
        </p>
      </div>

      <div className="contact-card">
        <h2>📱 Phone</h2>
        <p>
          <a href="tel:+917981412764">
            +91 7981412764
          </a>
        </p>
      </div>

      <div className="contact-card">
        <h2>💻 GitHub</h2>

        <a href="https://github.com/Dileepaggunna-06"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub →
          </a>
      </div>

      <div className="contact-card">
        <h2>🔗 LinkedIn</h2>

        <a href="https://www.linkedin.com/in/aggunna-dileep/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn →
        </a>
      </div>

      <div className="contact-card">
        <h2>🧠 LeetCode</h2>
        <a
          href="https://leetcode.com/u/dileep_aggunna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My LeetCode Profile →
        </a>
      </div>

    </div>
  );
}

export default Contact;