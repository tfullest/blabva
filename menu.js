
(()=>
{
    const refs = {

menuOpen: document.querySelector(".js"),
menuClose: document.querySelector(".jsClose"),
menu: document.querySelector(".mobile-nav")    
};


refs.menuOpen.addEventListener("click", toggleMenuVis);
function toggleMenuVis(){
    refs.menu.classList.remove("is-hidden");
}

refs.menuClose.addEventListener("click", closeMenu);
function closeMenu(){
    refs.menu.classList.add("is-hidden");
}

}
)();