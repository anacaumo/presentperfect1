/* =====================================================================
   QUESTION BANK  ·  "Remember when...?"  ·  Present perfect, Day 1
   (Units 14 and 15, Nostalgia)
   The game engine (game.js) never needs to change.

   MULTIPLE_CHOICE  { topics, q, options: [4 strings], answer, why, keepOrder? }
     - every question must have exactly OPTIONS_PER_QUESTION options
     - "answer" must be written exactly like one of the options
     - keepOrder: true  → options are NOT shuffled (good for numbers)

   TRUE_FALSE       { topics, q, answer: true | false, why }
     - keep the number of true and false statements EQUAL, so each team
       gets a balanced mix of true and false statements

   "why" is the explanation shown when the feedback is revealed:
   English first, then a line break (\n), then Portuguese.

   "topics" lists every fact or RULE the question states or gives away: in
   its text, in its options, or in its "why" feedback (which the whole class
   sees). The game never puts two questions that share a topic in the same
   game, so one question can't give away the answer to another.
   If you add a question, give it the same topic id as any other question
   about that sentence or rule.

   Topic ids used for RULES (shared by several questions on purpose):
     adv-yet, adv-already, adv-just, adv-never, adv-ever   (adverbs)
     eat-forms, see-forms, forms-make                      (verb forms)
     when-simple, when-perfect                             (ate vs eaten)
     watch-see, reg-irreg, pp-third                        (verb basics)
     formula-aff, formula-neg                              (formulas)
     contraction-s, contraction-neg                        (I've / haven't)
   ===================================================================== */

const GAME_TITLE = "Remember when...?";
const OPTIONS_PER_QUESTION = 4;

