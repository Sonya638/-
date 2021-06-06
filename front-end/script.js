const url = 'http://localhost:5500/add';
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = () => {
    let news = document.getElementById("news");
    let res = xhr.response;
<<<<<<< HEAD
    news.innerHTML = `
    <td class="td1"><div class="card"  style="width: 18rem;">
    <img class="card-img-top" src="${res.img}" alt="Card image cap">
    <div class="card-body">
       <li class="list-group-item"><b>${res.name}</b></li>
      <p class="card-text">${res.about}</p>
    </div>
  </div>
</td>
    `
=======
    res.forEach(res => {
      news.innerHTML = `
      <td class="td1"><div class="card"  style="width: 18rem;">
      <img class="card-img-top" src="${res.img}" alt="Card image cap">
      <div class="card-body">
         <li class="list-group-item"><b>${res.name}</b></li>
        <p class="card-text">${res.about}</p>
      </div>
    </div>
  </td>
      `
    });
>>>>>>> 24cab67439e8696da3698010a7b444f0bec12cb6
  }

  xhr.send();

function send(){
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
<<<<<<< HEAD
  let news = {
    content: document.getElementById("add").value,

  }
=======
  let news ={
    content: document.getElementById("add").value,
    name: document.getElementById("add").value,
    img: document.getElementById("add").value,
    about: document.getElementById("add").value,
  } 
>>>>>>> 24cab67439e8696da3698010a7b444f0bec12cb6
  xhr.send(add);
}

