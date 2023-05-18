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

  if ($(".complect-tabs").length) {
    $(".complect-tabs").tabslet({
      mouseevent: "click",
      animation: true,
    });

    $(".complect-tabs").on("_before", function (e) {
      $(e.target).find("input").prop("checked", true);
    });
  }

  if ($(".counter").length) {
    let minus = $(".counter__minus");
    let plus = $(".counter__plus");
    let text = $(".counter__text");

    minus.on("click", () => {
      let count = Number(text.text());
      text.text(count == 0 ? 0 : count - 1);
    });

    plus.on("click", () => {
      let count = Number(text.text());
      text.text(count + 1);
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".rugs-slider").length > 0) {
    const swiper = new Swiper(".rugs-slider .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-120%", 0, -500],
        },
        next: {
          translate: ["120%", 0, -500],
        },
      },
      loop: false,
      navigation: {
        nextEl: ".rugs-slider .swiper-button-next",
        prevEl: ".rugs-slider .swiper-button-prev",
      },
      pagination: {
        el: ".rugs-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          autoHeight: true,
        },
        640: {
          slidesPerView: 1,
        },
      },
    });
  }

  if ($(".work-example").length > 0) {
    const swiper = new Swiper(".work-example .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      loop: false,
      navigation: {
        nextEl: ".work-example .swiper-button-next",
        prevEl: ".work-example .swiper-button-prev",
      },
      pagination: {
        el: ".work-example .swiper-pagination",
        type: "fraction",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          autoHeight: true,
        },
        640: {
          slidesPerView: 1,
        },
      },
    });
  }

  if ($(".reviews").length > 0) {
    const swiper = new Swiper(".reviews .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      loop: false,
      navigation: {
        nextEl: ".reviews .swiper-button-next",
      },
    });
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".faq").length) {
    let quest = $(".faq__quest");

    quest.click(function () {
      if ($(this).parents(".faq__item").hasClass("active")) {
        $(".faq__item").stop().removeClass("active");
        $(".faq__answer").stop().slideUp();
        return false;
      }

      $(".faq__item").stop().removeClass("active");
      $(".faq__answer").stop().slideUp();

      $(this)
        .parents(".faq__item")
        .stop()
        .toggleClass("active")
        .find(".faq__answer")
        .stop()
        .slideDown();
    });
  }

  if ($(".link-page-up").length > 0) {
    $(".link-page-up").click(function (e) {
      e.preventDefault();
      $(window).scrollTop(0);
    });
  }

  if ($(".menu-burger").length) {
    $(".menu-burger").on("click", function () {
      $(".menu-burger").stop().toggleClass("open");
      $(".header__inner").stop().slideToggle();
    });
  }

  if ($("select").length > 0) {
    $("select").selectric();
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-custom-open",
      disableScroll: true,

      onShow: (modal) => {
        $("body").addClass("modal-open");
      },

      onClose: (modal) => {
        $("body").removeClass("modal-open");
      },
    });

    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
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

  if ($(".menu").length > 0) {
    if (location.hash != "") {
      let scroll;
      hashLoad = location.hash;

      scroll = setScrollMargin(hashLoad);

      $("html, body").animate(
        {
          scrollTop: scroll,
        },
        {
          duration: 0,
          easing: "linear",
        }
      );
    }

    initMenuAnchor();
  }

  if ($(window).width() < 1200) {
    mergingMenu();
  }

  if ($(".configurator").length) {
    if ($(window).width() < 640) {
      scrollImgConfig();
    }
  }

  if ($("[data-aos]").length) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 300,
        // duration: 1200,
        once: false,
      });
    });
  }

  if ($(".cellule-kant").length) {
    $(".cellule-kant label").click(function () {
      let url = $(this).attr("data-img");
      url !== undefined ? $(".kant").attr("src", url) : null;
    });
  }

  if ($(".cellule-kovrik").length) {
    $(".cellule-kovrik label").click(function () {
      let url = $(this).attr("data-img");
      url !== undefined ? $(".kovrik").attr("src", url) : null;
    });
  }
});

$(window).resize(function () {
  if ($(window).width() < 1200 && $(".menu ul").length >= 2) {
    mergingMenu();
  }
});

function setScrollMargin(hashLoad) {
  let maring = 0;
  let width = $(window).width();

  if (width >= 1440) {
    maring = 118;
  }

  if (width < 1440) {
    maring = 80;
  }

  if (width < 1200) {
    maring = 100;
  }

  if (width < 992) {
    maring = 80;
  }

  if (width < 767) {
    maring = 75;
  }

  if (width < 480) {
    maring = 60;
  }

  return $(hashLoad).offset().top - maring;
}

function mergingMenu() {
  let menu = $(".menu");
  let newMenu = $("<ul/>").append($(".menu li").clone());
  menu.find("ul").remove();
  menu.append(newMenu);
  initMenuAnchor();
}

function scrollImgConfig() {
  let configImg = $(".configurator__left");
  let positionConfig = $(".configurator").position().top;
  let heightConfig = $(".configurator").outerHeight();

  $(window).scroll(function () {
    if (
      $(window).scrollTop() >= positionConfig &&
      $(window).scrollTop() < heightConfig + 500
    ) {
      configImg.addClass("visible");
    } else {
      configImg.removeClass("visible");
    }
  });
}

function initMenuAnchor() {
  $(".menu ul li a").on("click", function () {
    if ($(".menu-burger").hasClass("open")) {
      $(".menu-burger").trigger("click");
    }

    if ($(this).attr("data-link")) {
      let href = $(this).attr("data-link");
      let settingsScroll;

      if ($(window).width() < 1440) {
        settingsScroll = $(href).offset().top - 59;
      } else {
        settingsScroll = $(href).offset().top - 120;
      }

      settingsScroll = setScrollMargin(href);

      $("html, body").animate(
        {
          scrollTop: settingsScroll,
        },
        {
          duration: 370,
          easing: "linear",
        }
      );
    }
  });
}
