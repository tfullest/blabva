(()=>
{
    const refs = {
        extendViewable: document.querySelector("[data-modal-open]"),
        retractViewable: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.extendViewable.addEventListener("click", toggleModal);
    refs.retractViewable.addEventListener("click", toggleModal);

    function toggleModal(){
        refs.modal.classList.toggle("is-hidden");
        refs.extendViewable.classList.toggle("quetzal");
    }
}
)();