// 민주
window.addEventListener("load", function () {
  var swiper = new Swiper(".nanumsns", {
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 0,
    breakpoints: {
      1300: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
    },
    // centeredSlides: true,
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
      delay: 2000, // 슬라이드 간격을 여기에 밀리초 단위로 설정합니다.
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    // centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
});