const desktopPills = document.querySelectorAll('#nav-pills .nav-pill');
const mobilePills = document.querySelectorAll('#mobile-nav-pills .nav-pill');

let activeDesktopPill = null;
desktopPills.forEach((node) => {
    node.addEventListener("click", function (e) {
        if (activeDesktopPill) {
            activeDesktopPill.classList.remove('nav-pill-active');
        }
        node.classList.add('nav-pill-active');
        activeDesktopPill = node;
    });
});

let activeMobilePill = null;
mobilePills.forEach((node) => {
    node.addEventListener("click", function (e) {
        if (activeMobilePill) {
            activeMobilePill.classList.remove('nav-pill-active');
        }
        node.classList.add('nav-pill-active');
        activeMobilePill = node;
    });
});

document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.getElementById('mobile-nav-pills').classList.toggle('hidden');
});