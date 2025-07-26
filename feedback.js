document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  const thankYouMsg = document.getElementById("thankYouMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const comment = form.comment.value.trim();

    if (name && comment) {
      thankYouMsg.textContent = `Thank you, ${name}, for your feedback!`;
      form.reset();
    }
  });
});
