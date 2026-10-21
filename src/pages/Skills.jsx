export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "GitHub", "VS Code", "Linux"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Leadership"]
    }
  ]

  return (
    <section className="page">
      <h1>Skills</h1>
      <p>Technologies and skills I work with:</p>

      <div className="skills-grid">
        {skillCategories.map(category => (
          <div key={category.category} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map(skill => (
                <span key={skill} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
