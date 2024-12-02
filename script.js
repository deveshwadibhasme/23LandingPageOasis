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

// scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY >= '470') {
        document.querySelector('header').style.backgroundColor = 'black';
        document.querySelector('.about-content').classList.add('arrived');
    }
    else {
        document.querySelector('header').style.backgroundColor = 'transparent';
        document.querySelector('.about-content').classList.remove('arrived');
    }

    // console.log(window.scrollY);
    if (window.innerWidth > 867) {
        const observer = new IntersectionObserver(entry => {
            entry.forEach(enter => {
                if (enter.isIntersecting) {
                    enter.target.classList.add('arrived');
                }
            })
        })
        document.querySelectorAll('.service-cnt .text-cnt').forEach((box) => {
            observer.observe(box)
        })
    } else if (window.scrollY >= 1560) {
        document.querySelectorAll('.service-cnt .text-cnt').forEach((box) => {
            box.classList.add('arrived');
        })
    }



})