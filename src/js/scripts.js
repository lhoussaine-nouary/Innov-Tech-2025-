// Script de base pour l'interactivité future
console.log("Bienvenue à l'événement futuriste !");

// Sidebar mobile navigation
(function() {
  const sidebar = document.querySelector('.mobile-sidebar');
  const overlay = document.querySelector('.mobile-sidebar-overlay');
  const openBtn = document.querySelector('.navbar-toggle');
  const closeBtn = document.querySelector('.sidebar-close');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (openBtn && sidebar && overlay && closeBtn) {
    openBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    // Fermer si on clique à l'extérieur du sidebar (mobile)
    document.addEventListener('touchstart', function(e) {
      if (sidebar.classList.contains('active')) {
        if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
          closeSidebar();
        }
      }
    });
    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeSidebar();
    });
  }
})();