const MULTIPLE_CHOICE = [

  /* ---------- have / has / haven't / hasn't ---------- */
  {
    topics: ["hh-brother-subway"],
    q: "My little brother ______ played Subway Surfers. He's on level 40 now!",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "has",
    why: "My little brother = he → HAS + past participle (played). The sentence is affirmative.\nMy little brother = he → HAS + past participle (played). A frase é afirmativa: ele já jogou."
  },
  {
    topics: ["hh-friends-stickers"],
    q: "My friends and I ______ collected all the stickers for the album. We're so happy!",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "have",
    why: "My friends and I = we → HAVE + past participle (collected). The sentence is affirmative.\nMy friends and I = we → HAVE + past participle (collected). A frase é afirmativa: nós já completamos o álbum."
  },
  {
    topics: ["hh-bia-bereal"],
    q: "Bia ______ downloaded BeReal. She doesn't have the app on her phone.",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "hasn't",
    why: "Bia = she + negative sentence → HASN'T + past participle (downloaded). She doesn't have the app.\nBia = she + frase negativa → HASN'T + past participle (downloaded). Ela não tem o app."
  },
  {
    topics: ["hh-cousins-peppa"],
    q: "My cousins ______ watched Peppa Pig. They don't know who George is.",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "haven't",
    why: "My cousins = they + negative sentence → HAVEN'T + past participle (watched). They don't know George.\nMy cousins = they + frase negativa → HAVEN'T + past participle (watched). Eles não conhecem o George."
  },
  {
    topics: ["hh-lucas-roblox"],
    q: "Lucas and Davi ______ played Roblox. They play it every weekend!",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "have",
    why: "Lucas and Davi = they → HAVE + past participle (played). The sentence is affirmative.\nLucas and Davi = they → HAVE + past participle (played). A frase é afirmativa."
  },

  /* ---------- questions with have / has ---------- */
  {
    topics: ["q-fidget"],
    q: "______ you ever used a fidget spinner?",
    options: ["Have", "Has", "Did", "Do"],
    answer: "Have",
    why: "Present perfect question: HAVE + I / you / we / they + (ever) + past participle. Have you ever used...?\nPergunta no present perfect: HAVE + I / you / we / they + (ever) + past participle. Have you ever used...?"
  },
  {
    topics: ["q-pokemon-cards"],
    q: "______ your older brother ever collected Pokémon cards?",
    options: ["Have", "Has", "Did", "Do"],
    answer: "Has",
    why: "Present perfect question: HAS + he / she / it + (ever) + past participle. Your older brother = he → Has...?\nPergunta no present perfect: HAS + he / she / it + (ever) + past participle. Your older brother = he → Has...?"
  },
  {
    topics: ["q-parents-snapchat"],
    q: "______ your parents ever used Snapchat?",
    options: ["Have", "Has", "Did", "Do"],
    answer: "Have",
    why: "Present perfect question: your parents = they → HAVE + (ever) + past participle (used).\nPergunta no present perfect: your parents = they → HAVE + (ever) + past participle (used)."
  },

  /* ---------- short answers ---------- */
  {
    topics: ["sa-flappy"],
    q: "Have you ever played Flappy Bird? Yes, I ______.",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "have",
    why: "The short answer repeats have / has from the question: Have you...? → Yes, I HAVE.\nA resposta curta repete o have / has da pergunta: Have you...? → Yes, I HAVE."
  },
  {
    topics: ["sa-cousin-slime"],
    q: "Has your cousin ever made slime? No, she ______.",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "hasn't",
    why: "Negative short answer: Has...? → No, she HASN'T.\nResposta curta negativa: Has...? → No, she HASN'T."
  },
  {
    topics: ["sa-pedro-candy"],
    q: "Has Pedro ever played Candy Crush? Yes, he ______.",
    options: ["have", "has", "haven't", "hasn't"],
    answer: "has",
    why: "The short answer repeats have / has from the question: Has...? → Yes, he HAS.\nA resposta curta repete o have / has da pergunta: Has...? → Yes, he HAS."
  },

  /* ---------- contractions and formulas ---------- */
  {
    topics: ["contraction-s"],
    q: "In “She's made slime”, the 's means ______.",
    options: ["has", "is", "was", "does"],
    answer: "has",
    why: "She's made = She HAS made. After 's comes a past participle (made), so it is has, not is. In speech: I have → I've, she has → she's.\nShe's made = She HAS made. Depois do 's vem um past participle (made), então é has, e não is. Na fala: I have → I've, she has → she's."
  },
  {
    topics: ["contraction-neg"],
    q: "“Haven't” means ______.",
    options: ["have not", "has not", "had not", "do not"],
    answer: "have not",
    why: "haven't = have not · hasn't = has not. It is the short form of have / has + not.\nhaven't = have not · hasn't = has not. É a forma curta de have / has + not."
  },
  {
    topics: ["formula-aff"],
    q: "What is the formula of the present perfect (affirmative)?",
    options: [
      "have / has + past participle",
      "was / were + past participle",
      "did + past participle",
      "have / has + verb (1st form)"
    ],
    answer: "have / has + past participle",
    why: "Present perfect = HAVE / HAS + past participle. Ex.: I have eaten Ioiô Crem. / She has made slime.\nPresent perfect = HAVE / HAS + past participle. Ex.: I have eaten Ioiô Crem. / She has made slime. Em português é o nosso “eu já comi”."
  },
  {
    topics: ["formula-q"],
    q: "Which formula is a present perfect question?",
    options: [
      "Have + you + (ever) + past participle?",
      "Did + you + (ever) + past participle?",
      "Do + you + (ever) + past participle?",
      "Are + you + (ever) + past participle?"
    ],
    answer: "Have + you + (ever) + past participle?",
    why: "Question = HAVE / HAS + subject + (ever) + past participle. Ex.: Have you ever played Beyblade?\nPergunta = HAVE / HAS + sujeito + (ever) + past participle. Ex.: Have you ever played Beyblade?"
  },
  {
    topics: ["formula-neg"],
    q: "He / She / It + ______ + past participle (negative).",
    options: ["hasn't", "haven't", "doesn't", "didn't"],
    answer: "hasn't",
    why: "Negative with he / she / it → HASN'T + past participle. With I / you / we / they → HAVEN'T.\nNegativa com he / she / it → HASN'T + past participle. Com I / you / we / they → HAVEN'T."
  },
  {
    topics: ["formula-neg", "s-duda-minecraft"],
    q: "Which sentence is correct?",
    options: [
      "Duda hasn't played Minecraft.",
      "Duda haven't played Minecraft.",
      "Duda hasn't play Minecraft.",
      "Duda not has played Minecraft."
    ],
    answer: "Duda hasn't played Minecraft.",
    why: "Duda = she → HASN'T + past participle (played). Haven't is for I / you / we / they, and the main verb must be a past participle.\nDuda = she → HASN'T + past participle (played). Haven't é para I / you / we / they, e o verbo principal precisa estar no past participle."
  },
  {
    topics: ["s-dog-filter"],
    q: "Which sentence is correct?",
    options: [
      "Pedro and Lucas have used the dog filter on Snapchat.",
      "Pedro and Lucas has used the dog filter on Snapchat.",
      "Pedro and Lucas have use the dog filter on Snapchat.",
      "Pedro and Lucas used have the dog filter on Snapchat."
    ],
    answer: "Pedro and Lucas have used the dog filter on Snapchat.",
    why: "Pedro and Lucas = they → HAVE + past participle (used). The other options break the formula.\nPedro and Lucas = they → HAVE + past participle (used). As outras opções quebram a fórmula."
  },
  {
    topics: ["s-q-ladybug", "see-forms"],
    q: "Which question is correct?",
    options: [
      "Have you ever seen Ladybug & Cat Noir?",
      "Did you ever seen Ladybug & Cat Noir?",
      "Has you ever seen Ladybug & Cat Noir?",
      "Have you ever saw Ladybug & Cat Noir?"
    ],
    answer: "Have you ever seen Ladybug & Cat Noir?",
    why: "HAVE + you + ever + past participle. The past participle of see is SEEN (see – saw – seen), not saw.\nHAVE + you + ever + past participle. O past participle de see é SEEN (see – saw – seen), e não saw."
  },

  /* ---------- ate x eaten / saw x seen: does the sentence say WHEN? ---------- */
  {
    topics: ["eat-forms"],
    q: "Which sentence is correct?",
    options: [
      "I have eaten Ioiô Crem.",
      "I have ate Ioiô Crem.",
      "I has eaten Ioiô Crem.",
      "I eaten Ioiô Crem."
    ],
    answer: "I have eaten Ioiô Crem.",
    why: "I + HAVE + past participle. The past participle of eat is EATEN (eat – ate – eaten), and it always needs have / has.\nI + HAVE + past participle. O past participle de eat é EATEN (eat – ate – eaten), e ele sempre precisa do have / has."
  },
  {
    topics: ["when-simple", "eat-forms"],
    q: "Which sentence says WHEN something happened?",
    options: [
      "I ate Ioiô Crem yesterday.",
      "I have eaten Ioiô Crem.",
      "I have never eaten Ioiô Crem.",
      "Have you ever eaten Ioiô Crem?"
    ],
    answer: "I ate Ioiô Crem yesterday.",
    why: "“Yesterday” says when → simple past (ate). If the sentence doesn't say when, we use the present perfect (have eaten).\n“Yesterday” diz quando → simple past (ate). Se a frase não diz quando, usamos o present perfect (have eaten)."
  },
  {
    topics: ["when-simple", "see-forms"],
    q: "We ______ Frozen last Friday night.",
    options: ["saw", "seen", "have saw", "have seen"],
    answer: "saw",
    why: "“Last Friday night” says when → simple past: SAW. Seen only works with have / has.\n“Last Friday night” diz quando → simple past: SAW. Seen só funciona com have / has."
  },
  {
    topics: ["when-simple", "reel-posted"],
    q: "My cousin ______ a Reel last night.",
    options: ["posted", "has posted", "have posted", "hasn't posted"],
    answer: "posted",
    why: "“Last night” says when → simple past: POSTED. The present perfect doesn't say when.\n“Last night” diz quando → simple past: POSTED. O present perfect não diz quando."
  },
  {
    topics: ["when-perfect"],
    q: "Which sentence does NOT say when?",
    options: [
      "I have played Minecraft.",
      "I played Minecraft yesterday.",
      "I played Minecraft last weekend.",
      "I played Minecraft in 2019."
    ],
    answer: "I have played Minecraft.",
    why: "When the sentence doesn't say when, only that it happened (an experience), we use the present perfect: I have played.\nQuando a frase não diz quando, só que aconteceu (uma experiência), usamos o present perfect: I have played."
  },

  /* ---------- past participle basics ---------- */
  {
    topics: ["pp-third"],
    q: "The past participle is the ______ form of the verb.",
    options: ["first", "second", "third", "fourth"],
    keepOrder: true,
    answer: "third",
    why: "The past participle is the 3rd form of the verb: verb, simple past, past participle (eat, ate, eaten).\nO past participle é a 3ª forma do verb: verb, simple past, past participle (eat, ate, eaten)."
  },
  {
    topics: ["reg-irreg"],
    q: "Which verb is irregular?",
    options: ["watch", "play", "use", "make"],
    answer: "make",
    why: "Make is irregular (make – made – made): you have to memorize it. Watch, play and use are regular (+ -ed).\nMake é irregular (make – made – made): é preciso decorar. Watch, play e use são regulares (+ -ed)."
  },
  {
    topics: ["reg-irreg"],
    q: "How do we form the past participle of REGULAR verbs?",
    options: ["verb + -ed", "verb + -ing", "verb + -s", "verb + -er"],
    answer: "verb + -ed",
    why: "Regular verbs: verb + -ed (play → played → played).\nVerbos regulares: verb + -ed (play → played → played)."
  },
  {
    topics: ["see-forms"],
    q: "What are the 3 forms of “see”?",
    options: [
      "see – saw – seen",
      "see – saw – saw",
      "see – seen – saw",
      "see – sees – seeing"
    ],
    answer: "see – saw – seen",
    why: "See is irregular: see – saw – seen. The past participle is SEEN.\nSee é irregular: see – saw – seen. O past participle é SEEN."
  },
  {
    topics: ["forms-make"],
    q: "What are the 3 forms of “make”?",
    options: [
      "make – made – made",
      "make – maked – maked",
      "make – made – maden",
      "make – make – made"
    ],
    answer: "make – made – made",
    why: "Make is irregular: make – made – made. The simple past and the past participle are the same.\nMake é irregular: make – made – made. O simple past e o past participle são iguais."
  },
  {
    topics: ["eat-forms"],
    q: "What are the 3 forms of “eat”?",
    options: [
      "eat – ate – eaten",
      "eat – ate – ate",
      "eat – eaten – ate",
      "eat – eated – eaten"
    ],
    answer: "eat – ate – eaten",
    why: "Eat is irregular: eat – ate – eaten. Ate is the simple past; eaten is the past participle.\nEat é irregular: eat – ate – eaten. Ate é o simple past; eaten é o past participle."
  },
  {
    topics: ["watch-see"],
    q: "Which verb do we use for TV shows, series and videos?",
    options: ["watch", "see", "make", "play"],
    answer: "watch",
    why: "WATCH is for things we follow: TV, series, videos (watch Peppa Pig).\nWATCH = assistir algo que a gente acompanha: TV, séries, vídeos (watch Peppa Pig)."
  },

  /* ---------- adverbs: already · just · never · yet · ever ---------- */
  {
    topics: ["adv-yet"],
    q: "Don't spoil the new season! I haven't watched it ______.",
    options: ["already", "just", "never", "yet"],
    answer: "yet",
    why: "YET goes at the end of negative sentences: I haven't watched it yet.\nYET = ainda (não). Fica no fim de frases negativas: I haven't watched it yet."
  },
  {
    topics: ["adv-already"],
    q: "Rafa has ______ played Clash Royale ten times today, so he doesn't want to play it again.",
    options: ["already", "never", "yet", "ever"],
    answer: "already",
    why: "ALREADY goes before the past participle in affirmative sentences: has already played.\nALREADY = já. Fica antes do past participle em frases afirmativas: has already played."
  },
  {
    topics: ["adv-never"],
    q: "My grandma has ______ used Snapchat. She doesn't even know what it is.",
    options: ["already", "just", "never", "yet"],
    answer: "never",
    why: "NEVER goes before the past participle: has never used.\nNEVER = nunca. Fica antes do past participle: has never used."
  },
  {
    topics: ["adv-just"],
    q: "Look, there's still glitter all over the table! My sister has ______ made slime.",
    options: ["just", "never", "yet", "ever"],
    answer: "just",
    why: "JUST means it happened a moment ago. It goes before the past participle: has just made.\nJUST = acabou de. Fica antes do past participle: has just made."
  },
  {
    topics: ["adv-ever"],
    q: "In “Have you ever played Pokémon GO?”, what does “ever” mean?",
    options: ["alguma vez", "nunca", "acabou de", "ainda não"],
    answer: "alguma vez",
    why: "EVER means at any time in your life. We use it in questions, before the past participle: Have you ever played...?\nEVER = alguma vez. Usamos em perguntas, antes do past participle: Have you ever played...?"
  },
  {
    topics: ["adv-yet"],
    q: "Where does “yet” go in a sentence?",
    options: [
      "At the end of negative sentences",
      "Before the past participle in affirmative sentences",
      "Before the past participle in questions",
      "At the beginning of the sentence"
    ],
    answer: "At the end of negative sentences",
    why: "YET goes at the end of negative sentences: We haven't watched it yet.\nYET fica no fim de frases negativas: We haven't watched it yet."
  },
  {
    topics: ["adv-never"],
    q: "Which adverb already has “not” inside it, so we DON'T use haven't with it?",
    options: ["already", "just", "never", "yet"],
    answer: "never",
    why: "NEVER = not ever. That's why we don't say haven't + never: I have never collected stickers.\nNEVER = not ever. Por isso não usamos haven't + never: I have never collected stickers."
  },
  {
    topics: ["adv-already", "adv-just"],
    q: "Where do “already” and “just” go in a sentence?",
    options: [
      "Before the past participle, in affirmative sentences",
      "At the end of negative sentences",
      "At the beginning of the question",
      "After the past participle, always"
    ],
    answer: "Before the past participle, in affirmative sentences",
    why: "ALREADY and JUST go before the past participle, in affirmative sentences: I have already made slime. / She has just eaten.\nALREADY e JUST ficam antes do past participle, em frases afirmativas: I have already made slime. / She has just eaten."
  },
  {
    topics: ["adv-already"],
    q: "What does “already” mean in Portuguese?",
    options: ["já", "ainda não", "nunca", "acabou de"],
    answer: "já",
    why: "ALREADY means it happened before now. (yet = not until now · never = not ever · just = a moment ago)\nALREADY = já. (yet = ainda não · never = nunca · just = acabou de)"
  }
];

