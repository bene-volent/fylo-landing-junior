const ctaForms = document.querySelectorAll(".cta__form")

function handleSubmit(event){
    event.preventDefault()
    console.log(event)
}

ctaForms.forEach(form=>{
    form.cta__email.addEventListener("invalid",(event)=>{
        event.preventDefault()
        form.classList.add("invalid")
    })
    
    form.cta__email.addEventListener("valid",(event)=>{
        event.preventDefault()
    })

    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        form.classList.remove("invalid")

        console.log(event)
    })
    
})