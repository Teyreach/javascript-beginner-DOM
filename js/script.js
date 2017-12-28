var buttons = document.getElementsByClassName('button');
console.log(buttons.length)

for(var b=0; b<buttons.length; b++){

console.log(buttons[b].innerText);
var show = buttons[b].innerText;
alert('' + show);
}



