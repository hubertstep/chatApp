/* eslint-disable no-restricted-globals */
const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    console.log('e', name);
    const msg = `${name} : ${input.value}`;
    socket.emit('chat message', msg);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  try {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  } catch (error) {
    console.log(error);
  }
});

socket.onAny((event, ...args) => {
  console.log(event, args);
});
