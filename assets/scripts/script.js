(function () {
  var currentTab = 0;
  var nextBtn = document.getElementById("message")
  var currBtn = document.getElementById("active")
  nextBtn.addEventListener("click", function () { nextPrev(1) })
  currBtn.addEventListener("click", function () { nextPrev(0) })

  function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "flex";
  }

  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = n;
    if (currentTab >= x.length) {
      return false;
    }
    showTab(currentTab);
  }
  showTab(currentTab);
}());

(function () {
  var btns = document.getElementsByClassName("btn__menu");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
})();
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}