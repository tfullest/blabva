
(()=>
{
    const refs = {

menufy: document.querySelector("[js]")
    
};


refs.menufy.addEventListener("click", toggleMenuVis);
function toggleMenuVis(){
    refs.menufy.classList.toggle("is-hidden");
}
}
)();