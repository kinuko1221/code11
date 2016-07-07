console.log("start audio.js");

function play(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.play();
}

function pause(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.pause();
}

function skip10sec(){
  console.log("skip 10sec");
  var audio;
  audio = document.querySelector("audio");
  audio.currentTime
    = audio.currentTime + 10;
}

function rewind10sec(){
  var audio;
  audio = document.querySelector("audio");
  audio.currentTime
    = audio.currentTime - 10;
}

function stop(){
  var audio;
  audio = document.querySelector("audio");
  audio.pause();
  audio.currentTime = 0;
}

function mute(){
  var audio;
  audio = document.querySelector("audio");
  audio.muted = true;
}

function setVolume(audio, value){
  if(value < 0 || 1 < value){
    return;
  }
  audio.volume = value;
}

function volumeDown(){
  var audio;
  audio = document.querySelector("audio");
  setVolume(audio, audio.volume - 0.1);
}

function volumeUp(){
  var audio, newVolume;
  audio = document.querySelector("audio");
  setVolume(audio, audio.volume + 0.1);
}

function bindClickHandler(selector, handler){
  const elm = document.querySelector(selector);
  elm.addEventListener("click", handler);
}

function changeToMusic02(){
    var audio = document.querySelector("audio");
    audio.src = "audio/audio02.mp3";
    audio.play();
    }
  var play02 = document.querySelector("#play02");
  play02.addEventListener("click", changeToMusic02)
  
  function changeToMusic01(){
    var audio = document.querySelector("audio");
    audio.src = "audio/audio01.mp3";
    audio.play();
    }
  var play01 = document.querySelector("#play01");
  play01.addEventListener("click", changeToMusic01)
  
  function changeMusic(){
    var audio = document.querySelector("audio");
    audio.src = music;
    audio.play();
    }
  var play01 = document.querySelector("#play01");
  play01.addEventListener("click", changeToMusic01)



bindClickHandler("[data-role=play]", play);
bindClickHandler("[data-role=pause]", pause);
bindClickHandler("#skip10sec", skip10sec);
bindClickHandler("#rewind10sec", rewind10sec);
bindClickHandler("#stop", stop);
bindClickHandler("#mute", mute);
bindClickHandler("#volumeDown", volumeDown);
bindClickHandler("#volumeUp", volumeUp);
