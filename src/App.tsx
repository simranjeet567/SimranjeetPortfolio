import React from 'react';
import {ExternalLink, Home} from 'lucide-react';
import profileImage from '/src/mypic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const workExperience = [
    {
      company: "ImaginXP",
      role: "Software Development Instructor",
      period: "August 2024 - Present",
      logo: "👨‍💻",
      color: "bg-orange-500"
    },
    // {
    //   company: "Amazon",
    //   role: "Software Engineer Intern", 
    //   period: "June 2023 - September 2023",
    //   logo: "📦",
    //   color: "bg-yellow-500"
    // }
  ];

  const skills = [
    "React", "TypeScript", 
    "Docker", "Kubernetes","JavaScript", "Java", "C/C++", "Java Spring Boot", "Node.js", "Express.js", "MongoDB", "MySQL"
  ];

  const projects = [
    {
      title: "Tree Visualizer",
      description: " Developed a visualizing tool to visualize tree structures such as Binary Tree, Maxheap, Binary Search Tree.",
      tags: ["HTML", "CSS", "JavaScript"],
      preview: "🌳",
      link: "https://simranjeet567.github.io/TreeVisualizer/" 
    },
     {
      title: "DoItNow",
      description: "DoItNow app helps users manage tasks efficiently. It typically includes features like task creation, deadlines & reminders, priority levels, tags & categories, and recurring tasks.",
      tags: ["Vue.js", "HTML", "CSS"],
      preview: "📱",
      link:"https://vue-todo-app.netlify.app/"
    },
    {
      title: "Super Store Data Analysis",
      description: "I conducted a comprehensive data analysis and visualization of the Super Store dataset using Tableau. The objective was to gain insights into various performance metrics such as sales, profit, and other key parameters across different categories and regions",
      tags: ["Tableau", "Data Visualization and Analysis"],
      preview: "📊",
      link: "https://github.com/simranjeet567/Super-Store-Data-Analysis-and-Visualization"
    },
    {
      title: "Detection of Suspicious URL using Deep Learning", 
      description: "Utilized decision tree algorithm and achieve an accuracy of 90% in identifying suspicious URLs. Transitioned to random forest algorithm, further enhancing accuracy to 91.34%. Leveraged deep learning with RNN, achieving a remarkable accuracy of 96.20%.",
      tags: ["Google Colab", "Python", "Machine Learning"],
      preview: "🤖",
      link: "https://github.com/simranjeet567/Detection-of-Suspicious-URL"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Hi, I'm Simranjeet <span className="wave">👋</span>
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">Software Development Instructor & Full Stack Developer </h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About Me</h3>
              <p className="text-gray-600 leading-relaxed">
                As a Full Stack Developer, I bring a comprehensive approach to Software Development, 
                combining technical expertise with creative problem-solving. 
                With hands-on experience in MERN stack, Java Spring Boot, and System Design, 
                I specialize in creating seamless, user-centric applications that deliver exceptional experiences while ensuring scalability.
                <br></br> 
                Problem-solving nature is my key strength, enabling me to create optimized and efficient solutions while ensuring high performance.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
  <img
    src={profileImage}
    alt="Simranjeet"
    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
  />
</div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Work Experience</h3>
        <div className="space-y-4">
          {workExperience.map((job, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`w-12 h-12 rounded-lg ${job.color} flex items-center justify-center text-white text-lg shadow-md`}>
                {job.logo}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{job.company}</h4>
                <p className="text-sm text-gray-600">{job.role}</p>
              </div>
              <div className="text-sm text-gray-500">
                {job.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Education</h3>
        <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center text-white text-lg font-bold shadow-md">
          🎓
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">NIT Calicut</h4>
            <p className="text-sm text-gray-600">Master of Computer Applications (MCA)</p>
          </div>
          <div className="text-sm text-gray-500">
            2021 - 2024
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Coding Profile */}
     <section className="max-w-4xl mx-auto px-6 py-8">
  <h3 className="text-lg font-semibold text-gray-900 mb-6">Links</h3>
  <div className="flex gap-4"> {/* Flex container for horizontal alignment */}
    <button className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
      <a href="https://drive.google.com/file/d/13JVxrtzFVCyDAi9Fr01ik_8YEI83VXSi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <ExternalLink size={14} />
      </a>
        Resume
    </button>
    <button className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
      <a href="https://leetcode.com/u/Simrnjeet/" target="_blank" rel="noopener noreferrer">
        <ExternalLink size={14} />
      </a>
      Leetcode
    </button>
    <button className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
      <a href="https://www.geeksforgeeks.org/user/resilientcoder/" target="_blank" rel="noopener noreferrer">
        <ExternalLink size={14} />
      </a>
      GeeksforGeeks
    </button>
  </div>
</section>


      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full">My Projects</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-2">Check out my work</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors">
                  {project.preview}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={14} />
        </a>
        Website
      </button>
      
                {/* <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                  <faGithub size={14} />
                  GitHub
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Icons Palette - Fixed at bottom */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-full px-2 py-2 shadow-xl">
          <a href="#" className="text-gray-600 hover:text-blue-900 transition-all duration-200 p-3 hover:bg-grey-100/80 rounded-full">
            <Home size={20} />
          </a>

          <a href="mailto:simranjeet777000@gmail.com" className="text-gray-600 hover:text-blue-900 transition-all duration-200 p-3 hover:bg-gray-100/80 rounded-full">
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>

          <a href="https://github.com/simranjeet567" className="text-gray-600 hover:text-blue-900 transition-all duration-200 p-3 hover:bg-gray-100/80 rounded-full">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          
          <a href="https://www.linkedin.com/in/simranjeet5/"  className="text-gray-600 hover:text-blue-900 transition-all duration-200 p-3 hover:bg-gray-100/80 rounded-full">
  <FontAwesomeIcon icon={faLinkedin} size="lg" />
</a>
          <a href="https://x.com/simrnjeet5"  className="text-gray-600 hover:text-blue-400 transition-colors p-3 hover:bg-gray-100 rounded-full">
  <FontAwesomeIcon icon={faSquareXTwitter} size="lg" />
</a>

          <a href="https://www.youtube.com/@TruMonk1"  className="text-gray-600 hover:text-red-600 transition-colors p-3 hover:bg-gray-100 rounded-full">
  <FontAwesomeIcon icon={faYoutube} size="lg" />
</a>
        
        </div>
      </div>

      {/* Bottom spacer for fixed social icons */}
      <div className="h-24"></div>
    </div>
  );
}

export default App;