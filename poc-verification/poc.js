
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
var pptext;
function floorgangconfirmed(ppsize) {
      questionContent.hidden = true;
  console.log("ppsize is " + ppsize);
        if(ppsize == "big") {
          pptext = "Congratulations,you have passed the PoC test! Please contact our journalists on Discord with your Test ID."
        }
        if(ppsize == "smol") {
          pptext = "You failed. Have any questions? Please contact our journalists on Discord with your Test ID."
        }
  console.log(pptext);
        resultEl.innerText =
          pptext + " \nThis test took you: 50 minutes"
          //Math.round((Date.now() - startDate) / (60 * 1000)) +
          //" minutes";
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
  
}
