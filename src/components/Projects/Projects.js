import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import construction from "../../Assets/Projects/construction.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import eventbooking from "../../Assets/Projects/eventbooking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Shoe E-commerce Platform"
              description="A full-stack shoe e-commerce site with user and admin dashboards, built using React.js, Node.js, Express, SQL, and Stripe. Includes image uploads via Cloudinary, order tracking, and inventory management."
              ghLink="https://github.com/Kaab-Hasan/E-commerce-"
              demoLink="https://www.linkedin.com/posts/kaab-hasan-34012b320_mernstack-fullstackdevelopment-reactjs-activity-7340599592213741569-iIs6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEtOiAB_h-2_SSX6ySSN0zD3IPGUrD1vlM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventbooking}
              isBlog={false}
              title="Event Booking & Approval System"
              description="Built during a hackathon using the MERN Stack. Allows users to create, submit, and manage event requests while admins can approve or reject. Includes real-time UI updates and role-based access."
              ghLink="https://github.com/Kaab-Hasan/Event-Booking"
              demoLink="https://www.linkedin.com/posts/kaab-hasan-34012b320_mernstack-webdevelopment-reactjs-activity-7339796978630905856-5A28?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEtOiAB_h-2_SSX6ySSN0zD3IPGUrD1vlM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={construction}
              isBlog={false}
              title="Construction App"
              description="A responsive website built for a construction company using HTML, CSS, and JavaScript. Designed with clean UI/UX to showcase services, portfolio, testimonials, and contact information. Ideal for small businesses in architecture, engineering, or construction."
              ghLink="https://github.com/Kaab-Hasan/constructingSite"
              demoLink="https://constructingsite.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
