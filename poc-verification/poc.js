
  const testID = Math.floor(Math.random() * 9999999);
  document.getElementById("testNumber").innerText = testID;

  const questionContent = document.getElementById("question-content");
  const questionEl = document.getElementById("question");
  const positionEl = document.getElementById("position");
  const comboEl = document.getElementById("combo");
  const resultContent = document.getElementById("result-content");
  const resultEl = document.getElementById("result");
  const questions = [
    "Are you floor gang?"
  ];
  let index = 0;
  let score = 0;
  let combo = 0;
  let startDate = Date.now();
  let last = Date.now();


  
  async function result() {
    const res = await fetch(
      "/quizz-result/" + testID
    );
    if (!res.ok) throw new Error("It's complicated");
    resultEl.innerText = res.text;
    resultContent.style.visibility = "";
  }

function floorgangconfirmed(ppsize) {
      //if (false) {
      questionContent.hidden = true;

        if(ppsize = "big") {
          pptext = "Congratulations,you have passed the PoC test! Please contact our journalists on Discord with your Test ID."
        }
        if(ppsize = "smol") {
          pptext = "You failed. Have any questions? Please contact our journalists on Discord with your Test ID."
        }
        resultEl.innerText =
          pptext + " \nThis test took you: " +
          Math.round((Date.now() - startDate) / (60 * 1000)) +
          " minutes";
        resultContent.style.visibility = "";
        questionEl.innerText = questions[index];
    positionEl.innerText = index + 1 + "/" + questions.length;
    questionContent.style.animationName = "none";
    /*
    let animationLength = 1 - (combo/questions.length);
    questionContent.style.animationDuration = animationLength > 0.3 ? animationLength + "s" : "0s";*/
    let animationLength = 0;
    questionContent.offsetHeight;
    questionContent.style.animationName = "";
    last = Date.now();
      });
   
}
