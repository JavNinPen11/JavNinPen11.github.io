// function setProgress(porcentaje){
//     const barra = document.getElementById("Javascript")
//     const porcentajeText = document.getElementById("porcentajeJavascript")

//     barra.style.width = porcentaje + "%"
//     porcentajeText.textContent = porcentaje + "%"
// }

// setTimeout(() => setProgress(80), 2000)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        const barra = entry.target
        const porcentaje = barra.dataset.percent
        const texto = barra.querySelector("span")
        if(entry.isIntersecting){
            barra.style.width = porcentaje + "%"
            texto.textContent = porcentaje + "%"
        }
        else{
            barra.style.width = 0
        }
    })
    },{
        threshold: 0.5
})

observer.observe(document.getElementById("react"))
observer.observe(document.getElementById("css"))
observer.observe(document.getElementById("node"))
observer.observe(document.getElementById("html"))
observer.observe(document.getElementById("java"))
observer.observe(document.getElementById("c#"))
observer.observe(document.getElementById("python"))
observer.observe(document.getElementById("javascript"))
observer.observe(document.getElementById("mysql"))
observer.observe(document.getElementById("sqlServer"))
observer.observe(document.getElementById("postgre"))




