// Sample user data
const user = {
    name: 'John Doe',
    role: 'Admin', // Change this to 'User' to see the difference
    avatar: 'https://via.placeholder.com/40'
  };
  
  const menuItems = [
    { icon: '🏠', label: 'Dashboard', path: '/' },
    { icon: '📅', label: 'Leave Management', path: '/leaves' },
    { icon: '📝', label: 'My Leaves', path: '/my-leaves' },
    { icon: '⚙️', label: 'Settings', path: '/settings' }
  ];
  
  const adminMenuItems = [
    { icon: '👥', label: 'Employees', path: '/employees' },
    { icon: '➕', label: 'Register Employee', path: '/register' },
    { icon: '🛡️', label: 'Roles & Permissions', path: '/roles' }
  ];
  
  // Add admin items if user is admin
  if (user.role === 'Admin') {
    menuItems.push(...adminMenuItems);
  }
  
  // Initialize the sidebar
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.getElementById('main-content');
  const toggleButton = document.getElementById('toggle-button');
  const logoutButton = document.getElementById('logout-button');
  
  // Dynamic rendering of the menu items
  const sidebarNav = document.querySelector('.sidebar-nav');
  menuItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.path;
    link.innerHTML = `${item.icon} ${sidebar.classList.contains('collapsed') ? '' : item.label}`;
    sidebarNav.appendChild(link);
  });
  
  // Toggle the sidebar
  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    
    // Update menu items visibility
    const links = sidebarNav.querySelectorAll('a');
    links.forEach((link, index) => {
      link.innerHTML = `${menuItems[index].icon} ${isCollapsed ? '' : menuItems[index].label}`;
    });
  
    // Adjust main content
    mainContent.style.marginLeft = isCollapsed ? '80px' : '250px';
  });
  
  // Logout function (example)
  logoutButton.addEventListener('click', () => {
    alert('Logging out...');
    window.location.href = '/login'; // Redirect to login page
  });
  