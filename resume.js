
export default function Resume() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Professional Summary</h2>
        <p>
          Innovative and detail-oriented software developer with over 5 years of experience in designing, developing, 
          and maintaining software applications. Proficient in full-stack development, with a strong background in 
          Next.js, React, Node.js, and Tailwind CSS. Adept at collaborating with cross-functional teams to deliver 
          high-quality software solutions that meet business objectives.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Technical Skills</h2>
        <ul>
          <li>Programming Languages: JavaScript, TypeScript, Python, Java</li>
          <li>Web Technologies: HTML5, CSS3, Next.js, React, Node.js, Tailwind CSS</li>
          <li>Databases: MongoDB, MySQL, PostgreSQL</li>
          <li>Tools & Platforms: Git, Docker, Jenkins, AWS, Azure</li>
          <li>Agile Methodologies: Scrum, Kanban</li>
          <li>Other Skills: RESTful APIs, GraphQL, TDD, BDD, CI/CD</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Professional Experience</h2>

        <h3 style={{ fontSize: '1.2em', marginTop: '20px' }}>Software Developer</h3>
        <p>XYZ Technologies, City, State<br/>
           June 2020 – Present
        </p>
        <ul>
          <li>Lead the development of a high-traffic web application using Next.js and React, resulting in a 30% increase in user engagement.</li>
          <li>Implemented Tailwind CSS for streamlined, responsive design, reducing development time by 20%.</li>
          <li>Collaborated with product managers and UX/UI designers to create intuitive user interfaces and improve user experience.</li>
          <li>Conducted code reviews and mentored junior developers, fostering a culture of continuous improvement and knowledge sharing.</li>
          <li>Utilized Docker and Jenkins for automated testing and continuous integration, enhancing deployment efficiency and reliability.</li>
        </ul>

        <h3 style={{ fontSize: '1.2em', marginTop: '20px' }}>Junior Software Developer</h3>
        <p>ABC Solutions, City, State<br/>
           May 2018 – May 2020
        </p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js, ensuring optimal performance and scalability.</li>
          <li>Assisted in migrating legacy applications to modern frameworks, improving maintainability and reducing technical debt.</li>
          <li>Created and consumed RESTful APIs, enabling seamless integration with third-party services.</li>
          <li>Participated in daily stand-ups and sprint planning meetings, contributing to successful project delivery in an Agile environment.</li>
          <li>Debugged and resolved complex software issues, improving system stability and user satisfaction.</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Education</h2>
        <p>
          Bachelor of Science in Computer Science<br/>
          University of Technology, City, State<br/>
          Graduated: May 2018
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Certifications</h2>
        <ul>
          <li>AWS Certified Solutions Architect</li>
          <li>Certified Scrum Developer (CSD)</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Projects</h2>

        <h3 style={{ fontSize: '1.2em', marginTop: '20px' }}>Project 1: E-commerce Platform</h3>
        <ul>
          <li>Developed a full-stack e-commerce platform using Next.js, Node.js, and MongoDB.</li>
          <li>Implemented features such as user authentication, product search, and shopping cart functionality.</li>
          <li>Optimized performance and ensured mobile responsiveness using Tailwind CSS.</li>
        </ul>

        <h3 style={{ fontSize: '1.2em', marginTop: '20px' }}>Project 2: Task Management Application</h3>
        <ul>
          <li>Built a task management application with React and GraphQL, providing real-time updates and notifications.</li>
          <li>Integrated third-party APIs for enhanced functionality and user experience.</li>
          <li>Utilized Docker for containerization, ensuring consistent development and production environments.</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Professional Affiliations</h2>
        <ul>
          <li>Member, Association for Computing Machinery (ACM)</li>
          <li>Member, IEEE Computer Society</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>References</h2>
        <p>Available upon request.</p>
      </section>
    </div>
  );
}
