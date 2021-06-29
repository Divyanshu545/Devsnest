let scr = 0;
let i = 0;

class Questions {
  constructor(ques, option1, option2, option3, option4, corrAns) {
    this.ques = ques;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.corrAns = corrAns;
  }

  showQues() {
    document.getElementById("question").innerHTML = this.ques;
    document.getElementById("option1-statement").innerHTML = this.option1;
    document.getElementById("option2-statement").innerHTML = this.option2;
    document.getElementById("option3-statement").innerHTML = this.option3;
    document.getElementById("option4-statement").innerHTML = this.option4;
  }

  showCorrAns() {
    return `${this.corrAns}`;
  }
}

let q1 = new Questions(
  "1. President Of INDIA?",
  "Manmohan Singh",
  "APJ Abdul Kalam",
  "Narendra Modi",
  "Ramnath Kovind",
  "option4"
);

let q2 = new Questions(
  "2. Which reagent is Grignard's Reagent?",
  "COOH",
  "RClK",
  "RmgX",
  "RNa",
  "option3"
);

let q3 = new Questions(
  "3. What is the full form of GDP?",
  "Grocery Development Product",
  "Gross Development Product",
  "Gross Digital Project",
  "Gross Developed Process",
  "option2"
);

let q4 = new Questions(
  "4. WHO stands for ?",
  "World Health Organisation",
  "World Heavy Opaque",
  "Worrying and Health Organisation",
  "Wonder Health Organisation",
  "option1"
);

let q5 = new Questions(
  "5. Who is the current CM of UP? ",
  "Akhilesh Yadav",
  "Rahul Gandhi",
  "Yogi Adityanath",
  "Nitin Gadkari",
  "option3"
);

let arrQ = [q1, q2, q3, q4, q5];

arrQ[i].showQues();

document.querySelectorAll("#option1, #option2, #option3, #option4").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.id === arrQ[i].showCorrAns()) {
      scr++;
      i++;
      document.querySelector(".Cns").style.display = "block";
      setTimeout(() => {
        document.querySelector(".Cns").style.display = "none";
      }, 500);
      document.getElementById("score").innerHTML = scr;
      if (!arrQ[i]) {
        setTimeout(() => {
          document.querySelector(".End").style.display = "block";
        }, 600);
      } else {
        arrQ[i].showQues();
      }
    } else {
      console.log(false);
      document.querySelector(".Wns").style.display = "block";
      setTimeout(() => {
        document.querySelector(".Wns").style.display = "none";
      }, 500);
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});