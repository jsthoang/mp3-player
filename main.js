var songNameView = document.getElementById("tittle");
var songArtistView = document.getElementById("artist");
var songAlbumView = document.getElementById("album");
var songCover = document.getElementById("cover");
var favBtn = document.getElementById("fav");
var favBtnImg = document.getElementById("fav-img");
var addBtn = document.getElementById("add");
var addBtnImg = document.getElementById("add-img");
var shareBtn = document.getElementById("share");
var shareBtnImg = document.getElementById("share-img");

var playBtn = document.getElementById("play");
var playBtnImg = document.getElementById("play-img");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
//tittle-section
//audio
const song = document.getElementById("song");
//bien phu
var demId = 1;
var tongSoBaiHat = 3;
//prettier-ignore
var iconSet = {
  fav1: "favour-icon.svg",
  fav2: "pp-fav.svg",
  add1: "playlist-add.svg",
  add2: "pp-add.svg",
  share1: "share-icon.svg",
  share2: "pp-share.svg",
  //---play and next
  play1: "pause.svg",
  play2: "play.svg",
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
//------object construct song list-------
//prettier-ignore
function songProps(Source, Name, Artist, Album, Cover, Length, RealLength) {
this.Source = Source;
  this.Name = Name;
  this.Artist = Artist;
  this.Album = Album;
  this.Cover =Cover;
  this.Length = Length;
  this.RealLength = RealLength;
}
var song1 = new songProps(
  "smokin.mp3",
  "Smoking out the window",
  "Bruno Mars",
  "Silk Sonic",
  "smokin-cover.jpg",
  "3:21",
  201
);
var song2 = new songProps(
  "coem.mp3",
  "Có em",
  "Madihu",
  "LowG",
  "coem-cover.jpg",
  "3:45",
  225
);
var song3 = new songProps(
  "peaches.mp3",
  "Peaches",
  "Justin Biebier",
  "Daniel Caesar, Giveon",
  "peaches-cover.png",
  "3:17",
  197
);
//--------------------
function playPause() {
  if (playBtnImg.getAttribute("src") == iconSet.play1) {
    song.play();
    song.voume = 0.8;
  } else {
    song.pause();
  }
}
function nextSong() {
  song.pause();
  if (demId < tongSoBaiHat) {
    ++demId;
  } else {
    demId = 1;
  }
  console.log(demId);
  song.setAttribute("src", window["song" + demId].Source);
  songNameView.innerHTML = window["song" + demId].Name;
  songAlbumView.innerHTML = window["song" + demId].Album;
  songArtistView.innerHTML = window["song" + demId].Artist;
  songCover.setAttribute("src", window["song" + demId].Cover);
  song.play();
}
function prevSong() {
  song.pause();
  if (demId > 1) {
    --demId;
  } else {
    demId = tongSoBaiHat;
  }
  console.log(demId);
  song.setAttribute("src", window["song" + demId].Source);
  songNameView.innerHTML = window["song" + demId].Name;
  songAlbumView.innerHTML = window["song" + demId].Album;
  songArtistView.innerHTML = window["song" + demId].Artist;
  songCover.setAttribute("src", window["song" + demId].Cover);
  song.play();
}
// chay cac ham khac
songNameView.innerHTML = window["song" + demId].Name;
songAlbumView.innerHTML = window["song" + demId].Album;
songArtistView.innerHTML = window["song" + demId].Artist;
songCover.setAttribute("src", window["song" + demId].Cover);
//---LISTENER-----//

favBtn.addEventListener("click", btnChange);
addBtn.addEventListener("click", btnChange);
shareBtn.addEventListener("click", btnChange);
playBtn.addEventListener("click", btnChange);
playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

//----------------//
