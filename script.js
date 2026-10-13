const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});
}

const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    'Hello DAMMY KUSH DESIGN! I would like to make a project enquiry.',
    '',
    `Name: ${data.get('name')}`,
    `Email or WhatsApp: ${data.get('contactInfo')}`,
    `Service: ${data.get('service')}`,
    `Estimated budget: ${data.get('budget') || 'Not specified'}`,
    '',
    'Project details:',
    data.get('details')
  ].join('\n');

  const url = `https://wa.me/2348138754234?text=${encodeURIComponent(message)}`;
  document.getElementById('form-feedback').textContent = 'WhatsApp is opening with your message. Review it and press Send to submit your enquiry.';
  window.open(url, '_blank', 'noopener,noreferrer');
});
