const elements = {
  year: document.querySelector("#current-year"),
};

elements.year.textContent = new Date().getFullYear();
