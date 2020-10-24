//html elements
var music = new Audio();
var actorname = document.getElementById("name");
var songName = document.getElementById("music-name");
var wrapper = document.getElementById("wrapper");



var musictime = document.getElementById("time");

var musics = [
  {
    "name":"Ahmet Kaya",
    "music-name":"Amenna",
    "src":"https://github.com/tThe61/musics/blob/main/Amenna?raw=true",
    "music-image":"url(ahmetkaya.png)"
  },
   {
     "name": "Ahmet Kaya",
     "music-name": "Metrisin Önü",
     "src":"https://github.com/tThe61/musics/blob/main/Metrisin%20%C3%96n%C3%BCnde%20Durdum?raw=true",
     "music-image":"url(ahmetkaya2.jpeg)"
   },
   {
     "name": "Ahmet Kaya",
     "music-name": "Benden Selam Söyleyin",
     "src": "https://github.com/tThe61/musics/blob/main/Benden%20Selam%20S%C3%B6yleyin?raw=true",
     "music-image":"url(ahmetkaya3.jpg)"
   },
   {
     "name": "Ahmet Kaya",
     "music-name": "Sözüm Şiirlerin Mükemmelidir",
     "src": "https://github.com/tThe61/musics/blob/main/S%C3%B6z%C3%BCm%20%C5%9Eiirlerin%20M%C3%BCkemmelidir?raw=true",
     "music-image":"url(ahmetkaya4.jpeg)"
   },
   {
     "name": "Ahmet Kaya",
     "music-name": "Doruklara Sevdalandım",
     "src": "https://github.com/tThe61/musics/blob/main/Doruklara%20Sevdaland%C4%B1m?raw=true"
   },
    {
      "name": "Ahmet Kaya",
      "music-name": "Dışarda Kar Yağıyor",
      "src": "https://github.com/tThe61/musics/blob/main/D%C4%B1%C5%9Farda%20Kar%20Ya%C4%9F%C4%B1yor?raw=true"
    },
     {
       "name": "Ahmet Kaya",
       "music-name": "Nerden Bileceksiniz",
       "src": "https://github.com/tThe61/musics/blob/main/Nereden%20Bileceksiniz?raw=true"
     },
      {
        "name": "Ahmet Kaya",
        "music-name": "Korkarım",
        "src": "https://github.com/tThe61/musics/blob/main/Korkar%C4%B1m?raw=true"
      },
       {
         "name": "Ahmet Kaya",
         "music-name": "Ay Gidiyor",
         "src": "https://github.com/tThe61/musics/blob/main/Ay%20Gidiyor?raw=true"
       },
        {
          "name": "Ahmet Kaya",
          "music-name": "Giderim",
          "src": "https://github.com/tThe61/musics/blob/main/Giderim?raw=true"
        },
];

var allMusics = musics.length;
var musicnumber = 0;
console.log(allMusics);

var timertext;  

var playing = false; 






function playAudio(){
    actorname.innerHTML = musics[musicnumber]["name"];
    songName.innerHTML = musics[musicnumber]["music-name"];
    setInterval(function() {
      var mins = Math.floor(music.currentTime / 60);
      var secs = Math.floor(music.currentTime % 60);
      if (secs < 10) {
        secs = "0" + String(secs);
      }
      musictime.innerHTML = mins + ":" + secs;
    }, 1000);
     wrapper.style.backgroundImage=musics[musicnumber]["music-image"];
    music.src = musics[musicnumber]["src"];
    music.play();
}



function nextAudio(){
  if(musicnumber < musics.length){
    musicnumber+=1;
  }else{
    musicnumber=0;
  }
  console.log(musics[musicnumber]["music-name"]);
  wrapper.style.backgroundImage=musics[musicnumber]["music-image"];
  playAudio();
}



function backAudio(){
  if(musicnumber < musics.length){
    musicnumber-=1;
  }else{
    musicnumber=0;
  }
  wrapper.style.backgroundImage=musics[musicnumber]["music-image"];
  playAudio();
}






