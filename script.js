//click events
document.addEventListener('click',(e)=>{
    console.log(e.target.className);
    if(e.target.className === 'fas fa-bars'){
        document.querySelector('nav').style.opacity = '1';
        document.querySelector('.fa-bars').style.opacity = '0';
    }
    if(e.target.className === 'fas fa-close'){
        document.querySelector('nav').style.opacity = '0';
        document.querySelector('.fa-bars').style.opacity = '1'; 
    }
})