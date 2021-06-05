const url = 'http://localhost:5500/add';
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = () => {
    let news = document.getElementById("news");
    let res = xhr.response;
    news.innerHTML = `
     ${res}
    `
  }

  xhr.send();

function send(){
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  let add = document.getElementById("add").value;
  xhr.send(add);
}

