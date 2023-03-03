let currentStep = 0;
const steps = document.querySelectorAll('.step');
const forms = document.querySelectorAll('.forms form');
const formsContainer = document.querySelector('.forms');
const backWord = document.querySelector('.backWord');
let formData = new FormData();
console.log(backWord);

function getCurrentStep(stepNumber) {
    steps.forEach(step => step.classList.remove('active'));
    steps[stepNumber].classList.add('active')
}

function getActiveForm(stepNumber) {
    formsContainer.style.transform = `translateY(-${stepNumber * 25}%)`;
}

getCurrentStep(currentStep);

forms.forEach((form, index) => {
    form.onsubmit = e => {
        let step = form.getAttribute('data-step');
        e.preventDefault();
        let getData = new FormData(e.currentTarget);
        formData.append(e.currentTarget.id, getData);
        if (step != 4) {
            currentStep < 4 ? currentStep++ : currentStep = currentStep;
            getActiveForm(currentStep);
            getCurrentStep(currentStep);
        } else {
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
        }
    }
})

backWord.onclick = () => {
    currentStep > 0 ? currentStep-- : currentStep = currentStep;
    getActiveForm(currentStep);
    getCurrentStep(currentStep);
}

// steps.forEach((step, index) => {
//     step.onclick = () => {
//         currentStep = index;
//         getActiveForm(currentStep);
//         getCurrentStep(currentStep);
//     }
// })