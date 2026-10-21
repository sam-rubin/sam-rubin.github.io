export default function About() {
  return (
    <section className="page">
      <h1>About Me</h1>
      <p>
        I'm a software engineer with a passion for building robust, scalable applications.
        With experience in both frontend and backend development, I enjoy taking projects
        from concept to production.
      </p>

      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Software Engineer</h3>
        <p className="company">Company Name | 20XX - Present</p>
        <p>
          Working on full-stack development, leading features from design through deployment.
          Mentoring junior developers and contributing to architectural decisions.
        </p>
      </div>

      <div className="experience-item">
        <h3>Junior Software Engineer</h3>
        <p className="company">Previous Company | 20XX - 20XX</p>
        <p>
          Started my career building web applications, learning best practices and
          collaborating with experienced engineers.
        </p>
      </div>

      <h2>Education</h2>
      <div className="education-item">
        <h3>Computer Science Degree</h3>
        <p className="school">University Name | Graduation Year</p>
      </div>
    </section>
  )
}
