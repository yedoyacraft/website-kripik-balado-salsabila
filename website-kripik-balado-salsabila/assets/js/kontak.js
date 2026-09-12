/* ==========================================================================
   Kripik Balado Salsabila — Form kontak
   Mengirim isi form ke WhatsApp dengan pesan yang sudah tersusun.
   ========================================================================== */

(function () {
  'use strict';

  const WA_NUMBER = '6282172111127';
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) return;

    const text =
      `Halo Kripik Balado Salsabila,%0A%0A` +
      `Nama: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A%0A` +
      `Pesan:%0A${encodeURIComponent(message)}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank', 'noopener');
  });
})();
