const quizData = [
    {
      question: '1.	What do you call the living organisms that inhabit an environment?',
      a: 'Survivors',
      b: 'Community',
      c: 'Biotic Factors',
      d: 'Abiotic Factors',
      correct: 'c'
    },
    {
      question: '2.	Which of the following choices are abiotic factors?',
      a: 'Crabs, fish, and oxygen',
      b: 'Oxygen, soil, and sunlight',
      c: 'Algae, dog, and temperature',
      d: 'Mushroom, sunlight, and temperature',
      correct: 'b'
    },
    {
      question: '3.	Which of the following statements is true?',
      a: 'All living things are biotic factors',
      b: 'Most living things are abiotic factors',
      c: 'Some non-living things are biotic factors',
      d: 'Living things can either be biotic or abiotic',
      correct: 'a'
    },
    {
      question: '4.	Which of the following conditions is NOT an ecosystem?',
      a: 'An empty aquarium',
      b: 'A growing flower in a pot',
      c: 'Mountains surrounded by trees',
      d: 'Large bodies of oceans and lakes',
      correct: 'a'
    },
    {
        question: '5.	In which place do biotic and abiotic factors interact?',
        a: 'Ecosystem',
        b: 'house',
        c: 'Niche',
        d: 'Shelter',
        correct: 'a'
      },
      {
        question: "6. Which of the following is an example of an abiotic factor?",
        a: "Bugs",
        b: "Ferns",
        c: "Minerals",
        d: "Zebra",
        correct: "c"
      },
      {
        question: "7. How will you classify factors such as sunlight, oxygen, air, and rocks?",
        a: "Abiotic",
        b: "Alive",
        c: "Biotic",
        d: "Living",
        correct: "a"
      },
      {
        question: "8. Which of the following are needed in setting up an aquarium as a mini ecosystem?",
        a: "A number of fish and water only",
        b: "Combination of water, sand, soil and light",
        c: "Population of fish, snails, and plants only",
        d: "Communities of different species of organisms, water, sand, soil, and sunlight",
        correct: "d"
      },
      {
        question: "9. On which abiotic factors would varieties of fish and seaweeds rely for their survival?",
        a: "Insects and sun",
        b: "Water and corals",
        c: "Water and temperature",
        d: "Solid particles and temperature",
        correct: "c"
      },
      {
        question: "10. Which of the following is an abiotic factor produced by plants?",
        a: "Flower",
        b: "Fruit",
        c: "Oxygen",
        d: "Stem",
        correct: "c"
      }
  ]
  const quiz = document.querySelector('#quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.querySelector('#question')
  const submitBtn = document.querySelector('#submit')
  
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  function deselectAnswers() {
    answerEls.forEach(answer => (answer.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
  
    return answer
  }
  var Uname;

function showResults() {
    Uname = prompt('Enter Your Full Name: ');
    localStorage.setItem('name', Uname);
    localStorage.setItem('Fscore', score);
    if (Uname) {
        quiz.innerHTML = `
            <h2>Score: ${score}/${quizData.length}</h2>
            <p style = "text-align: center;" >Answers: 1.C 2.B 3.A 4.A 5.A 6.C 7.A 8.D 9.C 10.C</p>
            <button onclick="location.reload()" style="background-color: #3f942e; width: 100%;" class=" btn scrolldrag py-3 px-4 d-md-1  mr-5 hidePrint">Reload</button> <br> <hr >
            <button onclick="navigateAndPrint()" style="background-color: #3f942e; width: 100%;" class=" btn scrolldrag py-3 px-4 d-md-1  mr-5 hidePrint">Print Score</button>            
            <br>
            <br>
            <div id="showMe"></div>
        `;
    } else {
        alert("Please enter your name before Submitting.");
    }
}

function printScore() {
    var hideP = document.getElementsByClassName('hidePrint');
    for (var i = 0; i < hideP.length; i++) {
        hideP[i].style.display = 'none';
    }
    document.getElementById('showMe').innerHTML = `<h3>Submitted By: ${Uname}</h3>`;
    window.print();
}
window.onafterprint = function() {
    // Show the name element again
    document.getElementById('showMe').innerHTML = '';
};

  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
      const currentQuizData = quizData[currentQuiz];
      if (answer === currentQuizData.correct) 
      {   
        score++
      }

      localStorage.setItem(`n${currentQuiz + 1}`, answer);

      currentQuiz++
     
    }
  
   
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      showResults()
    }
  })
  

      

            
  function navigateAndPrint() {
      // Navigate to the print page
      window.location.href = 'print.html';
  }
  
  // Function to print the content when the print page is fully loaded
   
          