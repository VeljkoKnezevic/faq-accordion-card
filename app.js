const questions = document.querySelectorAll(".main__question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const text = question.children[0].children[0];
    const image = question.children[0].children[1];
    const answer = question.children[1];

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      text.classList.add("main__question__text--bold");
      image.style.transform = "rotate(180deg)";
    } else {
      answer.style.display = "none";
      text.classList.remove("main__question__text--bold");
      image.style.transform = "rotate(360deg)";
    }
  });
});
