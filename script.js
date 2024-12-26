document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebarTitle = document.getElementById('sidebar-title');
  
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
      sidebar.classList.toggle('collapsed');
      toggleBtn.textContent = sidebar.classList.contains('expanded') ? '◀' : '▶';
      sidebarTitle.style.display = sidebar.classList.contains('expanded') ? 'block' : 'none';
    });
  
    const logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click', () => {
      alert('Logging out...');
      // Redirect to login page
      window.location.href = '/login';
    });
  });
  