let settingsIcon = document.getElementById('settings-icon');

settingsIcon.addEventListener('click', function () {
    console.log('lol')
    document.getElementsByClassName('modal')[0].style.display = 'inline-block';
})