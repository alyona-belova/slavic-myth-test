const questions = [
  {
    question: "Какая песня Монеточки откликается тебе больше всего?",
    answers: [
      { text: "Каждый раз", type: "A", audio: "assets/kazhdy-raz.mp3" },
      { text: "Кис кис кис", type: "B", audio: "assets/kis-kis-kis.mp3" },
      { text: "Монополия", type: "C", audio: "assets/monopoliya.mp3" },
      {
        text: "Гори, гори, гори",
        type: "D",
        audio: "assets/gori-gori-gori.mp3",
      },
    ],
  },
  {
    question: "Где бы ты хотела провести выходные?",
    answers: [
      { text: "На небольшой яхте в тихой бухте", type: "A" },
      { text: "В уютном домике среди скал и густого леса", type: "B" },
      { text: "На берегу тёплого озера с потрясающими закатами", type: "C" },
      { text: "В горах, исследуя скрытые пещеры", type: "D" },
    ],
  },
  {
    question: "Каким было бы твоё магическое хобби?",
    answers: [
      { text: "Очаровывать голосом и создавать иллюзии", type: "A" },
      { text: "Накладывать порчу и снимать проклятия", type: "B" },
      { text: "Призывать дождь и управлять водой", type: "C" },
      { text: "Лечить разбитые сердца и предсказывать будущее", type: "D" },
    ],
  },
  {
    question: "Если бы ты могла управлять одной стихией, что бы это было?",
    answers: [
      { text: "Воздух – лёгкий, неуловимый и свободный", type: "A" },
      {
        text: "Земля – надёжная, могущественная, с секретами вглубине",
        type: "B",
      },
      {
        text: "Вода – гибкая и загадочная, всегда знающая свой путь",
        type: "C",
      },
      {
        text: "Гроза – яркая, стремительная, не останавливающаяся ни перед чем",
        type: "D",
      },
    ],
  },
  {
    question: "Какой подарок стал бы для тебя настоящим сокровищем?",
    answers: [
      { text: "Древняя книга с тайными заклинаниями", type: "A" },
      { text: "Таинственный ключ, способный открыть любую дверь", type: "B" },
      {
        text: "Волшебное зеркало, показывающее истинные намерения людей",
        type: "C",
      },
      {
        text: "Защитный амулет, который придаст силы в трудную минуту",
        type: "D",
      },
    ],
  },
  {
    question: "Какое место в компании тебе ближе всего?",
    answers: [
      {
        text: "Искусная рассказчица, которая может найти историю под любую ситуацию",
        type: "A",
      },
      {
        text: "Инициаторка приключений и активностей – с тобой точно не соскучишься ",
        type: "B",
      },
      {
        text: "Настоящая душа компании – куда без твоего обаяния?  ",
        type: "C",
      },
      {
        text: "Та, кто знает как поддержать и всегда найдёт нужные слова",
        type: "D",
      },
    ],
  },
  {
    question: "Как думаешь, в чём твоя скрытая суперсила?",
    answers: [
      { text: "Влиять на настроение окружающих", type: "A" },
      { text: "Найти выход из любой сложной ситуации", type: "B" },
      { text: "Притягивать к себе интересных людей", type: "C" },
      { text: "Исцелять и оберегать", type: "D" },
    ],
  },
  {
    question: "Какой фамильяр сопровождал бы тебя в твоих приключениях?",
    answers: [
      { text: "Ворон, который знает ответы на все вопросы", type: "A" },
      { text: "Черный кот с независимым нравом и острым языком", type: "B" },
      {
        text: "Золотая рыбка, исполняющая желания (но в ограниченном количестве)",
        type: "C",
      },
      {
        text: "Гордый сокол, готовый перенести тебя в безопасное место в любой момент",
        type: "D",
      },
    ],
  },
];

