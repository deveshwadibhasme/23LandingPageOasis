//click events
document.addEventListener('click',(e)=>{

    if(e.target.className === 'fas fa-bars'){
        document.querySelector('nav').style.opacity = '1';
        document.querySelector('nav').style.top = '0';
        document.querySelector('.fa-bars').style.opacity = '0';
    }
    if(e.target.className === 'fas fa-close'){
        document.querySelector('nav').style.top = '-100rem';
        document.querySelector('nav').style.opacity = '0';
        document.querySelector('.fa-bars').style.opacity = '1'; 
    }

})