const TRUE_FALSE = [

  /* ---------- TRUE statements ---------- */
  {
    topics: ["adv-already"],
    q: "This sentence is correct: “Gabi has already posted her BeReal today.”",
    answer: true,
    why: "True. Gabi = she → HAS + already + past participle (posted).\nVerdadeiro. Gabi = she → HAS + already + past participle (posted): ela já postou."
  },
  {
    topics: ["adv-yet"],
    q: "This sentence is correct: “We haven't downloaded the new update yet.”",
    answer: true,
    why: "True. Negative sentence: haven't + past participle, with YET at the end.\nVerdadeiro. Frase negativa: haven't + past participle, com YET no fim."
  },
  {
    topics: ["adv-never"],
    q: "This sentence is correct: “My dad has never used Instagram.”",
    answer: true,
    why: "True. HAS + never + past participle (used).\nVerdadeiro. HAS + never + past participle (used): meu pai nunca usou."
  },
  {
    topics: ["adv-ever", "watch-see"],
    q: "This question is correct: “Have you ever watched a video on YouTube Kids?”",
    answer: true,
    why: "True. HAVE + you + ever + past participle (watched).\nVerdadeiro. HAVE + you + ever + past participle (watched)."
  },
  {
    topics: ["adv-just", "contraction-s"],
    q: "This sentence is correct: “She's just posted a Reel.”",
    answer: true,
    why: "True. She's = she has. She has just posted = she posted a moment ago.\nVerdadeiro. She's = she has. She has just posted = ela acabou de postar."
  },
  {
    topics: ["tt-they-gelpens"],
    q: "This sentence is correct: “They have collected 20 gel pens.”",
    answer: true,
    why: "True. They → HAVE + past participle (collected).\nVerdadeiro. They → HAVE + past participle (collected)."
  },
  {
    topics: ["pp-third", "forms-make"],
    q: "The past participle is the third form of the verb: make – made – made.",
    answer: true,
    why: "True. The 3rd form of make is made.\nVerdadeiro. A 3ª forma de make é made."
  },
  {
    topics: ["reg-irreg"],
    q: "For regular verbs, the past participle is the same as the simple past: play – played – played.",
    answer: true,
    why: "True. Regular verbs: verb + -ed in both forms.\nVerdadeiro. Verbos regulares: verb + -ed nas duas formas."
  },
  {
    topics: ["reg-irreg"],
    q: "We have to memorize the past participle of irregular verbs.",
    answer: true,
    why: "True. Irregular verbs don't follow a rule.\nVerdadeiro. Verbos irregulares não seguem uma regra: é preciso decorar."
  },
  {
    topics: ["watch-see"],
    q: "We use “watch” for TV, series and videos: watch Peppa Pig.",
    answer: true,
    why: "True. WATCH is for things we follow.\nVerdadeiro. WATCH = assistir algo que a gente acompanha."
  },
  {
    topics: ["when-simple"],
    q: "When the sentence says WHEN (yesterday, last week), we use the simple past.",
    answer: true,
    why: "True. It says when → simple past: I ate Ioiô Crem yesterday.\nVerdadeiro. Disse quando → simple past: I ate Ioiô Crem yesterday."
  },
  {
    topics: ["when-perfect"],
    q: "When the sentence doesn't say when, only that something happened (an experience), we use the present perfect.",
    answer: true,
    why: "True. It doesn't say when → present perfect: I have eaten Ioiô Crem.\nVerdadeiro. Não disse quando → present perfect: I have eaten Ioiô Crem."
  },
  {
    topics: ["formula-aff"],
    q: "The past participle can't work alone: it needs have / has.",
    answer: true,
    why: "True. Present perfect = have / has + past participle.\nVerdadeiro. Present perfect = have / has + past participle."
  },
  {
    topics: ["contraction-s"],
    q: "In the present perfect, “I've” = “I have” and “she's” = “she has”.",
    answer: true,
    why: "True. I have → I've, she has → she's.\nVerdadeiro. I have → I've, she has → she's."
  },
  {
    topics: ["contraction-neg"],
    q: "“Hasn't” = “has not”.",
    answer: true,
    why: "True. hasn't = has not · haven't = have not.\nVerdadeiro. hasn't = has not · haven't = have not."
  },
  {
    topics: ["tt-sister-angrybirds"],
    q: "This question is correct: “Has your sister ever played Angry Birds?”",
    answer: true,
    why: "True. Your sister = she → HAS + ever + past participle (played).\nVerdadeiro. Your sister = she → HAS + ever + past participle (played)."
  },
  {
    topics: ["adv-ever"],
    q: "We use “ever” in questions, before the past participle: Have you ever...?",
    answer: true,
    why: "True. EVER goes in questions.\nVerdadeiro. EVER = alguma vez, e aparece em perguntas."
  },
  {
    topics: ["watch-see"],
    q: "We can use “see” to talk about movies: see Frozen.",
    answer: true,
    why: "True. We use SEE for movies too (see Frozen).\nVerdadeiro. SEE = ver, e também usamos para filmes (see Frozen)."
  },
  {
    topics: ["tt-larissa-ladybug"],
    q: "This sentence is correct: “Larissa hasn't watched Ladybug & Cat Noir.”",
    answer: true,
    why: "True. Larissa = she → HASN'T + past participle (watched).\nVerdadeiro. Larissa = she → HASN'T + past participle (watched)."
  },
  {
    topics: ["tt-friends-slime"],
    q: "This question is correct: “Have your friends ever made slime?”",
    answer: true,
    why: "True. Your friends = they → HAVE + ever + past participle (made).\nVerdadeiro. Your friends = they → HAVE + ever + past participle (made)."
  },
  {
    topics: ["eat-forms", "contraction-s"],
    q: "This sentence is correct: “I've eaten Ioiô Crem.”",
    answer: true,
    why: "True. I've = I have, and eaten is the past participle of eat.\nVerdadeiro. I've = I have, e eaten é o past participle de eat."
  },
  {
    topics: ["adv-just"],
    q: "This sentence is correct: “The teacher has just arrived at school.”",
    answer: true,
    why: "True. The teacher = he / she → HAS + just + past participle (arrived).\nVerdadeiro. The teacher = he / she → HAS + just + past participle (arrived): o professor acabou de chegar."
  },

  /* ---------- FALSE statements ---------- */
  {
    topics: ["ff-cousins-stickers"],
    q: "This sentence is correct: “My cousins has collected World Cup stickers.”",
    answer: false,
    why: "False. My cousins = they → HAVE, not has.\nFalso. My cousins = they → HAVE, e não has."
  },
  {
    topics: ["adv-never"],
    q: "This sentence is correct: “I haven't never played Free Fire.”",
    answer: false,
    why: "False. Never already has “not” inside (not ever): I have never played Free Fire.\nFalso. Never já tem o “not” dentro (not ever): I have never played Free Fire."
  },
  {
    topics: ["adv-yet"],
    q: "In negative sentences, “yet” goes at the beginning of the sentence.",
    answer: false,
    why: "False. YET goes at the end of negative sentences: We haven't watched it yet.\nFalso. YET fica no fim de frases negativas: We haven't watched it yet."
  },
  {
    topics: ["adv-ever"],
    q: "We use “ever” in affirmative sentences: “I have ever played Beyblade.”",
    answer: false,
    why: "False. EVER is used in questions: Have you ever played Beyblade?\nFalso. EVER (alguma vez) é usado em perguntas: Have you ever played Beyblade?"
  },
  {
    topics: ["adv-just"],
    q: "“Just” means “nunca”.",
    answer: false,
    why: "False. JUST means a moment ago. (never = nunca)\nFalso. JUST = acabou de. (nunca = never)"
  },
  {
    topics: ["adv-already"],
    q: "“Already” means “ainda não”.",
    answer: false,
    why: "False. ALREADY means before now. (yet = ainda não)\nFalso. ALREADY = já. (ainda não = yet)"
  },
  {
    topics: ["see-forms"],
    q: "The past participle of “see” is “saw”.",
    answer: false,
    why: "False. See – saw – seen. Saw is the simple past; the past participle is SEEN.\nFalso. See – saw – seen. Saw é o simple past; o past participle é SEEN."
  },
  {
    topics: ["eat-forms"],
    q: "The past participle of “eat” is “ate”.",
    answer: false,
    why: "False. Eat – ate – eaten. Ate is the simple past; the past participle is EATEN.\nFalso. Eat – ate – eaten. Ate é o simple past; o past participle é EATEN."
  },
  {
    topics: ["reg-irreg"],
    q: "For regular verbs, the past participle is verb + -ing (play → playing).",
    answer: false,
    why: "False. Regular verbs: verb + -ed (play → played).\nFalso. Verbos regulares: verb + -ed (play → played)."
  },
  {
    topics: ["watch-see"],
    q: "We can't use “watch” for TV shows or videos: we only use “see”.",
    answer: false,
    why: "False. For TV, series and videos we use WATCH (watch Peppa Pig).\nFalso. Para TV, séries e vídeos usamos WATCH (watch Peppa Pig)."
  },
  {
    topics: ["when-simple"],
    q: "If the sentence says WHEN (yesterday, last week), we use the present perfect.",
    answer: false,
    why: "False. It says when → simple past. The present perfect is for when we don't say when.\nFalso. Disse quando → simple past. O present perfect é para quando NÃO dizemos quando."
  },
  {
    topics: ["eat-forms"],
    q: "This sentence is correct: “I have ate Ioiô Crem.”",
    answer: false,
    why: "False. After have we use the past participle: I have EATEN Ioiô Crem.\nFalso. Depois de have usamos o past participle: I have EATEN Ioiô Crem."
  },
  {
    topics: ["ff-he-reel"],
    q: "This sentence is correct: “He haven't posted a Reel.”",
    answer: false,
    why: "False. He → HASN'T: He hasn't posted a Reel.\nFalso. He → HASN'T: He hasn't posted a Reel."
  },
  {
    topics: ["ff-did-ever-beyblade"],
    q: "This question is correct: “Did you ever played Beyblade?”",
    answer: false,
    why: "False. A present perfect question starts with HAVE: Have you ever played Beyblade?\nFalso. No present perfect a pergunta começa com HAVE: Have you ever played Beyblade?"
  },
  {
    topics: ["contraction-s"],
    q: "In “She's played Roblox”, the 's means “is”.",
    answer: false,
    why: "False. She's played = She HAS played. After 's comes a past participle.\nFalso. She's played = She HAS played. Depois do 's vem um past participle."
  },
  {
    topics: ["contraction-neg"],
    q: "“Haven't” = “has not”.",
    answer: false,
    why: "False. haven't = have not · hasn't = has not.\nFalso. haven't = have not · hasn't = has not."
  },
  {
    topics: ["adv-never", "see-forms"],
    q: "This sentence is correct: “My mom has seen never Frozen.”",
    answer: false,
    why: "False. Never goes before the past participle: My mom has never seen Frozen.\nFalso. Never fica antes do past participle: My mom has never seen Frozen."
  },
  {
    topics: ["ff-have-she-slime"],
    q: "This question is correct: “Have she ever made slime?”",
    answer: false,
    why: "False. She → HAS: Has she ever made slime?\nFalso. She → HAS: Has she ever made slime?"
  },
  {
    topics: ["ff-they-has-game"],
    q: "This sentence is correct: “They has downloaded the new game.”",
    answer: false,
    why: "False. They → HAVE: They have downloaded the new game.\nFalso. They → HAVE: They have downloaded the new game."
  },
  {
    topics: ["when-simple", "ff-peppa-lastweek"],
    q: "This sentence is correct: “We have watched Peppa Pig last week.”",
    answer: false,
    why: "False. “Last week” says when → simple past: We watched Peppa Pig last week.\nFalso. “Last week” diz quando → simple past: We watched Peppa Pig last week."
  },
  {
    topics: ["ff-ever-play-amongus"],
    q: "This question is correct: “Have you ever play Among Us?”",
    answer: false,
    why: "False. After have we use the past participle: Have you ever PLAYED Among Us?\nFalso. Depois de have usamos o past participle: Have you ever PLAYED Among Us?"
  },
  {
    topics: ["ff-we-has-test"],
    q: "This sentence is correct: “We has just finished the test.”",
    answer: false,
    why: "False. We → HAVE: We have just finished the test.\nFalso. We → HAVE: We have just finished the test."
  }
];
