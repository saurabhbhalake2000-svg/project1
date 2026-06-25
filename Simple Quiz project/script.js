const questions = [
  {
    question: "What is HTML?",
    answers: ["Programming Language", "Markup Language", "Database", "Framework"],
    correct: "Markup Language"
  },
  {
    question: "What is CSS used for?",
    answers: ["Styling", "Database", "Server", "Testing"],
    correct: "Styling"
  },
  {
    question: "Which keyword declares a variable?",
    answers: ["if", "for", "let", "switch"],
    correct: "let"
  },
  {
    question: "Which company created JavaScript?",
    answers: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: "Netscape"
  },
  {
    question: "Which method prints output?",
    answers: ["print()", "console.log()", "write()", "show()"],
    correct: "console.log()"
  }
];

const question = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  let q = questions[currentQuestion];

  question.innerText = q.question;

  answerBtns.forEach(function (button, index) {
    button.innerText = q.answers[index];

    button.classList.remove("correct");
    button.classList.remove("wrong");

    button.disabled = false;
  });
}

answerBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    let selectedAnswer = button.innerText;
    let correctAnswer = questions[currentQuestion].correct;

    if (selectedAnswer === correctAnswer) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
    }

    answerBtns.forEach(function (btn) {
      btn.disabled = true;
    });
  });
});

nextBtn.addEventListener("click", function () {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    question.innerText =
      "Quiz Finished! Your Score is " +
      score +
      " / " +
      questions.length;

    document.querySelector(".answers").style.display = "none";
    nextBtn.style.display = "none";
  }
});

showQuestion();