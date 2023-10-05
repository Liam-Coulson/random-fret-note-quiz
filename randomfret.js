const questionTextNode = document.getElementById("question");
const answerTextNode = document.getElementById("answer");

document.addEventListener("keydown", key => {
    if (key.code == "Enter") {
      getRandomFret();
      if (answerTextNode.style.color != "white") {
        toggleAnswer();
      }
    } else if (key.code == "Space") {
        toggleAnswer();
    }
  })

let noteDict = {
    0: "C",
    1: "C#",
    2: "D",
    3: "D#",
    4: "E",
    5: "F",
    6: "F#",
    7: "G",
    8: "G#",
    9: "A",
    10: "A#",
    11: "B"
}

let stringDict = {
    "D": 2,
    "E": 4,
    "G": 7,
    "A": 9
}

let noteOfStringNumber = {
    1: "E",
    2: "A",
    3: "D",
    4: "G"
}

function getRandomFret() {
    let string = Math.floor(Math.random()*4 +1);
    let fret = Math.floor(Math.random()*20 +1);

    console.log(string, fret);

    questionTextNode.textContent = `Fret ${fret} on string ${noteOfStringNumber[string]}`

    let noteName = noteDict[(stringDict[noteOfStringNumber[string]] + fret) % 12];

    answerTextNode.textContent = `The note was ${noteName}`;
}

function toggleAnswer() {
    if (answerTextNode.style.color == "white" || answerTextNode.style.color == "") {
        answerTextNode.style.color = "blue";
    } else {
        answerTextNode.style.color = "white";
    }
}

getRandomFret();