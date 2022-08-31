// template_b064kk4
// service_7k9v0y7
// LnBFGGQS3aidVoJuh


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


let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal__open")
    }


    isModalOpen = true
    document.body.classList += " modal__open"
}