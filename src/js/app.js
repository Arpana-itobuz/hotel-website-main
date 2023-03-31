import "../scss/app.scss";

/* Your JS Code goes here */

/* Demo JS */

import "bootstrap/scss/bootstrap.scss";

const swiperImg = document.querySelectorAll(".swiper-slide");
const swiperPrev = document.querySelector(".swiper-button-prev");
const swiperNext = document.querySelector(".swiper-button-next");
const checkIn = document.getElementById("check-in");
const checkOut = document.getElementById("check-out");
const checkingIn = document.querySelector(".check_in");
const checkingOut = document.querySelector(".check_out");
const adults = document.querySelector(".adults");
const childrens = document.querySelector(".childrens");
const roomNumber = document.querySelector(".room-number");
const crossButton = document.querySelector(".cross-button");
const submitButton = document.querySelector(".submit-button");
const dropdownList = document.querySelector("#select_box");
const dropdownListChild = document.querySelector("#select_box_children");
let dataBox = document.querySelector(".data-box");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(checkIn.value);
  console.log(checkOut.value);
  let selecetedIndex = dropdownList.selectedIndex;
  let selectedOptionAdult = dropdownList.options[selecetedIndex];
  let selecetedIndexChild = dropdownListChild.selectedIndex;
  let selectedOptionChild = dropdownListChild.options[selecetedIndexChild];
  ``;
  const formData = {
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    adult: selectedOptionAdult.text,
    child: selectedOptionChild.text,
  };
  // if (dataBox.classList.contains("hidden")){
  crossButton.addEventListener("click", () => {
    dataBox.classList.add("d-none");
  });

  dataBox.classList.remove("d-none");

  // }

  checkingIn.textContent = formData.checkIn;
  checkingOut.textContent = formData.checkOut;
  adults.textContent = formData.adult;
  childrens.textContent = formData.child;
  roomNumber.textContent = Math.floor(Math.random() * 10);

  postForm(formData).then((data) => {
    console.log(data);
  });
  async function postForm(formData) {
    const res = await fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  }
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

async function topSectionData() {
  const topSectionRes = await fetch("http://127.0.0.1:5000/topSection").then(
    (data) => {
      return data.json();
    }
  );
  console.log(topSectionRes);
  document.querySelector(
    ".top-section"
  ).style.backgroundImage = `url(${topSectionRes[0].imageURL})`;
  document.querySelector(
    ".top-section-heading"
  ).textContent = `${topSectionRes[0].heading}`;
  document.querySelector(
    ".top-section-description"
  ).textContent = `${topSectionRes[0].description}`;
}

topSectionData();

async function cardData() {
  const cardRes = await fetch("http://127.0.0.1:5000/card").then((data) => {
    return data.json();
  });
  console.log(cardRes);

  for (let i = 0; i < cardRes.length; i++) {
    console.log(cardRes.length);
    document
      .querySelectorAll(".services-image")
      [i].setAttribute("src", `${cardRes[i].imageURL}`);
    document.querySelectorAll(".services-sub-heading")[
      i
    ].textContent = `${cardRes[i].subHeading}`;
    document.querySelectorAll(".services-description")[
      i
    ].textContent = `${cardRes[i].description}`;
    document.querySelectorAll(".services-heading")[
      i
    ].textContent = `${cardRes[i].heading}`;
  }
}

cardData();

async function swipperData() {
  const swipperRes = await fetch("http://127.0.0.1:5000/swipper").then(
    (data) => {
      return data.json();
    }
  );

  for (let i = 0; i < swipperRes.length; i++) {
    console.log(swipperRes.length);
    console.log(swipperRes[i].imageURL);
    document
      .querySelectorAll(".swiper-image")
      [i].setAttribute("src", `${swipperRes[i].imageURL}`);
    document.querySelector(
      ".swiper-heading"
    ).textContent = `${swipperRes[0].heading}`;

    document.querySelector(
      ".swiper-sub-heading"
    ).textContent = `${swipperRes[0].subHeading}`;
    document.querySelector(
      ".swiper-description"
    ).textContent = `${swipperRes[0].description}`;
    document.querySelector(
      ".swiper-rate"
    ).textContent = `${swipperRes[0].rate}`;
    document.querySelector(".swiper-bed").textContent = `${swipperRes[0].bed}`;
    document.querySelector(
      ".swiper-capacity"
    ).textContent = `${swipperRes[0].capacity}`;
    document.querySelector(
      ".swiper-room-size"
    ).textContent = `${swipperRes[0].roomSize}`;
    document.querySelector(
      ".swiper-view"
    ).textContent = `${swipperRes[0].view}`;
  }
  function onClickChange() {
    for (let i = 0; i < swiperImg.length; i++) {
      if (swiperImg[i].classList.contains("swiper-slide-active")) {
        document.querySelector(
          ".swiper-heading"
        ).textContent = `${swipperRes[i].heading}`;
        document.querySelector(
          ".swiper-sub-heading"
        ).textContent = `${swipperRes[i].subHeading}`;
        document.querySelector(
          ".swiper-description"
        ).textContent = `${swipperRes[i].description}`;
        document.querySelector(
          ".swiper-rate"
        ).textContent = `${swipperRes[i].rate}`;
        document.querySelector(
          ".swiper-bed"
        ).textContent = `${swipperRes[i].bed}`;
        document.querySelector(
          ".swiper-capacity"
        ).textContent = `${swipperRes[i].capacity}`;
        document.querySelector(
          ".swiper-room-size"
        ).textContent = `${swipperRes[i].roomSize}`;
        document.querySelector(
          ".swiper-view"
        ).textContent = `${swipperRes[i].view}`;
      }
    }
  }

  swiperPrev.addEventListener("click", () => {
    onClickChange();
  });

  swiperNext.addEventListener("click", () => {
    onClickChange();
  });
}

swipperData();
