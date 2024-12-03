//click events

console.clear()
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
        document.querySelector('header').style.backgroundColor = 'var(--theme-color)';
        document.querySelector('.about-content').classList.add('arrived');
    }
    else {
        document.querySelector('header').style.backgroundColor = 'transparent';
        document.querySelector('.about-content').classList.remove('arrived');
    }

    const boxes = document.querySelectorAll('.service-cnt .text-cnt').forEach((ele)=>{
        const box = ele.getBoundingClientRect()
        if(window.innerHeight > box.top){
            ele.classList.add('arrived');
            // console.log('box is in view');
        }else{
            ele.classList.remove('arrived');
        }
    })

    const cards = document.querySelectorAll('card')

})