document.addEventListener("alpine:initializing", () => {
  Alpine.directive(
    "markdown",
    (el, { expression }, { effect, evaluateLater }) => {
      let getHTML = evaluateLater(expression);

      effect(() => {
        getHTML((input) => {
          if (input) {
            el.innerHTML = marked.parse(input);
          }
          else {
            el.innerHTML = input;
          }
        });
      });
    }
  );
});
