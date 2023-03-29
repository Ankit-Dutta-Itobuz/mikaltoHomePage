let res;

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

async function getData() {
  res = await fetch(`http://localhost:3800`)
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
}
getData();
