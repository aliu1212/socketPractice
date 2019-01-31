
let socket = io.connect('http://localhost:5000');
let output = document.getElementById('output');
let name = document.getElementById('name');
let btn = document.getElementById('send');
let feedback = document.getElementById('feedback');
//send an event
btn.addEventListener('click', () => {
  socket.emit('username', { name: name.value });
})

name.addEventListener('keypress', () => {
  socket.emit('typing', name.value)
} )

//listen for events
socket.on('username', (data) => {
  feedback.innerHTML = '';
  output.innerHTML += '<p>' + data.name + '</p>';
})

socket.on('typing', (data) => {
  feedback.innerHTML = '<p><em>New user joining: '+ data+'</em></p>';
})