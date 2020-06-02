function myFunction() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById(
    "question"
  ).innerText = `How much is ${num1} times ${num2}`;
  var msg = document.getElementById("answer");
  var answer = document.getElementById("answerBox");
  document.getElementById("submit").addEventListener("click", () => {
    if (answer.value == num1 * num2) {
      console.log("success");

      var correctAnswer = (Math.floor(Math.random() * 10) + 1) % 4;
      switch (correctAnswer) {
        case 0:
          msg.innerText = "Very Good!";
          break;
        case 1:
          msg.innerText = "Excellent!";
          break;
        case 2:
          msg.innerText = "Nice work!";
          break;
        case 4:
          msg.innerText = "Keep up the good work!";
          break;
      }
      //another function for reload
      reloadPage();
    } else {
      console.log("Wrong");

      var wrongAnswer = (Math.floor(Math.random() * 10) + 1) % 4;
      switch (wrongAnswer) {
        case 0:
          msg.innerText = "No.Please try again";
          break;
        case 1:
          msg.innerText = "Wrong.Try once more";
          break;
        case 2:
          msg.innerText = "Don't give up!";
          break;
        case 4:
          msg.innerText = "No.Keep trying!";
          break;
      }
    }
  });
}

function reloadPage() {
  setTimeout(function () {
    window.location.reload(1);
  }, 2000);
}
