

let res;

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

async function getData() {
  res = await fetch(`http://localhost:1300`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      alert(err);
    });
  if (!res.error) {
    console.log(res);
  } else {
    console(res.error.message);
  }
  document.getElementById(
    "landingBg"
  ).style.backgroundImage = `url(${res.landingSec.image})`;
  document.getElementById(
    "landingSubText"
  ).textContent = `${res.landingSec.landingText}`;
  document.getElementById("priceDataStandard").textContent =`${res.carouselSec.carousel1.text}`;
  document.getElementById("imgStandard").style.backgroundImage = `url(${res.carouselSec.carousel1.image})`;
  document.getElementById("priceDataConference").textContent =`${res.carouselSec.carousel2.text}`;
  document.getElementById("imgConference").style.backgroundImage = `url(${res.carouselSec.carousel2.image})`;
  document.getElementById("priceDataPremium").textContent =`${res.carouselSec.carousel3.text}`;
  document.getElementById("imgPremium").style.backgroundImage = `url(${res.carouselSec.carousel3.image})`;
}

async function formHandle(event) {
  event.preventDefault();
  let formData = {
    checkInDate : document.getElementById("checkIn").value,
    checkOutDate : document.getElementById("checkOut").value,
    numberOfAdult : document.getElementById("adult").value,
    numberOfChildren : document.getElementById("children").value
  };
  console.log(formData);
  fetch("http://localhost:1300", {
    method : "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(formData),
  }).hen(() => {
    alert("Form submitted!");
    document.getElementById("checkIn").value = null;
    document.getElementById("checkOut").value = null;
    document.getElementById("adult").value = "0";
    document.getElementById("children").value = "0";
  });
}

getData();
