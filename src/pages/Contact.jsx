import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="page">
      <h1>Get In Touch</h1>
      <p>Feel free to reach out to me for any inquiries or opportunities.</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> <a href="mailto:samrubinaws@gmail.com">samrubinaws@gmail.com</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/sam-rubin" target="_blank" rel="noopener noreferrer">github.com/sam-rubin</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
          {submitted && <p className="success-message">Message sent! Thanks for reaching out.</p>}
        </form>
      </div>
    </section>
  )
}
