function resize() {
    let site = document.querySelector('.site');
    site.style.zoom = document.documentElement.clientWidth / 1280;
}

resize();
window.addEventListener('resize', resize);
