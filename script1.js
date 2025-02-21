// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Simulate a successful login
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // In a real application, you would validate the credentials and possibly send them to a server
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

  // Hide login section and show course section
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('course-section').style.display = 'block';
});

const courseList = document.getElementById('course-list');
const courseContent = document.getElementById('course-content');
const courseTitle = document.getElementById('course-title');
const courseDescription = document.getElementById('course-description');

const courses = {
  'html-css': {
      title: 'HTML & CSS',
      description: 'Learn the basics of HTML and CSS to build beautiful websites.'
  },
  'javascript': {
      title: 'JavaScript',
      description: 'Master JavaScript to create interactive web applications.'
  },
  'python': {
      title: 'Python',
      description: 'Get started with Python programming for web development, data analysis, and more.'
  }
};

courseList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
      const courseId = event.target.getAttribute('data-course');
      const course = courses[courseId];

      courseTitle.textContent = course.title;
      courseDescription.textContent = course.description;

      courseContent.style.display = 'block';
  }
});