const results = {
  A: {
    title: "🕊️ Алконост",
    description:
      "Сказочная райская птица с головой и руками девы. Её пение настолько прекрасно, что услышавший его забывает обо всём на свете.",
    personality:
      "Ты – загадочная и утончённая личность, которая оставляет глубокий след в сердцах окружающих. Твоя сила в умении тонко чувствовать мир и передавать эти ощущения другим. Ты умеешь создавать атмосферу волшебства, даже когда вокруг полный хаос. Люди тянутся к тебе за вдохновением и тайнами, которые не так просто разгадать.",
    traits: [
      "Загадочность и мечтательность",
      "Глубокая эмпатия",
      "Способность очаровывать словами и голосом",
      "Любовь к уединению и тёплым, тихим моментам",
    ],
    superpower:
      "Ты можешь заставить людей забыть о своих проблемах – стоит только тебе заговорить.",
    image: "assets/alkonost.png",
  },
  B: {
    title: "🔮 Баба-Яга",
    description:
      "Лесная ведьма. Владеет мощными артефактами и наделена магической силой, является проводником между миром живых и мёртвых.",
    personality:
      "Ты – человек, который не терпит глупостей и всегда знает, как решить даже самую сложную проблему, пусть иногда и нестандартными методами. Твоя независимость и хитрость помогают выкрутиться из любой ситуации. Кто-то может тебя бояться, но на самом деле, если заслужить твоё доверие, ты станешь идеальной союзницей.",
    traits: [
      "Острое чувство юмора и хитрость",
      "Независимость и любовь к свободе",
      "Проницательность и умение видеть суть вещей",
      "Неожиданная доброта к тем, кто это заслужил",
    ],
    superpower: "Ты можешь запутать кого угодно и всегда добьёшься своего.",
    image: "assets/babayaga.png",
  },
  C: {
    title: "🧜‍♀️ Русалка",
    description:
      "Дева вод. Ночью вместе с подругами плещется на поверхности воды, а прохожего может защекотать до смерти или увести за собой.",
    personality:
      "Ты – воплощение чарующей лёгкости и таинственности. Тебе легко завоевывать внимание, но не каждый может понять твои настоящие чувства. Ты любишь свободу и не терпишь, когда тебя ограничивают. У тебя есть талант замечать красоту в самых неожиданных местах, а твоё присутствие как глоток свежего воздуха.",
    traits: [
      "Очарование и магнетизм",
      "Свобода и независимость",
      "Тонкое чутьё на настроение окружающих",
      "Любовь к играм и мелким шалостям",
    ],
    superpower:
      "Ты умеешь привлекать к себе тех, кто для тебя интересен – они сами тянутся к тебе.",
    image: "assets/mermaid.png",
  },
  D: {
    title: "🧚 Вила",
    description:
      "Женский дух, проживающий в горах. Вилы летают как птицы, владеют колодцами и озёрами, к людям относятся дружелюбно.",
    personality:
      "Ты – свободный дух с добрым сердцем. Твоя энергия сочетает в себе лёгкость и заботу о близких. Ты не можешь закрыть глаза на несправедливость и всегда готова прийти на помощь, особенно к тем, кто слабее. С тобой никогда не бывает скучно – ты заряжаешь окружающих позитивом и умеешь превратить обычный день в маленькое приключение.",
    traits: [
      "Лёгкость и дружелюбие",
      "Сильное чувство справедливости",
      "Забота о близких и готовность помочь",
      "Любовь к природе",
    ],
    superpower:
      "Ты можешь исцелить не только тело, но и душу, а твоё присутствие делает мир чуть добрее.",
    image: "assets/vila.png",
  },
};

let currentQuestionIndex = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };

const introContainer = document.getElementById("intro-container");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
  introContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  startQuiz();
});
let currentAudio = null;
let currentAudioSrc = "";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  shuffleArray(questions);
  currentQuestionIndex = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  showQuestion();
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    currentAudioSrc = "";
  }
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  shuffleArray(currentQuestion.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer.text;

    button.addEventListener("click", () => {
      stopAudio();
      selectAnswer(answer.type);
    });

    if (
      currentQuestion.question ===
        "Какая песня Монеточки откликается тебе больше всего?" &&
      answer.audio
    ) {
      const audioButton = document.createElement("button");
      audioButton.className = "audio-btn";
      audioButton.textContent = "♫";

      audioButton.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentAudio && currentAudioSrc === answer.audio) {
          stopAudio();
          return;
        }
        stopAudio();
        currentAudio = new Audio(answer.audio);
        currentAudioSrc = answer.audio;
        currentAudio.volume = 0.2;
        currentAudio.play();
        currentAudio.onended = stopAudio;
      });

      const answerWrapper = document.createElement("div");
      answerWrapper.className = "answer-wrapper";
      answerWrapper.appendChild(button);
      answerWrapper.appendChild(audioButton);
      answersContainer.appendChild(answerWrapper);
    } else {
      answersContainer.appendChild(button);
    }
  });
}

function selectAnswer(type) {
  scores[type]++;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const result = results[resultType];

  questionContainer.innerHTML = `
    <div class="result-container">
        <h2>${result.title}</h2>
        <p>${result.description}</p>
        <p>${result.personality}</p>

      <div class="card-row">
        <div class="result-card traits-card">
          <ul>
            ${result.traits.map((trait) => `<li>${trait}</li>`).join("")}
          </ul>
        </div>

        <div class="result-card main-card">
          <img src="${result.image}" alt="${
    result.title
  }" rel="preload" class="result-image">
        </div>
      </div>

      <div class="result-card superpower-card">
        <p><b>Суперспособность:</b> ${result.superpower}</p>
      </div>
    </div>
  `;

  answersContainer.innerHTML = "";
}
