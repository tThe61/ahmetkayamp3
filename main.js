//html elements
var music = new Audio();
var actorname = document.getElementById("name");
var songName = document.getElementById("music-name");
var wrapper = document.getElementById("wrapper");



var musictime = document.getElementById("time");

var musics = [
   {
     "name": "Ahmet Kaya",
     "music-name": "Kendine İyi Bak",
     "src": "https://github.com/tThe61/musics/blob/main/Ahmet-Kaya-Kendine-Iyi-Bak.mp3?raw=true"
   },
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
        {
          "name":"Ahmet Kaya",
          "music-name":"Diyarbakır Türküsü",
          "src":"https://github.com/tThe61/musics/blob/main/Diyarbak%C4%B1r%20T%C3%BCrk%C3%BCs%C3%BC?raw=true"
        },
        {
          "name": "Ahmet Kaya",
          "music-name": "Kum Gibi",
          "src": "https://github.com/tThe61/musics/blob/main/Kum%20Gibi?raw=true"
        },
         {
           "name": "Ahmet Kaya",
           "music-name": "O Mahur Beste Çalar",
           "src": "https://github.com/tThe61/musics/blob/main/O%20Mahur%20Beste%20%C3%87alar?raw=true"
         },
         {
           "name": "Ahmet Kaya",
           "music-name": "Başım Belada",
           "src": "https://github.com/tThe61/musics/blob/main/Ba%C5%9F%C4%B1m%20Belada?raw=true"
         },
         {
           "name": "Ahmet Kaya",
           "music-name": "Arka Mahalle",
           "src": "https://github.com/tThe61/musics/blob/main/Arka%20Mahalle?raw=true"
         },
         {
           "name": "Ahmet Kaya",
           "music-name": "Kalan Kalır",
           "src": "https://github.com/tThe61/musics/blob/main/Kalan%20Kal%C4%B1r?raw=true"
         },
         {
           "name": "Ahmet Kaya",
           "music-name": "Dostum Dostum",
           "src": "https://github.com/tThe61/musics/blob/main/Dostum%20Dostum?raw=true"
         },
         {
           "name": "Ahmet Kaya",
           "music-name": "Doğum Günü",
           "src": "https://github.com/tThe61/musics/blob/main/Do%C4%9Fum%20G%C3%BCn%C3%BC?raw=true"
         },
          {
            "name": "Ahmet Kaya",
            "music-name": "Ağladıkça",
            "src": "https://github.com/tThe61/musics/blob/main/A%C3%84%C5%B8lad%C3%84%C2%B1k%C3%83%C2%A7a?raw=true"
          },
           {
             "name": "Ahmet Kaya",
             "music-name": "Dardayım",
             "src": "https://github.com/tThe61/musics/blob/main/Darday%C4%B1m?raw=true"
           },
            {
              "name": "Ahmet Kaya",
              "music-name": "Hani Benim Gençliğim Nerde",
              "src": "https://github.com/tThe61/musics/blob/main/Hani%20Benim%20Gen%C3%83%C2%A7li%C3%84%C5%B8im?raw=true"
            },
             {
               "name": "Ahmet Kaya",
               "music-name": "Beni Vur",
               "src": "https://github.com/tThe61/musics/blob/main/Beni%20Vur?raw=true"
             },
              {
                "name": "Ahmet Kaya",
                "music-name": "Yakarım Geceleri",
                "src": "https://github.com/tThe61/musics/blob/main/Yakar%C4%B1m%20Geceleri?raw=true"
              }
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






