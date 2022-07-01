const songName = document.getElementById("tittle");
const songArtist = document.getElementById("artist");
const songAlbum = document.getElementById("album");
var favBtn = document.getElementById("fav");
var favBtnImg = document.getElementById("fav-img");
var addBtn = document.getElementById("add");
var addBtnImg = document.getElementById("add-img");
var shareBtn = document.getElementById("share");
var shareBtnImg = document.getElementById("share-img");

//listener-list

//prettier-ignore
var song1 = {
    name : 'ehhe',
    artist : "ehhe ca si",
    album : "ulala"
}
var iconSet = {
  fav1: "favour-icon.svg",
  fav2: "pp-fav.svg",
  add1: "playlist-add.svg",
  add2: "pp-add.svg",
  share1: "share-icon.svg",
  share2: "pp-share.svg",
};
function btnChange() {
  var getAtName = this.getAttribute("id");
  if (
    window[getAtName + "Btn" + "Img"].getAttribute("src") ==
    iconSet[getAtName + 1]
  ) {
    window[getAtName + "Btn" + "Img"].setAttribute(
      "src",
      iconSet[getAtName + 2]
    );
  } else {
    window[getAtName + "Btn" + "Img"].setAttribute(
      "src",
      iconSet[getAtName + 1]
    );
  }
}
//---LISTENER-----//
favBtn.addEventListener("click", btnChange);
addBtn.addEventListener("click", btnChange);
shareBtn.addEventListener("click", btnChange);

//----------------//
