var hour = new Date().getHours();
var minutes = new Date().getMinutes();
var bodyStyle = document.body.style;
var block = document.getElementById('bloco_central');
var meetings = document.getElementById('meetings');

document.getElementById('title').innerText = `Sao ${hour}:${minutes}`;

if (hour >=6 && hour < 13) {
    meetings.innerText = 'Bom dia!'

    bodyStyle.backgroundColor = '#e7da60';
} else if (hour >= 13 && hour <18) {
    meetings.innerText = 'Boa tarde!'

    bodyStyle.backgroundColor = '#a04ca0';
} else {
    document.getElementById('imagem').src = 'assets/lua.png'

    meetings.innerText = 'Boa noite!';
    bodyStyle.color = 'white';
    bodyStyle.backgroundColor = 'black';
    block.style.backgroundColor = '#312e2e';
    block.style.color = 'white';
}