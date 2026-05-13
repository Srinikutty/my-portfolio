import { useState } from 'react';
import './App.css';

const profile = {
  name: 'Srinivasan T',
  title: 'Software Developer',
  location: 'Sambavar Vadakarai, Tamil Nadu',
  phone: '6385781593',
  email: 'srinikutty548@gmail.com',
  portfolio: 'https://srinikutty.github.io/My_Portfolio/',
  summary:
    'I am a software developer with experience across ETL data migration, Flutter mobile apps, CMS websites, and UI/UX design. I enjoy building reliable, responsive digital products with clean interfaces and practical user flows.',
};

const navLinks = ['About', 'Experience', 'Skills', 'Education', 'Projects', 'Contact'];

const experiences = [
  {
    role: 'Software Developer',
    company: 'Saptarishi Solutions Pvt Ltd',
    location: 'Hyderabad',
    period: 'Nov 2025 - Mar 2026',
    points: [
      'Led end-to-end ETL data migration for 15 countries from MySQL to PostgreSQL to support CRM integration.',
      'Used pgloader to extract, transform, and load data through PSA, Staging, Pre-Production, and Production environments.',
      'Performed data cleaning, schema mapping, foreign key resolution, ID mapping, validation checks, and logging.',
      'Handled incomplete source datasets and supported transaction-safe production releases with reconciliation checks.',
    ],
  },
  {
    role: 'Jr. Software Engineer',
    company: 'Techved Consulting India Pvt Ltd',
    location: 'Mumbai',
    period: 'Jan 2025 - Oct 2025',
    points: [
      'Worked on Whispering Infinity, a Flutter application for Art of Living teachers to conduct and manage meditation courses.',
      'Contributed to class scheduling, participant management, course content delivery, and guided meditation support features.',
    ],
  },
  {
    role: 'Consultant, CX-Operations',
    company: 'Sumeru Software Solutions',
    location: 'Bangalore',
    period: 'Apr 2024 - Dec 2024',
    points: [
      'Built Art of Living websites for multiple countries using Shopamine CMS.',
      'Worked on UI/UX design projects in Figma to improve user experience and visual clarity.',
    ],
  },
];

const skills = ['HTML & CSS', 'JavaScript', 'PostgreSQL', 'Flutter', 'Dart', 'Figma'];

const projects = [
  {
    name: 'Art of Living - Pathfinder',
    type: 'ETL Migration',
    description:
      'Migrated data for 15 countries from MySQL to PostgreSQL for CRM integration, including schema mapping, ID mapping, validation, and deployment reconciliation.',
  },
  {
    name: 'Portfolio',
    type: 'Frontend Website',
    description:
      'Designed and developed a responsive personal portfolio using HTML, CSS, and JavaScript to present skills, projects, experience, and contact information.',
  },
  {
    name: 'Food Supply Chain For Functional Service System',
    type: 'Application',
    description:
      'Created a food court ordering application where users can browse hotels, select dishes, place orders, and receive delivery or pickup timing updates.',
  },
];

const contactLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/__srini_06?igsh=bmZjMzB6ZHU3bjFn&utm_source=qr',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.8" />
      </svg>
    ),
  },
  {
    name: 'Gmail',
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7.5v9A2.5 2.5 0 0 0 6.5 19h11A2.5 2.5 0 0 0 20 16.5v-9" />
        <path d="m4.7 7.2 7.3 5.7 7.3-5.7" />
      </svg>
    ),
  },
  {
    name: 'Naukri',
    href: 'https://www.naukri.com/mnjuser/profile',
    icon: <strong aria-hidden="true">N</strong>,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${formData.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`
    );

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#about" aria-label="Srinivasan T portfolio home">
          ST
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`} aria-label="Portfolio navigation">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-content">
            <p className="eyebrow">{profile.title}</p>
            <h1>{profile.name}</h1>
            <p className="hero-text">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Contact Me
              </a>
            </div>

          </div>

          <div className="profile-card">
            <img src="/profile.png" alt="Srinivasan T smiling near a window" />
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Career</p>
            <h2>Experience</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
                <div className="timeline-meta">
                  <span>{experience.period}</span>
                  <strong>{experience.location}</strong>
                </div>
                <div className="timeline-body">
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section accent-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Toolkit</p>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Academic</p>
            <h2>Education</h2>
          </div>

          <article className="education-card">
            <span>2020 - 2024</span>
            <h3>Psn College of Engineering and Technology</h3>
            <p>B.E Computer Science</p>
            <strong>CGPA: 7.449</strong>
          </article>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Get In Touch</p>
            <h2>Contact Me</h2>
            <div className="social-links" aria-label="Contact links">
              {contactLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noreferrer" aria-label={link.name}>
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me about your project" required />
            </label>
            <button className="button primary" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
