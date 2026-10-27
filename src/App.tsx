import { useEffect, useState } from 'react'
import './App.css'
import { portfolioData as data } from './portfolioData'

type Theme = 'dark' | 'light'

function App() {
  const [certificateFilter, setCertificateFilter] = useState('All')
  const [certificateSearch, setCertificateSearch] = useState('')
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('jayasri-portfolio-theme')
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('jayasri-portfolio-theme', theme)
  }, [theme])

  return <div className="portfolio" data-theme={theme}>
    <header className="navbar">
      <a href="#home" className="brand">Jayasri<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#achievements">Achievements</a><a href="#certificates">Courses & Events</a><a href="#contact">Contact</a></nav>
      <div className="nav-actions"><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? '☀ Light' : '☾ Dark'}</button><a href={data.github} target="_blank" rel="noreferrer" className="nav-button">GitHub ↗</a></div>
    </header>
    <main>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="welcome-label"><span className="status-dot" /> WELCOME TO MY PORTFOLIO</p>
          <p className="small-heading">HI, I'M {data.name.toUpperCase()}</p>
          <h1>{data.headline.split(', ')[0]},<br/><span>{data.headline.split(', ').slice(1).join(', ') || 'building tomorrow.'}</span></h1>
          <p className="hero-description">{data.introduction}</p>
          <div className="hero-buttons"><a href="#projects" className="primary-button">Explore my projects ↓</a><a href={data.linkedin} target="_blank" rel="noreferrer" className="secondary-button">Connect on LinkedIn ↗</a></div>
          <div className="social-links"><a href={data.github} target="_blank" rel="noreferrer">GitHub ↗</a><span>•</span><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>•</span><a href={`mailto:${data.email}`}>Email ↗</a></div>
        </div>
        <div className="hero-art" aria-label="Developer profile card"><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <article className="profile-card"><div className="card-top"><span>ALWAYS LEARNING</span><span className="online-dot"/></div><div className="profile-avatar">{data.initials}</div><h2>{data.name}</h2><p className="profile-role">{data.role}</p><p className="profile-college">{data.college}</p><div className="profile-tags"><span>Python</span><span>AI / ML</span><span>Problem-solving</span></div><div className="card-footer"><span>Curious by nature.</span><span>Growing every day ✳</span></div></article>
          <div className="floating-note note-one"><span>✳</span> Learning through projects</div><div className="floating-note note-two">{'</>'} Building with purpose</div>
        </div>
      </section>
      <section className="interest-grid" aria-label="Areas of interest">
        <article className="interest-card"><span className="card-icon">✳</span><h3>Artificial Intelligence</h3><p>Curious about how machines learn and solve problems.</p></article>
        <article className="interest-card"><span className="card-icon">{'</>'}</span><h3>Software Development</h3><p>Turning ideas into thoughtful, practical projects.</p></article>
        <article className="interest-card"><span className="card-icon">↗</span><h3>Data Analytics</h3><p>Exploring data to ask better questions and find meaning.</p></article>
      </section>
      <section className="content-section about-section" id="about"><div className="section-heading"><p className="section-label">A LITTLE ABOUT ME</p><h2>My journey starts with curiosity.</h2></div>
        <div className="about-layout"><div className="about-text">{data.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a href={data.github} target="_blank" rel="noreferrer" className="text-link">Explore my GitHub ↗</a></div>
          <article className="education-card"><span className="education-icon">✳</span><p className="section-label">MY EDUCATION</p><h3>{data.education}</h3><p>{data.college}</p><div className="card-divider"/><p className="muted-text">{data.educationNote} · Expected graduation: {data.graduationYear}</p></article></div>
      </section>
      <section className="skills-section" id="skills"><div className="content-section"><div className="section-heading"><p className="section-label">WHAT I'M LEARNING</p><h2>My growing skill set.</h2><p className="section-description">Skills developed through coursework, practice, and personal projects.</p></div>
        <div className="skills-grid">{data.skills.map((skill, index) => <article className="skill-card" key={skill.title}><span className="skill-icon">{['</>', '✳', '◈', '↗'][index % 4]}</span><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div></div></section>
      <section className="content-section projects-section" id="projects"><div className="section-heading"><p className="section-label">THINGS I'VE BEEN WORKING ON</p><h2>Projects, experiments, and progress.</h2><p className="section-description">A selection of repositories from my learning journey. Open each repository for implementation details and code.</p></div>
        <div className="projects-grid">{data.projects.map((project, index) => <article className={`project-card ${project.featured ? 'featured-project' : ''}`} key={project.repo}><div className="project-card-top"><span className="project-symbol">{index === 0 ? '✳' : '{ }'}</span><span className="project-index">PROJECT / {String(index + 1).padStart(2, '0')}</span></div><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={`${data.github}/${project.repo}`} target="_blank" rel="noreferrer">View repository ↗</a></div></article>)}</div>
        <div className="all-projects"><p>Want to see more experiments and coursework?</p><a className="secondary-button" href={`${data.github}?tab=repositories`} target="_blank" rel="noreferrer">View all GitHub repositories ↗</a></div>
      </section>
      <section className="content-section achievements-section" id="achievements"><div className="section-heading"><p className="section-label">MILESTONES & EVENTS</p><h2>Building, presenting, and learning.</h2><p className="section-description">Awards and hackathons are listed separately by their details. Participation means participation, not a prize or finalist claim.</p></div>
        <div className="achievement-list">{data.achievements.map((item) => <article className="achievement-card" key={`${item.title}-${item.kind}`}><span className="achievement-mark">{item.award ? '🏆' : '✳'}</span><div><p className="achievement-kicker">{item.kind}</p><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>
      </section>
      <section className="content-section certificates-section" id="certificates">
        <div className="section-heading"><p className="section-label">COURSES, CERTIFICATES & EVENTS</p><h2>Proof of learning, all in one place.</h2><p className="section-description">Browse the course certificates, hackathon participation, and technical-event certificates. Select any card to open the original file.</p></div>
        <div className="certificate-toolbar">
          <div className="certificate-filters" role="group" aria-label="Filter certificates">
            {['All', 'Course Certificates', 'Hackathons & Events', 'Technical Events'].map((filter) => <button type="button" key={filter} className={`certificate-filter ${certificateFilter === filter ? 'active' : ''}`} onClick={() => setCertificateFilter(filter)}>{filter === 'Course Certificates' ? 'Courses' : filter === 'Hackathons & Events' ? 'Hackathons & Events' : filter}</button>)}
          </div>
          <label className="certificate-search"><span className="sr-only">Search certificates</span><input type="search" value={certificateSearch} onChange={(event) => setCertificateSearch(event.target.value)} placeholder="Search certificates…" /></label>
        </div>
        <p className="certificate-count">Showing {data.certificates.filter((item) => (certificateFilter === 'All' || item.category === certificateFilter) && `${item.title} ${item.category} ${item.subcategory}`.toLowerCase().includes(certificateSearch.toLowerCase())).length} of {data.certificates.length} certificates and event records</p>
        <div className="certificate-grid">
          {data.certificates.filter((item) => (certificateFilter === 'All' || item.category === certificateFilter) && `${item.title} ${item.category} ${item.subcategory}`.toLowerCase().includes(certificateSearch.toLowerCase())).map((certificate, index) => <article className="certificate-card" key={`${certificate.file}-${certificate.title}`}>
            <a className="certificate-preview" href={certificate.file} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title}`}>
              <img src={certificate.preview} alt={`Preview of ${certificate.title}`} loading={index > 5 ? 'lazy' : 'eager'} />
              <span className="certificate-file-badge">{certificate.fileType}</span>
              <span className="certificate-open-overlay">Open certificate ↗</span>
            </a>
            <div className="certificate-card-body"><p className="certificate-category">{certificate.category}</p><h3>{certificate.title}</h3>{certificate.issuer && <p className="certificate-meta">{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ''}</p>}<div className="certificate-card-actions"><a href={certificate.file} target="_blank" rel="noreferrer">View original ↗</a><a href={certificate.file} download>Download ↓</a></div></div>
          </article>)}
        </div>
        {data.certificates.filter((item) => (certificateFilter === 'All' || item.category === certificateFilter) && `${item.title} ${item.category} ${item.subcategory}`.toLowerCase().includes(certificateSearch.toLowerCase())).length === 0 && <div className="certificate-empty"><h3>No matching certificates</h3><p>Try another search term or select a different category.</p></div>}
        <p className="certificate-edit-tip"><strong>Easy updates:</strong> add new files inside <code>public/certificates/</code>, then add their title, category, file path, and preview path in <code>src/portfolioData.ts</code>. Full instructions are in <code>README.md</code>.</p>
      </section>
      <section className="contact-section" id="contact"><div className="contact-panel"><span className="contact-symbol">✳</span><p className="section-label">LET'S CONNECT</p><h2>Good things start with a conversation.</h2><p>I'm happy to learn from others, exchange ideas, and explore opportunities to grow in technology.</p><div className="contact-buttons"><a href={`mailto:${data.email}`} className="primary-button">Email me ↗</a><a href={data.linkedin} target="_blank" rel="noreferrer" className="secondary-button">Connect on LinkedIn ↗</a></div></div></section>
    </main>
    <footer className="footer"><a href="#home" className="brand">Jayasri<span>.</span></a><p>Made with curiosity, patience, and a love for learning.</p><a href="#home" className="text-link">Back to top ↑</a></footer>
  </div>
}
export default App
