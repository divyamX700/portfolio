document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('don\'t be lazy fill it in');
            return;
        }
        alert('I live in your walls');
        this.reset();
    });


    const textElement = document.querySelector('.animated-text .text-content');
    const words = ['Keen Learner', 'Web Developer', 'ML Enthusiast'];
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        textElement.textContent = words[currentIndex];
    }, 2000);
});


function pickMove() {
    const num = Math.random();
    let computerMove = 0;
    if (num >= 0 && num < 1 / 3) {
        computerMove = 'rock';
    }
    if (num >= 1 / 3 && num < 2 / 3) {
        computerMove = 'paper'
    }
    if (num >= 2 / 3 && num < 1) {
        computerMove = 'scissors'
    }

    return computerMove
}

function play(move) {
    const computerMove = pickMove();
    let res = '';
    if (move == 'rock') {
        if (computerMove == 'rock') {
            res = 'Tie!';
        }
        if (computerMove == 'paper') {
            res = 'You lose!'
        }
        if (computerMove == 'scissors') {
            res = 'You win!'
        }
    }

    if (move == 'paper') {
        if (computerMove == 'rock') {
            res = 'You win!'
        }
        if (computerMove == 'paper') {
            res = 'Tie!'
        }
        if (computerMove == 'scissors') {
            res = 'You lose!'
        }
    }

    if (move == 'scissors') {
        if (computerMove == 'rock') {
            res = 'You lose!';
        }
        if (computerMove == 'paper') {
            res = 'You win!'
        }
        if (computerMove == 'scissors') {
            res = 'Tie!'
        }
    }


    const resEle = document.querySelector('.result')
    const selEle = document.querySelector('.selected')
    selEle.innerHTML = `You : ${move} &nbsp;&nbsp;&nbsp; Computer : ${computerMove}`
    resEle.innerHTML = res;
}

function modeToggle() {
    document.body.classList.toggle('dark-mode');

    const elements = document.querySelectorAll(
        'header, .header-right nav ul li a, #home, .pfp, .monkey p, .project-card a, #projects, #projects h2, #about, #contact, #contact-form button, footer, #name, #email, #message, .minigame, .about-page, .minigame-heading, .bi'
    );

    elements.forEach((element) => {
        element.classList.toggle('dark-mode');
    });

    if (document.body.classList.contains('dark-mode')) {
        document.querySelector('.btn').innerHTML = `<span class="material-symbols-outlined">
          light_mode
          </span>`;
    } else {
        document.querySelector('.btn').innerHTML = `<span class="material-symbols-outlined">
          dark_mode
          </span>`;
    }
}
