let input = document.querySelector(".search-bar");
let cityname = document.getElementById("cityname");
let deg = document.getElementById("deg");
let description = document.getElementById("description");
let humi = document.getElementById("humi");
let windspeed = document.getElementById("windspeed");
let btn = document.querySelector("button");
let not = document.getElementById("not");
let weather = document.querySelector(".weather");
//////////////////
//         s    //
//////////////////
// let getData = (url) => {
//   return new Promise((resolve, reject) => {
//     let xhttp = new XMLHttpRequest();

//     xhttp.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject("d");
//       }
//     };
//     xhttp.open("GET", url);
//     xhttp.send();
//   });
// };

// btn.addEventListener("click", () => {
//   let countryname = input.value;
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryname}&units=metric&appid=a06f5900e547cae3c979a6614935d7e6`;
//   getData(url, countryname)
//     .then((res) => {
//       console.log(res);
//       // not.style.display = "none";
//       // weather.style.display = "block";
//       cityname.innerHTML = res.name;
//       humi.innerHTML = res.main.humidity;
//       deg.innerHTML = res.main.temp;
//       windspeed.innerHTML = res.wind.speed;
//     })
//     .catch((rej) => {
//       // not.style.display = "block";
//       // weather.style.display = "none";
//       console.log("object");
//     });
// });

// let getData = (url) => {
//   return new Promise((resolve, reject) => {
//     let xhttp = new XMLHttpRequest();

//     xhttp.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject("d");
//       }
//     };
//     xhttp.open("GET", url);
//     xhttp.send();
//   });
// };

btn.addEventListener("click", () => {
  let countryname = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryname}&units=metric&appid=a06f5900e547cae3c979a6614935d7e6`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      cityname.innerHTML = res.name;
      humi.innerHTML = res.main.humidity;
      deg.innerHTML = res.main.temp;
      windspeed.innerHTML = res.wind.speed;
      console.log(res);

      weather.style.display = "block";
      not.style.display = "none";
    })
    .catch((rej) => {
      weather.style.display = "none";
      not.style.display = "block";
    });
});
