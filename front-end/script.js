const url = 'http://localhost:5500/-';
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = () => {
    let chat = document.getElementById("chat");
    let res = xhr.response;
    chat.innerHTML = `
     ${res}
    `
  }

  xhr.send();

function send(){
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  let msg = document.getElementById("message").value;
  xhr.send(msg);
}

