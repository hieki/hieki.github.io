"use strict";

document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.getElementsByClassName("btn"))
    .forEach(button => {
      button.addEventListener("click", e => {
        const id = (e.target.children.length === 0) ? e.target.parentNode.id : e.target.id;
        const audio = document.getElementById(`audio-${id}`);
        audio.currentTime = 0;
        audio.play();
      });
    });
});
