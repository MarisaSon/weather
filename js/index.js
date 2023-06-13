const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "9153f716f5540044b050e6193e3946b0",
};

const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e) {
  if (e.keyCode === 13) {
    getSearch(input.value);
  }
}

async function getSearch(info) {
  const res = await fetch(
    `${api.endpoint}weather?q=${info}&units=metric&appID=${api.key}`
  );

  const result = await res.json();
  showResult(result);
}

function showResult(result) {
  console.log(result);
  let city = document.querySelector("#city");
  city.textContent = `${result.name}, ${result.sys.country}`;

  getOurDate();

  let temp = document.querySelector("#temperature");
  temp.innerHTML = ` ${Math.round(result.main.temp)}<span>°</span>`;
  let feel = document.querySelector("#feel");
  feel.innerHTML =
    "Feels like: " + `${Math.round(result.main.feels_like)}<span>°</span>`;
  let type = document.querySelector("#type");
  type.textContent = `${result.weather[0].main}`;
  let minmax = document.querySelector("#min-max");
  minmax.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span> Max: ${Math.round(result.main.temp_max)}<span>°</span`;
}


function getOurDate(){
  let date=document.querySelector('#date');
  const now=new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day=days[now.getDay()];
  const dayNumber=now.getDate();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month=months[now.getMonth()];
  const year = now.getFullYear();
  const fullDate = day + " " + dayNumber + ' ' + month + " " + year;
  
  date.textContent=fullDate;
}


