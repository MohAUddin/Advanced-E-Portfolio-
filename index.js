// template_b064kk4
// service_7k9v0y7
// LnBFGGQS3aidVoJuh
let isModalOpen = false;
let contrastToggle = false;
let scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const  x = event.clientX * scaleFactor ;
    const  y = event.clientY * scaleFactor;
   
    for (i=0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)` 
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle){
        document.body.classList += " dark--theme"
    }else{
        document.body.classList.remove ("dark--theme")
    }
}

function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
    .sendForm(
        'service_7k9v0y7',
        'template_b064kk4',
        event.target,
        'LnBFGGQS3aidVoJuh'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at muddin7067@gmail.com"
        )
    })
}



function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal__open")
    }


    isModalOpen = true
    document.body.classList += " modal__open"
}


function toggleContrast() {
    document.body.classList.toggle("dark--mode")
}