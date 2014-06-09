
var addAnArticle = function (title, content) {
  var parent = document.body;
  var nextArt = document.createElement("article");
  var articleList = document.getElementsByTagName("article");
  parent.insertBefore(nextArt, articleList[0]);
  var newTitle = document.createElement("h1");
  newTitle.textContent = title;
  var newPara = document.createElement("p");
  newPara.textContent = content;
  articleList[0].appendChild(newTitle);
  articleList[0].appendChild(newPara);
};

var addAnOldTitle = function (title, indexOfOldArticle) {
  var articleList = document.getElementsByTagName("article");
  var newTitle = document.createElement("h1");
  newTitle.textContent = title;
  articleList[indexOfOldArticle].insertBefore(newTitle,
    articleList[indexOfOldArticle].childNodes[0]);
};

var toggleArticle = function (art) {
  if (art.childNodes[1].style.display === "none") {
    art.childNodes[1].style.display = "block";
  }
  else {
    art.childNodes[1].style.display = "none";
  }
};

var hideArticle = function () {
  var articleList = document.getElementsByTagName("article");
  var articleArray = Array.prototype.slice.call(articleList);
  console.log(articleArray);
  articleArray.forEach(function (article, index) {
    article.childNodes[0].addEventListener("click", function (event) {
      toggleArticle(article);
    });
  }, this);
};

addAnArticle("My Second Blog Post", "This is the second blog post that I've ever written");
addAnOldTitle("My Very First Blog Post", 1);
hideArticle();

