document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

  const questions = [
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/AllByMyself_EricCarmen.mp3",
      name: "All By Myself",
      artist: "Eric Carmen",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/AllByMyself_EricCarmen.jpg",
      description: "🎹 Eric Carmen transformou a solidão em um hino inesquecível! Inspirado em Rachmaninoff, ele criou uma das músicas mais dramáticas e poderosas da década de 70. Quem nunca se sentiu completamente sozinho em algum momento da vida? Esse clássico foi regravado por artistas como Celine Dion e continua sendo trilha sonora de corações partidos até hoje. 💔🎶",
      options: [
        { name: "All By Myself", artist: "Eric Carmen" },
        { name: "No More Tears", artist: "Barbra Streisand" },
        { name: "Brown Sugar", artist: "The Rolling Stones" },
        { name: "In the Summertime", artist: "Mungo Jerry" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/BellaSenzAnima_RiccardoCocciante.mp3",
      name: "Bella SenzAnima",
      artist: "Riccardo Cocciante",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/BellaSenzAnima_RiccardoCocciante.jpg",
      description: "Uma das canções italianas mais intensas já escritas! Riccardo Cocciante transmite dor e revolta em Bella Senz'Anima (Bela Sem Alma), uma música que retrata o fim de um amor com amargura e paixão. Sua interpretação visceral faz com que cada palavra pareça um desabafo sentido na alma. Quem nunca viveu um amor que acabou em dor e ressentimento? 🔥💔",
      options: [
       
        { name: "Champagne", artist: "Peppino di Capri" },
        { name: "Bella SenzAnima", artist: "Riccardo Cocciante" },
        { name: "Ti Scriverò", artist: "Pupo" },
        { name: "Innamorati", artist: "Toto Cutugno" }
      ] 
    },

{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/Feelings_MorrisAlbert.mp3",
      name: "Feelings",
      artist: "Morris Albert",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/Feelings_MorrisAlbert.jpg",
      description: "🎤 Feelings é uma das canções mais regravadas do mundo, um verdadeiro hino da música romântica! O brasileiro Morris Albert conquistou sucesso mundial nos anos 70 com essa melodia suave e nostálgica. A música fala sobre a dor de um amor perdido e foi interpretada por grandes artistas ao longo das décadas. Quem nunca suspirou ao ouvir essa? 💖🎶",
      options: [
        { name: "Lean on Me", artist: "Bill Withers" },
        { name: "December", artist: "The Four Seasons" },
        { name: "Boogie Nights", artist: "Heatwave" },
        { name: "Feelings", artist: "Morris Albert" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/ForeverAndEver_DemisRoussos.mp3",
      name: "Forever And Ever",
      artist: "Demis Roussos",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/ForeverAndEver_DemisRoussos.jpg",
      description: "🏛️🎶 Com sua voz inconfundível e seu estilo único, Demis Roussos nos presenteou com Forever and Ever, um clássico do romantismo. Misturando elementos da música grega e pop, a canção se tornou um grande sucesso internacional. Seu refrão poderoso e apaixonado faz qualquer coração bater mais forte. Quem não gostaria de um amor que dure para sempre e sempre? 💍❤️",
      options: [
        { name: "Lean on Me", artist: "Bill Withers" },
        { name: "Forever And Ever", artist: "Demis Roussos" },
        { name: "Maggie May", artist: "Rod Stewart" },
        { name: "Superstition", artist: "Stevie Wonder" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/GreenGreenGrassOfHome_TomJones.mp3",
      name: "Green Green Grass Of Home",
      artist: "Tom Jones",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/GreenGreenGrassOfHome_TomJones.jpg",
      description: "🌿🏡 Tom Jones imortalizou essa música nostálgica sobre o desejo de voltar para casa. Escrita por Curly Putman, foi a versão de Jones que a transformou em um sucesso mundial. A letra comovente conta a história de um homem que sonha em retornar ao lar, mas a revelação final da canção surpreende e emociona. Uma verdadeira obra-prima da música country e pop! 🎶✨",
      options: [
        { name: "I Think I Love You", artist: "The Partridge Family" },
        { name: "Stuck in the Middle with You", artist: "Stealers Wheel" },
        { name: "Green Green Grass Of Home", artist: "Tom Jones" },
        { name: "Lonely Boy", artist: "The Black Keys" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/IdLoveYouToWantMe_Lobo.mp3",
      name: "I’d Love You To Want Me",
      artist: "Lobo",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/IdLoveYouToWantMe_Lobo.jpg",
      description: "🎶 Um verdadeiro clássico dos anos 70, essa canção romântica de Lobo (pseudônimo de Roland Kent LaVoie) conquistou corações ao redor do mundo. Seu tom melancólico e apaixonado fez dela uma das músicas mais pedidas nas rádios na época, e até hoje ela embala histórias de amor e saudade. Quem nunca se identificou com a dor de querer alguém que não sente o mesmo? 💔✨",
      options: [
        { name: "I’d Love You To Want Me", artist: "Lobo" },
        { name: "Bye Bye Love", artist: "The Everly Brothers" },
        { name: "I Am Woman", artist: "Helen Reddy" },
        { name: "You Really Got Me", artist: "The Kinks" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/PigeonWithoutADove_PatrickDimon.mp3",
      name: "Pigeon Without A Dove",
      artist: "Patrick Dimon",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/PigeonWithoutADove_PatrickDimon.jpg",
      description: "🕊️ Essa balada emocionante de Patrick Dimon tocou fundo nos corações dos ouvintes. Com uma melodia marcante e letra reflexiva, a música se tornou um sucesso inesperado, principalmente no Brasil, onde foi trilha sonora de momentos inesquecíveis. A sensação de estar perdido sem um amor verdadeiro é traduzida com uma melodia que arrepia! 🎼❤️",
      options: [
        { name: "I’ll Be There", artist: "The Jackson 5" },
        { name: "Islands in the Stream", artist: "Kenny Rogers & Dolly Parton" },
        { name: "Pigeon Without A Dove", artist: "Patrick Dimon" },
        { name: "Get Up Stand Up", artist: "The Wailers" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/SeasonsInTheSun_TerryJacks.mp3",
      name: "Seasons In The Sun",
      artist: "Terry Jacks",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/SeasonsInTheSun_TerryJacks.jpg",
      description: "🍂🌞 Uma despedida triste e bela ao mesmo tempo! Baseada na música francesa Le Moribond de Jacques Brel, essa versão de Terry Jacks se tornou um hino sobre despedidas e nostalgia. Seu sucesso foi estrondoso nos anos 70, marcando uma geração inteira com sua melodia melancólica e letra tocante. Quem nunca sentiu aquele aperto no peito ao ouvir? 😢🎶",
      options: [
        { name: "Don't Stop Believin'", artist: "Journey" },
        { name: "Crocodile Rock", artist: "Elton John" },
        { name: "Stayin’ Alive", artist: "Bee Gees" },
        { name: "Seasons In The Sun", artist: "Terry Jacks" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/WeSaidGoodbye_DaveMaclean.mp3",
      name: "We Said Goodbye",
      artist: "Dave Maclean",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/WeSaidGoodbye_DaveMaclean.jpg",
      description: "💔 Dave Maclean, brasileiro de coração britânico, emocionou o público com essa linda canção romântica. Ele foi um dos primeiros artistas a se destacar cantando em inglês no Brasil, e We Said Goodbye se tornou uma das suas marcas registradas. Com uma voz suave e melodia envolvente, essa música fala sobre despedidas que nunca deveriam acontecer. Será que existe um adeus definitivo no amor? 🥀",
      options: [
        { name: "Long Cool Woman in a Black Dress", artist: "The Hollies" },
        { name: "We Said Goodbye", artist: "Dave Maclean" },
        { name: "Love Will Keep Us Together", artist: "John Star" },
        { name: "More Than a Feeling", artist: "Crhystian Bell" }
      ] 
    },
{
      song: "https://radialistaedsonleite.github.io/qualeamusica5inter/WithoutYou_HarryNilsson.mp3",
      name: "Without You",
      artist: "Harry Nilsson",
      image: "https://radialistaedsonleite.github.io/qualeamusica5inter/WithoutYou_HarryNilsson.jpg",
      description: "😭🎤 Uma das baladas mais icônicas de todos os tempos! Composta originalmente pelo Badfinger, foi Harry Nilsson quem eternizou essa canção em 1971, levando-a ao topo das paradas. Seu vocal poderoso e cheio de emoção fez com que muitos considerassem essa a música de amor mais triste da história. Décadas depois, Mariah Carey regravou a canção, reafirmando seu impacto. Já segurou o choro ouvindo essa? 😢💔",
      options: [
        { name: "Rock Your Baby", artist: "George McCrae" },
        { name: "Tears of a Clown", artist: "The Miracles" },
        { name: "Without You", artist: "Harry Nilsson" },
        { name: "With a Little Help from My Friends", artist: "The Beatles" }
      ] 
    },

  ];

  let currentQuestionIndex = 0;
  let score = parseInt(localStorage.getItem("playerScore")) || 0;
  const audio = document.getElementById("audio");
  const optionsContainer = document.getElementById("options");
  const questionText = document.getElementById("question");
  const scoreText = document.getElementById("score");
  const gameContainer = document.getElementById("game");
  const finalScreen = document.getElementById("final-screen");

  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showFinalScreen();
      return;
    }

    const q = questions[currentQuestionIndex];
    audio.src = q.song;
    questionText.textContent = "Clique no play, ouça e responda!";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.innerHTML = `<strong>${option.name}</strong><br><i>${option.artist}</i>`;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option.name, option.artist);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio
        .play()
        .catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(selectedName, selectedArtist) {
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (selectedName === q.name && selectedArtist === q.artist) {
      score += 10;
    } else {
      score -= 5;
    }

    localStorage.setItem("playerScore", score);
    scoreText.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScreen();
    }
  }

  function showFinalScreen() {
    audio.pause();
    audio.currentTime = 0;

    gameContainer.style.display = "none";
    finalScreen.style.display = "block";
    finalScreen.innerHTML = `
      <h1 style="color: red; font-weight: bold; font-size: 1.5em;">Parabéns! Você já está com ${score} pontos!</h1>
      <div>${generateFinalComments()}</div>
      <div class="buttons-container">
          <button id="restart-btn">Jogar Novamente</button>
          <button id="exit-btn">Fechar o Jogo</button>
      </div>
    `;

    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function generateFinalComments() {
    return questions
      .map(
        (q) => `
        <div style="margin-bottom: 5px; text-align: center;">
          <p>↴ Um pouco sobre esses sucessos: ↴</p> <!-- Aqui está o texto com os asteriscos -->
          <strong>${q.name} - ${q.artist}</strong>
          <img src="${q.image}" alt="${q.name}" style="width: ${IMAGE_SIZE}px; height: ${IMAGE_SIZE}px; display: block; margin: 5px auto;">
          <p>${q.description}</p>
        </div>
      `
      )
      .join("");
  }

  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0;
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }

  function exitGame() {
    window.location.href = "https://radialistaedsonleite.github.io/jogos-HTML";
  }

  scoreText.textContent = `Pontuação: ${score}`; // Exibe a pontuação ao iniciar
  loadQuestion();
});
