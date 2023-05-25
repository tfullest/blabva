

(()=>
{
    const refs = {
        extendViewableAFO: document.querySelector("[data-modal-open-afo]"),
       extendViewableCranial: document.querySelector("[data-modal-open-cranial]"),
       extendViewableKafo: document.querySelector("[data-modal-open-kafo]"),
        extendViewableSmo: document.querySelector("[data-modal-open-smo]"),
        extendViewableTlso: document.querySelector("[data-modal-open-tlso]"),
       modalCranial: document.querySelector("[data-modal-cranial]"),
        modalAFO: document.querySelector("[data-modal-afo]"),
        modalKafo: document.querySelector("[data-modal-kafo]"),
        modalSmo: document.querySelector("[data-modal-smo]"),
        modalTlso: document.querySelector("[data-modal-tlso]"),
        menufy: document.querySelector("[icon-menu]")
    
    };

    refs.extendViewableAFO.addEventListener("click", toggleModalAFO);
    function toggleModalAFO(){
        refs.modalAFO.classList.toggle("is-hidden");
        refs.extendViewableAFO.classList.toggle("quetzalafo");
    }

    refs.extendViewableCranial.addEventListener("click", toggleModalCranial);
    function toggleModalCranial(){
        refs.modalCranial.classList.toggle("is-hidden");
        refs.extendViewableCranial.classList.toggle("quetzalCranial");
    }

    refs.extendViewableKafo.addEventListener("click", toggleModalKafo);
    function toggleModalKafo(){
        refs.modalKafo.classList.toggle("is-hidden");
        refs.extendViewableKafo.classList.toggle("quetzalkafo");
    }

    refs.extendViewableSmo.addEventListener("click", toggleModalSmo);
    function toggleModalSmo(){
        refs.modalSmo.classList.toggle("is-hidden");
        refs.extendViewableSmo.classList.toggle("quetzalsmo");
    }

    refs.extendViewableTlso.addEventListener("click", toggleModalTlso);
    function toggleModalTlso(){
        refs.modalTlso.classList.toggle("is-hidden");
        refs.extendViewableTlso.classList.toggle("quetzaltlso");
    }
    refs.menufy.addEventListener("click", toggleMenuVis);
    function toggleMenuVis(){
        refs.menufy.classList.toggle("hidden");
    }
}
)();


