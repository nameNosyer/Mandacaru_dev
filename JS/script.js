var arroba1 = document.getElementById("Lucas_Tavares");
var nome1 = document.getElementById("Lucas_Tavares");
arroba1.addEventListener("mouseenter", entrar_lucas);
nome1.addEventListener("mouseout", sair_lucas);

function entrar_lucas() {
  arroba1.innerText = "@lucastavr_";
}

function sair_lucas() {
  nome1.innerText = "Lucas Tavares";
}
var arroba2 = document.getElementById("Rafael_Barroso");
var nome2 = document.getElementById("Rafael_Barroso");
arroba2.addEventListener("mouseenter", entrar_rafael);
nome2.addEventListener("mouseout", sair_rafael);

function entrar_rafael() {
  arroba2.innerText = "@rafaabarroso";
}

function sair_rafael() {
  nome2.innerText = "Rafael Barroso";
}
var arroba3 = document.getElementById("Reyson_Renan");
var nome3 = document.getElementById("Reyson_Renan");
arroba3.addEventListener("mouseenter", entrar_reyson);
nome3.addEventListener("mouseout", sair_reyson);

function entrar_reyson() {
  arroba3.innerText = "@reyson_renan";
}

function sair_reyson() {
  nome3.innerText = "Reyson Renan";
}

$('.menu a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset
    },
    500
  );
});

$(function () {
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".smoothscroll-top").addClass("show");
    } else {
      $(".smoothscroll-top").removeClass("show");
    }
  });
  $(".smoothscroll-top").on("click", scrollToTop);
});
