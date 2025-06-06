const toggleBtn = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

toggleBtn.addEventListener('click', () => {
      sideMenu.classList.toggle('open');
    });
    
    const mq = window.matchMedia('(max-width: 615px)');
    mq.addEventListener('change', (e) => {
      if (!e.matches) {
        sideMenu.classList.remove('open');
      }
    });
    
    // Touch gestures
    let startX = null;
    
    window.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    
    window.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
    
      if (diff > 50 && sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
      }
    
      if (diff < -50 && !sideMenu.classList.contains('open')) {
        sideMenu.classList.add('open');
      }
    
      startX = null;
    });
        
document.addEventListener("DOMContentLoaded", () => {
  const themeInput = document.getElementById("theme-toggle");

  if (!(themeInput instanceof HTMLInputElement)) {
    console.error("#theme-toggle is not an input");
    return;
  }

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  // Set theme on first load
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeInput.checked = currentTheme === "dark";

  // Change theme on toggle
  themeInput.addEventListener("change", () => {
    const newTheme = themeInput.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    console.log(`Theme changed to ${newTheme}`);
  });
});
