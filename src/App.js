import './App.css';
import profilePic from './assets/profile.png';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Ritesh Kumar</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#leetcode">LeetCode</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <section id="about" className="section about-section">
        <img src={profilePic} alt="Ritesh Kumar" className="profile-pic" />
        <div>
          <h2>About Me</h2>
          <p>
            I’m Ritesh, an MCA student from Kalinga University with a strong passion for web development and problem solving.
            I specialize in building responsive, full-stack applications using modern JavaScript frameworks and backend APIs.
          </p>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js & Express.js</li>
          <li>MongoDB</li>
          <li>Java</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section id="projects" className="section projects-section">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built with React.</p>
          </div>
          <div className="project-card">
            <h3>Weather App</h3>
            <p>Fetches live weather data using OpenWeatherMap API.</p>
          </div>
          <div className="project-card">
            <h3>Task Manager</h3>
            <p>A to-do list application with full CRUD functionality.</p>
          </div>
          <div className="project-card">
            <h3>Social Media Platform</h3>
            <p>A basic platform allowing users to post, like, and comment.</p>
            <a
              href="https://github.com/Riteshkumarv/Social-media-platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="github" className="section github-section">
        <h2>GitHub Activity</h2>
        <img
          src="https://ghchart.rshah.org/Riteshkumarv"
          alt="Ritesh Kumar's GitHub Contribution Chart"
          className="github-chart"
        />
        <p>
          GitHub Profile:{' '}
          <a
            href="https://github.com/Riteshkumarv"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Riteshkumarv
          </a>
        </p>
      </section>

      <section id="leetcode" className="section leetcode-section">
        <h2>LeetCode & DSA Progress</h2>
        <p>I regularly practice data structures and algorithms to strengthen my problem-solving skills.</p>
        <ul>
          <li><strong>Total Problems Solved:</strong> 139</li>
          <li><strong>Current Streak:</strong> 130 days</li>
          <li><strong>Badges:</strong> 100 Days Badge (2025)</li>
          <li><strong>Problem Difficulty:</strong> Easy (73), Medium (59), Hard (7)</li>
          <li><strong>LeetCode Rank:</strong> 946,885</li>
        </ul>
        <p>
          LeetCode Profile:{' '}
          <a
            href="https://leetcode.com/ritesh_2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/ritesh_2
          </a>
        </p>
      </section>

      <section id="resume" className="section resume-section">
        <h2>Resume</h2>
        <p>
          You can view or download my resume below:
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄 View Resume
        </a>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p><strong>Email:</strong> ritesh74461@example.com</p>
        <p><strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/ritesh-kumar-b41689341/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ritesh-kumar-b41689341
          </a>
        </p>
        <p><strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/Riteshkumarv"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Riteshkumarv
          </a>
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Ritesh Kumar | Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;
