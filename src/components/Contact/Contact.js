import React, { useState } from "react";
// You will need to install emailjs-com: npm install emailjs-com
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";

// Set these in your .env file at the project root:
// REACT_APP_EMAILJS_SERVICE_ID=your_service_id
// REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
// REACT_APP_EMAILJS_USER_ID=your_user_id
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then(
        (result) => {
          setSubmitted(true);
        },
        (error) => {
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  if (submitted) {
    return (
      <Container fluid className="contact-section">
        <Row className="justify-content-center align-items-center" style={{ width: "100%", minHeight: "calc(100vh - 200px)" }}>
          <Col xs="12" sm="10" md="8" lg="6" xl="5" className="text-center">
            <div style={{ margin: "2rem" }}>
              <h2 style={{ color: "white" }}>Thank you for contacting us!</h2>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="contact-section">
      <Row className="justify-content-center align-items-center" style={{ width: "100%", minHeight: "calc(100vh - 200px)" }}>
        <Col xs="12" sm="10" md="8" lg="6" xl="5">
          <div className="text-center mb-4" style={{ width: "100%" }}>
            <h2 style={{ color: "white", marginBottom: "2rem" }}>Contact Us</h2>
          </div>
          <div style={{ 
            width: "100%",
            padding: "2rem", 
            border: "1px solid #eee", 
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)"
          }}>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div style={{ marginBottom: "1.5rem", width: "100%" }}>
                <label style={{ color: "white", display: "block", marginBottom: "0.5rem", textAlign: "left", width: "100%" }}>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.5rem", width: "100%" }}>
                <label style={{ color: "white", display: "block", marginBottom: "0.5rem", textAlign: "left", width: "100%" }}>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.5rem", width: "100%" }}>
                <label style={{ color: "white", display: "block", marginBottom: "0.5rem", textAlign: "left", width: "100%" }}>Message:</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    resize: "vertical",
                    boxSizing: "border-box"
                  }}
                />
              </div>
              {error && <div style={{ color: "red", marginBottom: "1rem", textAlign: "center", width: "100%" }}>{error}</div>}
              <div className="text-center" style={{ width: "100%" }}>
                <button 
                  type="submit" 
                  className="fork-btn-inner"
                  style={{
                    lineHeight: "1.4em",
                    backgroundColor: "#934cce5e",
                    padding: "0.25rem 1.1rem",
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.backgroundColor = "#a24dd386";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.backgroundColor = "#934cce5e";
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact; 