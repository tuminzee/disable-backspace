document.addEventListener("keydown", function(event) {
  console.log(event);
  if(event.which == 8 || event.keyCode == 8 || event.code == "Backspace" ){
      event.preventDefault();
  }
});


