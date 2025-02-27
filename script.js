document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Simple validation
  if (username && password) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';

      if (role === 'student') {
          document.getElementById('studentDashboard').style.display = 'block';
          loadCourses();
      } else if (role === 'instructor') {
          document.getElementById('instructorDashboard').style.display = 'block';
      } else if (role === 'admin') {
          document.getElementById('adminDashboard').style.display = 'block';
      }
  } else {
      alert('Please fill in all fields');
  }
});

function loadCourses() {
  const courses = [
      { id: 1, name: 'Introduction to HTML', content: 'This is the content for Introduction to HTML.' },
      { id: 2, name: 'Advanced CSS', content: 'This is the content for Advanced CSS.' },
      { id: 3, name: 'JavaScript Basics', content: 'This is the content for JavaScript Basics.' }
  ];

  const courseList = document.getElementById('courseList');
  courseList.innerHTML = '';

  courses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course.name;
      li.addEventListener('click', () => showCourseContent(course.content));
      courseList.appendChild(li);
  });
}

function showCourseContent(content) {
  document.getElementById('courseContent').style.display = 'block';
  document.getElementById('content').textContent = content;
}