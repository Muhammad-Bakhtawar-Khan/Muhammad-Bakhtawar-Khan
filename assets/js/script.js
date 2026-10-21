(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰';
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const projectForm = document.getElementById('whatsappProjectForm');
  if (projectForm) {
    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!projectForm.reportValidity()) return;
      const data = new FormData(projectForm);
      const message = [
        'NEW PROJECT ENQUIRY — Bakhtawar Khan / MBK',
        '',
        'Name: ' + data.get('name'),
        'Phone / WhatsApp: ' + data.get('phone'),
        'Email: ' + (data.get('email') || 'Not provided'),
        'Service: ' + data.get('service'),
        'Budget: ' + (data.get('budget') || 'Not specified'),
        'Timeline: ' + (data.get('timeline') || 'Flexible'),
        '',
        'Project details:',
        data.get('details')
      ].join('\n');
      const success = document.getElementById('formSuccess');
      if (success) { success.hidden = false; success.scrollIntoView({behavior:'smooth', block:'nearest'}); }
      const url = 'https://wa.me/923200276941?text=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

})();
