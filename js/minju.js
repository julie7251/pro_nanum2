// 민주
window.addEventListener("load", function () {
  var swiper = new Swiper(".nanumsns", {
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 0,
    // centeredSlides: true,
    breakpoints: {
      // 768px 이상에서는 4개의 슬라이드가 보이도록 설정
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1330: {
        slidesPerView:4,
        spaceBetween: 0,
      },
    },
  });
  // 스크롤 이벤트를 감지하여 메뉴의 상태를 변경하는 함수
  window.addEventListener("scroll", function () {
    var menu = document.getElementById("bt-menu");
    if (window.scrollY > 100) {
      // 스크롤이 100px 이상 되었을 때
      menu.style.bottom = "0"; // 메뉴를 나타나게 합니다.
    } else {
      menu.style.bottom = "-50px"; // 메뉴를 숨깁니다.
    }
  });
  //배너
  var swiper = new Swiper(".nanumbanner", {
    autoplay: {
      delay: 5000, // 5초마다 자동 전환
    },
    loop: true,
    // slidesPerView: 2,
    // spaceBetween: 0,
    // centeredSlides: true,
    breakpoints: {
      // 768px 이상에서는 1개의 슬라이드가 보이도록 설정
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1300: {
        slidesPerView:2,
        spaceBetween: 0,
      },
    },
  });
});
