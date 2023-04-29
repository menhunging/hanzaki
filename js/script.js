$(document).ready(function () {
  if ($(".header").length) {
    let header = $(".header");

    addClassScroll();

    $(window).scroll(function () {
      addClassScroll();
    });

    function addClassScroll() {
      if ($(window).scrollTop() > 1) {
        header.addClass("header_scroll");
      } else {
        header.removeClass("header_scroll");
      }
    }
  }

  if ($(".menuBurger").length) {
    $(".menuBurger").on("click", function () {
      $(".menuBurger").toggleClass("open");
      $(".menu").toggleClass("open");
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
      // deeplinking: true, // для hash надо попробовать
    });
  }

  if ($(".youPartnerSlider").length > 0) {
    const swiper = new Swiper(".youPartnerSlider", {
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".youPartners .swiper-button-next",
        prevEl: ".youPartners .swiper-button-prev",
      },
      pagination: {
        el: ".youPartners .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 1,
        },
      },
    });
  }

  if ($("select").length > 0) {
    $("select").selectric();
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-custom-open",
      disableScroll: true,
      awaitCloseAnimation: true,
      onShow: () => {
        $(".modal__container").scrollTop(0);
        $(".modalWrap .scroll").scrollTop(-500);
      },
    });

    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".phoneInput").length > 0) {
    $(".phoneInput").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }
});
