const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});
let progress1 = 0;
let progress2 = 0;
let progress3 = 0;

function checkAnswers1() {
    let correctCount = 0;
    const totalQuestions = 2;

    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "a") {
        correctCount++;
    }

    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "b") {
        correctCount++;
    }

    result1 = correctCount;
    document.getElementById('result-section1').innerHTML = `Результат: ${result1} из ${totalQuestions} дұрыс жауаптар`;


    progress1 = Math.round((result1 / totalQuestions) * 100);
    calculateOverallProgress();
}

function checkAnswers2() {
    let correctCount = 0;
    const totalQuestions = 2;

    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "a") {
        correctCount++;
    }

    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "b") {
        correctCount++;
    }

    result2 = correctCount;
    document.getElementById('result-section2').innerHTML = `Результат: ${result2} из ${totalQuestions} дұрыс жауаптар`;

    progress2 = Math.round((result2 / totalQuestions) * 100);
    calculateOverallProgress();
}

function checkAnswers3() {
    let correctCount = 0;
    const totalQuestions = 2;

    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "a") {
        correctCount++;
    }

    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "c") {
        correctCount++;
    }

    result3 = correctCount;
    document.getElementById('result-section3').innerHTML = `Результат: ${result3} из ${totalQuestions} дұрыс жауаптап`;


    progress3 = Math.round((result3 / totalQuestions) * 100);
    calculateOverallProgress();
}

function calculateOverallProgress() {
    const overallProgress = Math.round(((progress1 + progress2 + progress3) / 300) * 100);
    document.getElementById('overall-progress').innerHTML = `Жалпы прогресс: ${overallProgress}%`;
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateOverallProgress();
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    burgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
