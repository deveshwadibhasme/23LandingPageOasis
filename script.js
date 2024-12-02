//click events
document.addEventListener('click', (e) => {

    if (e.target.className === 'fas fa-bars') {
        document.querySelector('.fa-bars').classList.add('clicked')
        setTimeout(() => {
            document.querySelector('nav').style.transform = 'scale(1)';
        }, 500)
    }
    if (e.target.className === 'fas fa-close') {
        document.querySelector('nav').style.transform = 'scale(0)';
        document.querySelector('.fa-bars').classList.remove('clicked')
    }

})

window.addEventListener('scroll', () => {
    if (window.scrollY >= '500') {
        document.querySelector('header').style.backgroundColor = 'black';
        document.querySelector('.about-content').classList.add('arrived');
    }
    else {
        document.querySelector('header').style.backgroundColor = 'transparent';
        document.querySelector('.about-content').classList.remove('arrived');
    }
    console.clear()
})