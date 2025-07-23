// script.js

// ===== Dark Mode Toggle =====
const root = document.documentElement;
const toggleDarkMode = () => {
  root.classList.toggle('dark');
};

// Optional: You can hook this to a button
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "🌓 Toggle Theme";
  toggleBtn.className = "theme-toggle";
  toggleBtn.onclick = toggleDarkMode;
  document.querySelector("header").appendChild(toggleBtn);

  // ===== Project Card Modal Behavior =====
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>${card.querySelector('h3').innerText}</h2>
          <p>${card.querySelector('p').innerText}</p>
          <p><em>✨ More interactive demo soon!</em></p>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('.close').onclick = () => modal.remove();
      modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
      };
    });
  });
});
