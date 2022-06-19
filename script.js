const botao = document.querySelector('.icon-menu-mobile');

botao.addEventListener('click', () =>{
    const item = document.querySelector('.menu-mobile');
    if (item.classList.contains('show')) {
        item.classList.add('hide');
        item.classList.remove('show');

    }else{
        item.classList.add('show');
        item.classList.remove('hide');
    }
   
});