const modals = () =>{
    const modalBtn = document.querySelector('.popup_btn'),
        modal = document.querySelector('.modal_container'),
        modalClose = document.querySelector('.modal_close'),
        modalWindow = document.querySelector('.modal'),
        contacts = document.querySelector('.contacts'),
        burgMenu = document.querySelector('.burger_menu');
        const adv = document.querySelector(".advantages");
        const parent = document.querySelector(".head_content");
        const links = document.querySelector('.modal_links');
        const container = document.createElement('div');


        if(window.innerWidth >=1920){
            parent.insertBefore(container, adv)
            container.classList.add("container_adv_modal");
            container.innerHTML = 
            `<div class="modal_container_big">
                <div class="modal_big">
                    <button class="close modal_close"></button>
                    <h3 class="modal_title">Есть вопросы?</h3>
                    <p class="modal_subtitle">С Вами на связи:</p>
                    <div class="modal_contact">
                        <img class="modal_img" src="img/pexels-christina.jpg">
                        <div class="modal_info">
                            <ul class="modal_list">
                                <li><img src="img/user.png"><p>Johne Doe</p></li>
                                <li><img src="img/email.png"><p>johndoe@gmail.com</p></li>
                                <li><img src="img/call.png"><p>+7 983 994 82 12</p></li>
                            </ul>
                        </div>
                        <div class="modal_links_header">
                            <a href="#" class="social_link inst inst_footer"><svg class="social_svg">
                                <use xlink:href="sprite.svg#inst"></use>
                            </svg></a>
                            <a href="#" class="social_link vk vk_footer">
                                <svg class="social_svg">
                                    <use xlink:href="sprite.svg#vk"></use>
                                </svg>
                            </a>
                            <a href="#" class="social_link fbook fbook_footer">
                                <svg class="social_svg">
                                    <use xlink:href="sprite.svg#fbook"></use>
                                </svg>
                            </a>
                            <a href="#" class="social_link twitter twitter_footer">
                                <svg class="social_svg">
                                    <use xlink:href="sprite.svg#twitter"></use>
                                </svg>
                            </a>
                        </div>
                    </div>    
                </div>
            </div>`;
            container.appendChild(adv);
            document.querySelector('.modal_close').addEventListener('click',()=>{
                document.querySelector(".modal_container_big").classList.add("modal_hide_desk");
            });
        
                modalBtn.addEventListener('click',()=>{
                    modalWindow.classList.remove('modal_hide');
                    modal.classList.remove('hide');
                    modal.classList.add('modal_flex');
                    modalWindow.classList.add('modal_show')
                    document.body.style.overflow = 'hidden';
                });
             modalClose.addEventListener('click', ()=>{
                modalWindow.classList.remove('modal_show');
                modalWindow.classList.add('modal_hide'); 
                setTimeout(function(){
                    modal.classList.remove('modal_flex')
                    
                    modal.classList.add('hide');
                    document.body.style.overflow = '';
                },1520 );
                
                
                
             });
            window.addEventListener('keydown',(e)=>{
                if(modal.classList.contains('modal-show')){
                    if (e.target == 'Escape'){
                        modal.classList.remove('modal-show');
                         modal.classList.add('hide');
                        document.body.style.overflow = '';
                    }
                }
            });
            contacts.addEventListener('click', ()=>{
                burgMenu.classList.remove('show');
                burgMenu.classList.add('hide');
                modal.classList.remove('hide');
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        }
    
        

}
export default modals;