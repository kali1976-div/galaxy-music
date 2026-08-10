//developer = galaxy
const themeBtn = document.getElementById("themeBtn");
let themeIcon = document.getElementById("themeIcon");

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("galaxy-dark");
        if(document.body.classList.contains("galaxy-dark")){
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
        else{
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

        }
    })


const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
        } else {
            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
        }

    });
});
//now I will connect all the buttons to
let progress = document.getElementById("music-player-info-range");
let song = document.getElementById("music-player-info-audio");
let contIcon = document.getElementById("music-player-btn-stop");

song.onloadedmetadata =function (){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
        if(contIcon.classList.contains("fa-pause")){
            song.pause()
            contIcon.classList.remove("fa-pause");
            contIcon.classList.add("fa-play");
        }
        else{
            song.play()
            contIcon.classList.add("fa-pause");
            contIcon.classList.remove("fa-play");
        }
}

song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

progress.onchange  = function(){
    song.play();
    song.currentTime = progress.value;
    contIcon.classList.add("fa-pause");
    contIcon.classList.remove("fa-play");
}

// now we will make playlist for it
const allSongs = document.querySelectorAll(".song-lists-all");
const audio = document.getElementById("music-player-info-audio");
const title = document.getElementById("main-title");
const artist =  document.getElementById("main-artist");
const famousTitle = document.getElementById("main-famous-title");
const famous1 = document.getElementById("famous1")
const famous2 = document.getElementById("famous2")
const famous3 = document.getElementById("famous3")

let songs = [
    {
        title: "Animals",
        artist: "By Maroon",
        audio: "../music-source/animals.mp3",
        famousTitle:"Famous Songs of Maroon",
        famous1:"1 : sugar",
        famous2:"2 : memories",
        famous3:"3 : girls like you"
    },
    {
        title: "Attentions",
        artist: "by Charlie Puth",
        audio: "../music-source/attention.mp3",
        famousTitle:"Famous Songs of Charlie",
        famous1:"1 : We Don't talk anymore",
        famous2:"2 : Left to Right",
        famous3:"3 : Light Switch"
    },
    {
        title: "Him and I",
        artist: "By G-Eazy",
        audio: "../music-source/him.mp3",
        famousTitle:"Famous Songs of G-Eazy",
        famous1:"1 : Without me",
        famous2:"2 : bad at love",
        famous3:"3 : now or never"
    },
    {
        title: "Once Upon Time",
        artist: "By Tony Bennett",
        audio: "../music-source/once.mp3",
        famousTitle:"Famous Songs of Tony Bennett",
        famous1:"1 : From Sky",
        famous2:"2 : fall for you",
        famous3:"3 : our home"
    },
    {
        title:  "She doesn't mind",
        artist: "By Sean Paul",
        audio:  "../music-source/she.mp3",
        famousTitle:"Famous Songs of Sean Paul",
        famous1:"1 : temperature",
        famous2:"2 : no lie",
        famous3:"3 : Cheap Thrills"
    },
    {
        title: "SugarCrash",
        artist: "By ElyOtto",
        audio: "../music-source/sugar.mp3",
        famousTitle:"Famous Songs of ElyOtto",
        famous1:"1 : sugar",
        famous2:"2 : memories",
        famous3:"3 : girls like you"
    },
    {
        title: "A wanna",
        artist: "By Karaoke",
        audio: "../music-source/wanna.mp3",
        famousTitle:"Famous Songs of Karaoke",
        famous1:"1 : be mine",
        famous2:"2 : My shoe",
        famous3:"3 : fashions center"
    },
];

allSongs.forEach((item , index) => {
                item.addEventListener("click", () => {


                    // Highlight current song
                    allSongs.forEach(song => {
                        song.classList.remove("active-song");
                    });

                    item.classList.add("active-song");

                    title.innerText = songs[index].title;
                    artist.innerText = songs[index].artist;
                    famousTitle.innerText = songs[index].famousTitle;
                    famous1.innerText = songs[index].famous1;
                    famous2.innerText = songs[index].famous2;
                    famous3.innerText = songs[index].famous3;
                    audio.src = songs[index].audio;

                    audio.load();
                    audio.play();

                    contIcon.classList.remove("fa-play");
                    contIcon.classList.add("fa-pause");
                })
})





//for source code I4RF77FA3PM0X2
// develop by Galaxy ...
//many copy right or change without developer permission is prohibited
