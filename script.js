const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

   
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight * 2 / 3) {
      currentSection = section.id;
    }
  });

  sections.forEach(section => section.classList.remove('active'));
  document.querySelector(`nav a[href="#${currentSection}"]`).classList.add('active');
});




//porject
const projectContainer = document.querySelector('.project-container');


const projects = [
  {
    title: "Video Calling App",
    description: "A simple video calling app build on react native like a clone of zoom app.",
    image: "./assets/videocall.jpg", 
  },
  {
    title: "Emotion Detection",
    description: "A emotion detection app based on deep learning which detects human face expression.",
    image: "./assets/emotion.jpg", 
  },
  
];

function createProject(project) {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');
  
  projectElement.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  projectElement.style.background = `url(${project.image})`;
  projectElement.style.backgroundSize = "cover";
  projectElement.style.color = "white";
  projectElement.style.textShadow = "0px 1px 5px black";

  projectContainer.appendChild(projectElement);
}

projects.forEach(project => createProject(project));
