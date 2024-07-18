function play(id){
  let audio = new Audio('./drum_beats/'+id+'.mp3');
  audio.play();

  audio.addEventListener("play", (event)=>{
    let element = document.getElementById(id);
    element.classList.add('shadow-2xl');
    element.classList.add('bg-opacity-100');

    setTimeout(()=>{
      element.classList.remove('shadow-2xl');
      element.classList.remove('bg-opacity-100');
    },500);
  })
}

let isMouseDown = false;

function playOnEnter(id){
  if(isMouseDown){
    play(id);
  }
}

document.addEventListener("keypress",(event)=>{
  if (event.key >= 'a' && event.key <= 'z'){
    play(event.key);
  }
});

document.addEventListener("mousedown", (event)=>{
  isMouseDown = true;
})

document.addEventListener("mouseup", ()=>{
  isMouseDown = false;
})
