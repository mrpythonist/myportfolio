import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import grocebook from "../../Assets/Projects/grocebook.jpg";
import portfolio from "../../Assets/Projects/portfolio.jpg";

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
              imgPath={grocebook}
              isBlog={false}
              title="GroceBook"
              description="Grocebook is an online marketplace for grocery. Merchants of different stores can register themselves and sell their groceries on this platform. They can also launch their own brands. Grocebook aim to deliver grocery at doorstep. Made with MERN Stack."
              ghLink="https://github.com/mrpythonist/grocebook"
              demoLink="http://grocebook.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio page build with Node.js React.js and Css. It displays my professional, educational and personal information. Also there are skills and projects that are displayed here."
              ghLink="https://github.com/mrpythonist/mrportfolio"
              demoLink="https://mrpythonist.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
