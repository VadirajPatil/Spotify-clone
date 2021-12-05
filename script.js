// console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongPlay = document.getElementById('masterSongPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementsByClassName('songItemPlay'); 
let bottom = document.getElementsByClassName('bottom');




let songs = [
    {songName: "khariyat", filePath: "songs/1.mp3", coverPath: "covers/khariyat.jpg"},
    {songName: "Mahabharat", filePath: "songs/2.mp3", coverPath: "covers/Mahabharat.jpg"},
    {songName: "HandsUp", filePath: "songs/3.mp3", coverPath: "covers/HandsUp.jpg"},
    {songName: "Bombe Helutaithe", filePath: "songs/4.mp3", coverPath: "covers/Bombe Helutaithe.jpg"},
    {songName: "Tamma Tamma Again", filePath: "songs/5.mp3", coverPath: "covers/Tamma Tamma Again.jpg"},
    {songName: "Shape Of You", filePath: "songs/6.mp3", coverPath: "covers/Shape Of You.jpg"},
    {songName: "Believer", filePath: "songs/7.mp3", coverPath: "covers/believer.jpg"}
]
// audioElement.play();



songItems.forEach((element,i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});



// Handle play/pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
        gif.style.opacity = 0;

        
    }
    
}) 
   



// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongPlay.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // bottom.classList.add('bottom');
        // bottom.style.visibility = "visible";
        
        
        
    })
})







document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=0){
        songIndex -= 1;
    }
    else{
        songIndex=0;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
