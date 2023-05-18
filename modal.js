(()=>
{
    const refs = {
        extendViewableAFO: document.querySelector("[data-modal-open-afo]"),
       extendViewableCranial: document.querySelector("[data-modal-open-cranial"),
       extendViewableKafo: document.querySelector("[data-modal-open-kafo]"),


       modalCranial: document.querySelector("[data-modal-cranial]"),
        modalAFO: document.querySelector("[data-modal-afo]"),
        modalKafo: document.querySelector("[data-modal-kafo"),
    
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
}
)();