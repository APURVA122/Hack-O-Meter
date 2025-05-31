
1. Jugaad-O-Meter
Placeholder: "e.g., My laptop is slow, Internet keeps disconnecting"

2. Code Excuse Generator
Placeholder: "e.g., Why is my code not working?, I’m late with the project"

3. Mood Food Recommender
Placeholder: "e.g., Feeling stressed, I’m happy, Feeling lazy"

4. Exam Survival Tips
Placeholder: "e.g., I have math exam tomorrow, Tips for last-minute study"

5. Startup Idea Generator
Placeholder: "e.g., Tech startup, Eco-friendly business ideas"

🧠 1. Jugaad-o-Meter
Give random desi life hacks for daily tech or life problems:

Input: “No power at night”
Output: “Use your phone flashlight + jug of water = instant lamp, desi jugaad level: expert!”

Input: “Laptop too slow”
Output: “Restart it—90% of Indian tech problems solved with this trick.”

🧹 2. Code Debug Excuse Generator
Fun excuses when your code isn’t working:

“It worked on my machine, boss!”

“Actually, that bug is an undocumented feature.”

“Blame the compiler or the internet gods.”
“It works perfectly on my machine — must be a hardware issue!”

“That bug? Nah, it’s a secret feature in disguise.”

“Blame the compiler, or maybe the internet gods are having a bad day.”

“Works fine in theory… maybe not so much in practice!”

“I swear it was working before the last coffee break.”

“It’s not a bug, it’s a surprise waiting to happen.”

“The code’s fine — it’s your computer playing tricks on you.”

“Let’s call it an unplanned innovation.”
“It worked yaar, your system hi slow hai.”

“Boss, bug nahi, feature hai!”

“Google bhi confuse hai, samjha nahi.”

“Last minute changes ka asar hai.”

“Lagta hai code ne chhutti le li.”

“Compile karte karte thak gaya hoga.”

“Cache clear kar, sab theek ho jayega.”

“Server pe mood off tha aaj.”

“Itna toh har coder ke saath hota hai.”

“Problem nahi, innovation hai bro!”

“Works yesterday > Today ka drama”

“Error 404 > Patience not found”

📚 3. Exam Survival Kit Web App
Select your subject or exam type, get survival tips:

Input: “Physics exam tomorrow”
Output: “Watch a 2x speed YouTube crash course + pray hard!”

Input: “Internal viva?”
Output: “Repeat whatever the professor just said, with confidence.”

Bonus: Display a relatable study meme with each tip.

🍽️ 4. Desi Food Recommender (Mood-Based)
Pick your mood, get a perfect desi comfort food:

Sad → “Garam chai + samosa, the ultimate comfort combo.”

Excited → “Pav bhaji with extra butter—celebrate properly!”

Stressed → “Maggi with a side of overthinking.”

💡 5. Startup Idea Generator
Get quirky startup ideas for fun or inspiration:

“Swiggy for Pandits—order pooja items on-demand.”

“AI matchmaker based on zodiac compatibility.”

“Uber for lost pens in classrooms—find your missing stationery fast!”




function showjuggad() {
  const tips = [
    "Use your phone flashlight + jug of water = instant lamp, desi jugaad level: expert!",
    "Restart it—90% of Indian tech problems solved with this trick."
  ];

  const input = document.getElementById("probleminput").value.toLowerCase();
  let response = "Here's a desi jugaad for you!";

  if (input.includes("power") || input.includes("night")) {
    response = tips[0];
  } else if (input.includes("slow") || input.includes("laptop")) {
    response = tips[1];
  } else {
    response = tips[Math.floor(Math.random() * tips.length)];
  }

  document.getElementById("jugadanswer").innerText = response;
}

function codejuggad() {
  const excuses = [
    "It worked on my machine, boss!",
    "Actually, that bug is an undocumented feature.",
    "Blame the compiler or the internet gods.",
    "It works perfectly on my machine — must be a hardware issue!",
    "That bug? Nah, it’s a secret feature in disguise.",
    "Google bhi confuse hai, samjha nahi.",
    "Cache clear kar, sab theek ho jayega.",
    "Server pe mood off tha aaj.",
    "Lagta hai code ne chhutti le li.",
    "Last minute changes ka asar hai.",
    "Problem nahi, innovation hai bro!"
  ];

  // You could optionally use input here or just random excuse always
  // const input = document.getElementById("codeinput").value.toLowerCase();

  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  document.getElementById("codeanswer").innerText = randomExcuse;
}

function examjuggad() {
  const input = document.getElementById("examinput").value.toLowerCase();
  let tip = "Stay calm and study smart!";

  if (input.includes("physics")) {
    tip = "Watch a 2x speed YouTube crash course + pray hard!";
  } else if (input.includes("viva")) {
    tip = "Repeat whatever the professor just said, with confidence.";
  } else if (input.includes("math")) {
    tip = "Practice formulas and solve previous year questions.";
  } else if (input.includes("last minute") || input.includes("study")) {
    tip = "Focus on key points and get some rest before the exam.";
  }

  document.getElementById("examanswer").innerText = tip;
}

function foodjuggad() {
  const mood = document.getElementById("foodinput").value.toLowerCase();
  let food = "Try some chai and biscuits!";

  if (mood.includes("sad")) {
    food = "Garam chai + samosa, the ultimate comfort combo.";
  } else if (mood.includes("excited")) {
    food = "Pav bhaji with extra butter—celebrate properly!";
  } else if (mood.includes("stressed")) {
    food = "Maggi with a side of overthinking.";
  } else if (mood.includes("lazy")) {
    food = "Cold lassi and pakoras, perfect for a chill day.";
  }

  document.getElementById("foodanswer").innerText = food;
}

function startjuggad() {
  const ideas = [
    "Swiggy for Pandits—order pooja items on-demand.",
    "AI matchmaker based on zodiac compatibility.",
    "Uber for lost pens in classrooms—find your missing stationery fast!"
  ];

  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  document.getElementById("startanswer").innerText = randomIdea;
}

