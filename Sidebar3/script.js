// Get DOM elements
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const logoutButton = document.getElementById('logoutButton');
const mainContent = document.getElementById('mainContent');

// Toggle sidebar
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('w-64');  // Expand or collapse sidebar
  sidebar.classList.toggle('w-16');  // Narrow sidebar when collapsed
  mainContent.classList.toggle('ml-16');  // Adjust main content
});

// Simulate logout
logoutButton.addEventListener('click', () => {
  alert('Logging out...');
  window.location.href = '/login';  // Redirect to login page
});
