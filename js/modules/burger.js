const burger = ()=> {
    const burgBtn = document.querySelector('.burger'),
        burgMenu = document.querySelector('.burger_menu'),
        burgClose = document.querySelector('.close_burger');

        burgBtn.addEventListener('click',function(){
            burgMenu.classList.remove('hide');
            burgMenu.classList.add('show');
        });
        burgClose.addEventListener('click',function(){
            burgMenu.classList.remove('show');
            burgMenu.classList.add('hide');
           }
        );
}
export default burger;