function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main');
    
    sidebar.classList.toggle('sidebar-hidden');
    mainContent.classList.toggle('sidebar-hidden');
}

  function redirectToLogin() {
    window.location.href = 'Login.html'; 
  }
