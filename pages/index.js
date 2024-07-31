import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <Image 
            src="/profile.jpeg" 
            alt="Loina Gongola" 
            width={120} 
            height={120} 
            style={{ borderRadius: '50%' }} 
          />
        </div>
        <div>
          <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>Loina Gongola</h1>
          <p>
            1234 Brentwood Dr, SE<br/>
            Calgary, Alberta, 123 456<br/>
            +1 825 333 6170<br/>
            <a href="mailto:lolo@gmail.com">lolo@gmail.com</a><br/>
            <Link href="https://www.linkedin.com/in/yourprofile" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </Link><br/>
            <Link href="https://github.com/yourprofile" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </Link>
          </p>
        </div>
      </div>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.5em', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>About Me</h2>
        <p>
          I am a 23-year-old software developer with a passion for coding and creating innovative solutions. 
          I have experience working with various programming languages and frameworks, and I enjoy learning new 
          technologies to expand my skill set. In my free time, I love to contribute to open-source projects, 
          explore new coding challenges, and share my knowledge with the tech community. My goal is to continuously 
          grow as a developer and to use my skills to make a positive impact in the world.
        </p>
      </section>
    </div>
  );
}
