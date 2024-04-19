// 경란
$(document).ready(function () {
  const tabtitel = $(".tab-nav li a");
  tabtitel.click(function (e) {
    e.preventDefault();
    tabtitel.removeClass("active");
    $(this).addClass("active");
    $(".all-list").hide();
    let target = $(this).attr("href");
    $(target).show();
  });
  tabtitel.eq(0).trigger("click");
});

window.addEventListener("load", function () {
  // 페이지가 모두 로드된 후에 이벤트 리스너를 설정합니다.
  const heartButton = document.querySelector(".hart-icon");
  heartButton.addEventListener("click", function (e) {
    e.preventDefault(); // 버튼의 기본 동작을 방지
    heartButton.classList.toggle("act"); // 'act' 클래스를 토글
  });
});

window.addEventListener("load", function () {
  // Get the button and list elements
  const toggleBt1 = document.getElementById("toggle-bt1");
  const areaList = document.getElementById("area-list");

  const toggleBt2 = document.getElementById("toggle-bt2");
  const monthlyList = document.getElementById("monthly-list");

  const toggleBt3 = document.getElementById("toggle-bt3");
  const orderList = document.getElementById("order-list");


  toggleBt1.addEventListener("click", function () {
    areaList.classList.toggle("active");
  });
  toggleBt2.addEventListener("click", function () {
    monthlyList.classList.toggle("active");
  });
  toggleBt3.addEventListener("click", function () {
    orderList.classList.toggle("active");
  });
});
