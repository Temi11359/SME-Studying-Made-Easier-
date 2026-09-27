// Bottom Navigation
document.querySelectorAll('.bottom-nav .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.bottom-nav .nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const section = btn.dataset.section;
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(section).classList.add('active');
    });
});

// Side Menu
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('sideMenu').style.display = 'block';
});

document.getElementById('closeMenuBtn').addEventListener('click', () => {
    document.getElementById('sideMenu').style.display = 'none';
});

// Menu Items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const section = item.dataset.section;
        if(section === 'settings-menu') {
            document.getElementById('sideMenu').style.display = 'none';
            document.getElementById('settingsMenu').style.display = 'block';
        } else {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(section).classList.add('active');
            document.getElementById('sideMenu').style.display = 'none';
        }
    });
});

// Settings
document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('settingsMenu').style.display = 'block';
});

document.getElementById('closeSettingsBtn').addEventListener('click', () => {
    document.getElementById('settingsMenu').style.display = 'none';
});

// Dark Mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});
