var pics = [
  "/dist/images/amy-shamblen-qdPnQuGeuwU-unsplash.jpg",
  "/dist/images/annie-spratt-WBpr_yH0Frg-unsplash.jpg",
  "/dist/images/leonardo-wong-7pGehyH7o64-unsplash.jpg",
  "/dist/images/marivi-pazos-4kX1uoAAohY-unsplash.jpg",
  "/dist/images/rikonavt-oEWdQsbRVZk-unsplash.jpg",
];
var i = 0;

function previous() {
  i = i - 1;

  if (i < 0) {
    return (i = pics.length-1);
  } else {
    return document.querySelector("img").setAttribute("src", pics[i]);
  }
}
function next() {
  i = i + 1;
  if (i < pics.length) {
    return document.querySelector("img").setAttribute("src", pics[i]);
  } else {
    return (i = 4);
  }
}
