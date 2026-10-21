export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Brief description of what this project does and the technologies used.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Another interesting project demonstrating full-stack capabilities.",
      technologies: ["React", "PostgreSQL", "Express"],
      link: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A project showcasing API design and backend optimization.",
      technologies: ["Python", "FastAPI", "Docker"],
      link: "https://github.com",
      demo: "https://example.com"
    }
  ]

  return (
    <section className="page">
      <h1>Projects</h1>
      <p>Here are some of my recent projects:</p>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
