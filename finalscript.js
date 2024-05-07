const questions = [
    {
        question: "Q1/12: Hari ini panas banget, rasanya enak nih kalau ngadem di kafe!",
        image: "pic/Q1.gif",
        answers: {
            E: {
                text: "Ngajak temen",
                scores: { I: 0, E: +1 },
            },
            I: {
                text: "Pergi sendiri",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "Q2/12: Kafenya nyediain qr code untuk memesan, enaknya pesan lewat apa ya?",
        image: "pic/menu.gif",
        answers: {
            I: {
                text: "Scan qr code",
                scores: { I: +1, E: 0 },
            },
            E: {
                text: "Ngomong langsung sama pelayan",
                scores: { I: 0, E: +1 },
            },
        },
    },
    {
        question: "Q3/12: Yay cafenya sepi hari ini, pilihan tempat duduknya banyak. Kamu akan duduk dimana?",
        answers: {
            E: {
                text: "Duduk di mana aja",
                scores: { I: 0, E: +1 },
            },
            I: {
                text: "Duduk di sudut yang sepi",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "Q4/12: Tiba-tiba saat bel berbunyi pukul 12 siang, radio musik di kafe itu kehilangan sinyal. Kamu merasa hal ini tidak wajar.",
        image: "pic/radio.gif",
        answers: {
            T: {
                text: "Bertanya ke pelayannya apakah situasi ini normal",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Dibatin tapi waspada kalau situasi tambah aneh",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q5/12: Setelah beberapa saat, pesanan dihidangkan, tapi pas kamu coba kok rasanya gini?",
        image: "pic/milkshake.gif",
        answers: {
            F: {
                text: "Mungkin lidahku yang ga bener jadinya terasa asin milkshakenya",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Milkshake kan harusnya manis, yang buat ga bener",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q6/12: Selang beberapa saat, kamu ingin ke toilet. Saat berjalan tiba-tiba benda di sekeliling mu melayang dan badan mu tiba-tiba menjadi terbalik. Apa yang kamu pikirkan?",
        image: "pic/melayang.gif",
        answers: {
            T: {
                text: "Eh kenapa gravitasi di kafe ini tiba-tiba hilang?",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Apa aku sakit ya dari tadi ga ada yang bener? Separah itukah sakitnya?",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q7/12: Menyadari kondisi ini, apa yang akan kamu lakukan?",
        answers: {
            N: {
                text: "Panik dulu habis itu baru cari cara untuk keluar",
                scores: { S: 0, N: +1 }
            },
            S: {
                text: "Tanpa berpikir panjang memutuskan untuk keluar dari kafe",
                scores: { S: +1, N: 0 },
            },
        },
    },
    {
        question: "Q8/12: Sesampainya kamu di pintu keluar, kamu membuka pintu tersebut dan di balik pintu ada dimensi lain bentuknya angker seperti di suatu hutan terkutuk",
        answers: {
            S: {
                text: "Hutannya kelihatan lebih angker tapi terlihat lebih ‘aman’ daripada di kafe, jadi kamu segera masuk ke hutan tersebut",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "Kamu masuk karena beranggapan dengan melewati hutan terkutuk akan menemukan jalan keluar dari kafe",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q9/12: Mengapa kamu menjelajahi hutan tersebut?",
        answers: {
            S: {
                text: "Menjelajahi untuk memastikan hutannya aman",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "Menjelajahi untuk nyari jalan keluar",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q10/12: Saat berjalan kamu mendengar ada yang memanggilmu. kamu mengikuti arah suaranya dan menemukan asal suara itu. Sebuah pohon tua besar dengan wajah menyeramkan memanggilmu untuk mendekatinya, apa yang kamu lakukan?",
        answers: {
            J: {
                text: "Mendekati dengan ragu-ragu",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Mendekati tanpa ragu",
                scores: { J: 0, P: +1 },
            },
        },

    },
    {
        question: "Q11/12: Pohon tua itu memberitahu kamu bahwa ada dua cara untuk keluar dari hutan ini. Kamu akan memilih cara?",
        answers: {
            J: {
                text: "Mengambil rute yang jauh dengan mengikuti petunjuk arah yang ada di hutan untuk menuju pintu exit",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Mengambil rute yang dekat dengan memasuki mulut pohon",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q12/12: POOF kamu terbangun di kafe, sepertinya kamu telah tertidur saat menunggu pesanan datang. Kamu beranjak dari tempat dudukmu dan ketika ingin keluar dari kafe ada sesuatu menghentikanmu, seorang “pelayan” yang merupakan alien. “Pelayan” itu memberimu dua pilihan, mana yang akan kamu pilih?",
        answers: {
            P: {
                text: "Melanjutkan petualangan",
                scores: { J: 0, P: +1 },
            },
            J: {
                text: "Keluar dari kafe",
                scores: { J: +1, P: 0 },
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "Item.png"
    },
    "ISFJ": {
        image: "Putih.png"
    },
    "INFJ": {
        image: "Calico.png"
    },
    "INTJ": {
        image: "Item.png"
    },
    "ISTP": {
        image: "Item.png"
    },
    "ISFP": {
        image: "Putih.png"
    },
    "INFP": {
        image: "Siamese.png"
    },
    "INTP": {
        image: "Item.png"
    },
    "ESTP": {
        image: "Oyen.png"
    },
    "ESFP": {
        image: "Oyen.png"
    },
    "ENFP": {
        image: "Oyen.png"
    },
    "ENTP": {
        image: "Siamese.png"
    },
    "ESTJ": {
        image: "Siamese.png"
    },
    "ESFJ": {
        image: "Putih.png"
    },
    "ENFJ": {
        image: "Siamese.png"
    },
    "ENTJ": {
        image: "Siamese.png"
    },
}

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "pic/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();

