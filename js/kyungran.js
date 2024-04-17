// 경란
$(document).ready(function () {
    const tabtitel = $(".tab-nav li a");
    tabtitel.click(function (e) {
      e.preventDefault();
      tabtitel.removeClass("active");
      $(this).addClass("active");
      $(".all-list").hide();
      let target = $(this).attr("href");
      $(target).show()
    });
    tabtitel.eq(0).trigger("click")
  });
  
  window.addEventListener("load", function () {
  function toggleAct(button) {
    button.classList.toggle("act");
  }
  })
  
  // window.addEventListener("load", function () {
  //     // 버튼과 목록 요소들을 가져옴
  //     const toggleBt1 = document.getElementById("toggle-bt1");
  //     const areaList = document.getElementById("area-list");
      
  //     const toggleBt2 = document.getElementById("toggle-bt2");
  //     const monthlyList = document.getElementById("monthly-list");
      
  //     const toggleBt3 = document.getElementById("toggle-bt3");
  //     const orderList = document.getElementById("order-list");
    
  //     // 버튼 클릭 시 토글 기능 적용
  //     toggleBt1.addEventListener("click", function () {
  //       areaList.classList.toggle("active");
  //     });
    
  //     toggleBt2.addEventListener("click", function () {
  //       monthlyList.classList.toggle("active");
  //     });
    
  //     toggleBt3.addEventListener("click", function () {
  //       orderList.classList.toggle("active");
  //     });
    
  //     // 문서 전체를 클릭했을 때 모든 목록을 닫음
  //     document.addEventListener("click", function () {
  //       areaList.classList.remove("active");
  //       monthlyList.classList.remove("active");
  //       orderList.classList.remove("active");
  //     });
    
  //     // 목록을 클릭했을 때 이벤트 전파 방지
  //     [areaList, monthlyList, orderList].forEach(function (list) {
  //       list.addEventListener("click", function (e) {
  //         e.stopPropagation();
  //       });
  //     });
  //   });