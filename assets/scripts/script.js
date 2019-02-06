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

(function () {
  var main = document.querySelectorAll('.project__outer');
  for (var i = 0; i < main.length; i++) {
    var block = main[i];
    block.addEventListener('click', function (e) {
      var lol = e.currentTarget.querySelector('.projects__completition');
      if(lol.style.display==='none'){
        lol.style.display="flex"
      } else{
        lol.style.display = "none"
      }
    })
  }
})();


(function () {
  var main = document.querySelectorAll('.list__item');
  for (var i = 0; i < main.length; i++) {
    var all = main[i];
    all.addEventListener('click', function (e) {
      var remove = document.querySelector('.list__item-active')
      remove.classList.remove('list__item-active')
      e.currentTarget.classList.add('list__item-active')
    })
  }
})();

