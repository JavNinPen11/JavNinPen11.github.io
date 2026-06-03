const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const barra = entry.target
        const porcentaje = barra.dataset.percent
        const texto = barra.querySelector("span")
        if (entry.isIntersecting) {
            barra.style.width = porcentaje + "%"
            texto.textContent = porcentaje + "%"
            observer.unobserve(barra) 
        }
    })
}, {
    threshold: 0.5
})

document.querySelectorAll('.progress-bar').forEach(b => observer.observe(b))