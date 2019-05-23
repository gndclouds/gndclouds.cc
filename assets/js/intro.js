var words = ["IDEO", "Intel", "Udacity", "IFTTT", "Fjord"]
var w = 0
var interval

var container = document.querySelector(".gretting")
var word = container.querySelector("span")

container.addEventListener("mouseover", function() {
  interval = setInterval(function() {
    word.textContent = words[w = (w + 1) % words.length]
  }, 400)
});
container.addEventListener("mouseout", () => clearInterval(interval))


// https://stackoverflow.com/questions/42103959/cycle-through-words-on-hover-with-background
