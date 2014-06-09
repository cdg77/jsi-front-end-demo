var parent = document.body;

var nextArt = document.createElement("article");

var oldArticles = document.getElementsByTagName("article");
console.log(oldArticles[0]);

parent.insertBefore(nextArt, oldArticles[0]);
console.log(oldArticles);

var newTitle = document.createElement("h1");

newTitle.textContent = "My Second Blog Post";

var newPara = document.createElement("p");

newPara.textContent = "This is a blog post about really " +
  "awesome stuff I've done in Javascript";

oldArticles[0].appendChild(newTitle);

oldArticles[0].appendChild(newPara);

var oldTitle = document.createElement("h1");

oldTitle.textContent = "My First Blog Post";

oldArticles[1].insertBefore(oldTitle, oldArticles[1].childNodes[0]);
