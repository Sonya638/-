const url = 'http://localhost:5500/add';
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = () => {
    let news = document.getElementById("news");
    let res = JSON.parse(xhr.response);
    console.log(res)
    res.map(res => {
      news.innerHTML += `
     <div class="card"  style="width: 18rem;">
      <img class="card-img-top" src="${res.img}" alt="Card image cap">
      <div class="card-body">
         <li class="list-group-item"><b>${res.name}</b></li>
        <p class="card-text">${res.about}</p>
      </div>
    </div>
      `
    });
  }

  xhr.send();

function send(){
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  let news ={
    name: document.getElementById("name").value,
    about: document.getElementById("about").value,
  } 
  
  xhr.send(JSON.stringify(news));//Отправляете белеберду. Перед отправкой нужно сделать JSON.stringify(news)
}

