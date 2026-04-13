class WordList {
  constructor(words) {
    this.words = words;
  }

  sortAlpha() {
    this.words.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  }

  sortReverse() {
    this.words.sort(function(a, b) {
      return b.toLowerCase().localeCompare(a.toLowerCase());
    });
  }

  sortRandom() {
    for (let i = this.words.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.words[i];
      this.words[i] = this.words[j];
      this.words[j] = temp;
    }
  }

  toString() {
    return this.words.join(" ");
  }
}

function sortWords(order) {
  let input = document.getElementById("wordInput");
  let message = document.getElementById("message");
  let value = input.value.trim();

  if (value === "") {
    message.innerHTML = "The word list box is empty. You must enter words in it.";
    return;
  }

  let words = value.split(/\s+/);

  let valid = true;
  for (let i = 0; i < words.length; i++) {
    if (!/^[a-zA-Z]+$/.test(words[i])) {
      valid = false;
      break;
    }
  }

  if (!valid) {
    message.innerHTML = "The input is invalid. You must enter valid words in the word list box.";
    return;
  }

  let list = new WordList(words);

  if (order === "alpha") {
    list.sortAlpha();
  } else if (order === "reverse") {
    list.sortReverse();
  } else if (order === "random") {
    list.sortRandom();
  }

  input.value = list.toString();
  message.innerHTML = "";
}
