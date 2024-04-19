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
  function toggleAct(button) {
    button.classList.toggle("act");
  }
});

window.addEventListener("load", function () {

  // Get the button and list elements
const toggleBt1 = document.getElementById("toggle-bt1");
const areaList = document.getElementById("area-list");

const toggleBt2 = document.getElementById("toggle-bt2");
const monthlyList = document.getElementById("monthly-list");

const toggleBt3 = document.getElementById("toggle-bt3");
const orderList = document.getElementById("order-list");

// Function to toggle 'active' class

// Attach click event listeners to buttons
toggleBt1.addEventListener("click", function () {
    areaList.classList.toggle("active")


});


});
