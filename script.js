function showjuggad(){
    //getting user input
    const inputText=document.getElementById("probleminput").value.toLowerCase();
    const tips=[
            "Use your phone flashlight + jug of water = instant lamp, desi jugaad level: expert!",
    "Restart it—90% of Indian tech problems solved with this trick."
    ];
    let ans="";
      if(inputText.includes("power") || inputText.includes("night")) {
    answer = tips[0];
  } else if(inputText.includes("slow") || inputText.includes("laptop")) {
    answer = tips[1];
  }
  else{
    ans=tips[Math.floor(Math.random()*tips.length)];
  }
  //show ans in output div
  document.getElementById("jugadanswer").innerText=answer;
}
function codejuggad(){
    //getting user input
    const code=document.getElementById("codeinput").value.toLowerCase();
     const excuse=[
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
     //random excuse
       const randomExcuse = excuse[Math.floor(Math.random() * excuse.length)]
       //show ans in output div
  document.getElementById("codeanswer").innerText=randomExcuse;
}
function examjuggad(){
    //getting user input
    const exam=document.getElementById("examinput").value.toLowerCase();
   const randomm=[
    "Stay calm and study smart!" 
   ];
   let tip="";
   if(inputText.includes("physics")){
     tip="Watch a 2x speed YouTube crash course + pray hard!";
   }
   else if(inputText.includes("viva")){
     tip = "Repeat whatever the professor just said, with confidence.";
   }
   else if(inputText.includes("math")){
    tip = "Practice formulas and solve previous year questions.";
   }
    else if(inputText.includes("chemistry")){
    tip = "Practice equations and solve previous year questions.";
   }
   else if(inputText.includes("last minute") || inputText.includes("study")) {
    tip = "Focus on key points and get some rest before the exam.";
   }
 else{
    tip=randomm[Math.floor(Math.random()*randomm.length)];
  }
    //show ans in output div
  document.getElementById("examanswer").innerText=tip;
}
function foodjuggad(){
    //getting user input
    const mood=document.getElementById("foodinput").value.toLowerCase();
    let food=[
      "Try some chai and biscuits!"
    ];
    //conditions
    if (mood.includes("sad")) {
    food = "Garam chai + samosa, the ultimate comfort combo.";
  } else if (mood.includes("excited")) {
    food = "Pav bhaji with extra butter—celebrate properly!";
  } else if (mood.includes("stressed")) {
    food = "Maggi with a side of overthinking.";
  } else if (mood.includes("lazy")) {
    food = "Cold lassi and pakoras, perfect for a chill day.";
  }
  //random alloment
  else{
food=random[Math.floor(Math.random()*food.length)];
  }
      //show ans in output div
  document.getElementById("foodanswer").innerText=food;
}
function startjuggad(){
    //getting user input
    const up=document.getElementById("startinput").value.toLowerCase();
    let stup="";
  //show ans in output div
  document.getElementById("startanswer").innerText=stup;
}