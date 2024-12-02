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
    if (window.scrollY >= '470') {
        document.querySelector('header').style.backgroundColor = 'black';
        document.querySelector('.about-content').classList.add('arrived');
    }
    else {
        document.querySelector('header').style.backgroundColor = 'transparent';
        document.querySelector('.about-content').classList.remove('arrived');
    }

    // let childCount = document.querySelector('.service-content').childElementCount
    console.clear()
    console.log(window.scrollY);

    let childCount = document.querySelector('.service-content').childElementCount

    if (window.scrollY >= 1150) {
        document.querySelectorAll('.service-cnt .text-cnt').forEach((ele) => {
            ele.classList.add('arrived');
        })
    } else {
        document.querySelectorAll('.service-cnt .text-cnt').forEach((ele) => {
            ele.classList.remove('arrived');
        })
    }
})