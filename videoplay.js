var playVideo, signup_page, anchor;

playVideo = document.getElementById('my_video');
signup_page = document.querySelector(".signup_page");
playVideo.style.display = "none";

function myvideo(){
  signup_page.style.display = "none";
  playVideo.style.display = "";
  playVideo.play();
  setTimeout(pause,600);
  setTimeout(home,2000);
}

function pause(){
  playVideo.pause();
}

function home(){
  location.replace("https://albert222222.github.io/Doodle/");
  document.style.display="";
}
