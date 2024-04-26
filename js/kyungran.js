// 경란
// ================================= tab-nav 슬라이드 기능
window.addEventListener("load", function () {
  var on = $('.tab-nav').find('.activetop').index();
  console.log(on);
  var options = {
  horizontal: 1,
  itemNav: 'centered', //basic , centered,
  speed: 600,
  smart: 1,
     activateOn: 'click',
  mouseDragging: 1,
  touchDragging: 1,
  activateMiddle: 1,
  releaseSwing: 1,
  activeClass:'activetop',
  startAt: on,
  easing: 'easeInOutQuart',
  // itemSelector:1
  };

  var frame = new Sly('.tab-nav-wrapper', options).init();
  });

// ================================== tab-nav 클릭시 해당 메뉴로
window.addEventListener("load", function () {
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

// 우측토글
// window.addEventListener("load", function () {
//   // Get the button and list elements
//   const toggleBt1 = document.getElementById("toggle-bt1");
//   const areaList = document.getElementById("area-list");

//   const toggleBt2 = document.getElementById("toggle-bt2");
//   const monthlyList = document.getElementById("monthly-list");

//   const toggleBt3 = document.getElementById("toggle-bt3");
//   const orderList = document.getElementById("order-list");

//   toggleBt1.addEventListener("click", function () {
//     areaList.classList.toggle("active");
//   });
//   toggleBt2.addEventListener("click", function () {
//     monthlyList.classList.toggle("active");
//   });
//   toggleBt3.addEventListener("click", function () {
//     orderList.classList.toggle("active");
//   });
// });


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
    // Close other lists
    monthlyList.classList.remove("active");
    orderList.classList.remove("active");
  });
  toggleBt2.addEventListener("click", function () {
    monthlyList.classList.toggle("active");
    // Close other lists
    areaList.classList.remove("active");
    orderList.classList.remove("active");
  });
  toggleBt3.addEventListener("click", function () {
    orderList.classList.toggle("active");
    // Close other lists
    areaList.classList.remove("active");
    monthlyList.classList.remove("active");
  });
});


// 찜하기
window.addEventListener("load", function () {
    // 페이지가 모두 로드된 후에 이벤트 리스너를 설정합니다.
    const heartButtons = document.querySelectorAll(".hart-icon");
    heartButtons.forEach(function(heartButton) {
      heartButton.addEventListener("click", function (e) {
        heartButton.classList.toggle("act"); // 'act' 클래스를 토글
      });
    });
  });
