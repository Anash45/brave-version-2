AOS.init({
  duration: 1000, // default animation duration (ms)
  offset: 120, // trigger point from bottom of screen
  once: true, // animate only once
  easing: "ease-in-out", // global easing
});

/* Image Reveal Animation */
if ($(".ft-reveal").length) {
  gsap.registerPlugin(ScrollTrigger);
  let revealContainers = document.querySelectorAll(".ft-reveal");
  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    });
    tl.set(container, {
      autoAlpha: 1,
    });
    tl.from(container, 1, {
      xPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1, {
      xPercent: 100,
      scale: 1,
      delay: -1,
      ease: Power2.out,
    });
  });
}

if ($(".ts-slider-cont").length > 0) {
  $(".ts-slider-cont").slick({
    centerMode: true,
    centerPadding:
      "400px" /* Adjust this to control how much of the side items are visible */,
    slidesToShow: 1,
    focusOnSelect: true,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    prevArrow: `<button type="button" class="slick-arrows circle-arrow slick-prev">
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="47" height="47" rx="23.5" stroke="#7246ea"/>
<path d="M32.5 23H20.33L25.92 17.41L24.5 16L16.5 24L24.5 32L25.91 30.59L20.33 25H32.5V23Z" fill="#7246ea"/>
</svg>

    </button>`,
    nextArrow: `<button type="button" class="slick-arrows circle-arrow slick-next">
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="47" height="47" rx="23.5" stroke="#7246ea"/>
<path d="M24.5 16L23.09 17.41L28.67 23H16.5V25H28.67L23.09 30.59L24.5 32L32.5 24L24.5 16Z" fill="#7246ea"/>
</svg>

    </button>`,
    appendArrows: ".ts-slider-arrows",
    dots: false, // Hide navigation dots
    draggable: true, // Enable dragging
    infinite: true, // Infinite looping
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
}

// Title animations
let des_anim_item_one = document.querySelectorAll(".ft-title_split_anim");
des_anim_item_one.forEach((des_anim_item) => {
  let data_duration = des_anim_item.getAttribute("data-duration") || 0.8;
  let data_delay = des_anim_item.getAttribute("data-delay") || 0.2;
  let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
  let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
  let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
  let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.06;
  let split_word = new SplitText(des_anim_item, { type: "chars, words" });
  let gsapConfig = {
    duration: data_duration,
    delay: data_delay,
    x: translateX_value || 20,
    y: translateY_value,
    autoAlpha: 0,
    stagger: stagger_value,
  };
  if (onscroll_value == 1) {
    gsapConfig.scrollTrigger = {
      trigger: des_anim_item,
      start: "top 90%",
    };
  }
  gsap.from(split_word.words, gsapConfig);
});
let des_anim_item = document.querySelectorAll(".ft-title_split_anim");
des_anim_item.forEach((des_anim_item) => {
  let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.04;
  let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
  let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
  let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
  let data_delay = des_anim_item.getAttribute("data-delay") || 0.1;
  let data_duration = des_anim_item.getAttribute("data-duration") || 0.75;
  let split_word = new SplitText(des_anim_item, { type: "chars, words" });
  let gsapConfig = {
    duration: data_duration,
    delay: data_delay,
    x: translateX_value || 20,
    y: translateY_value,
    autoAlpha: 0,
    stagger: stagger_value,
  };
  if (onscroll_value == 1) {
    gsapConfig.scrollTrigger = {
      trigger: des_anim_item,
      start: "top 90%",
    };
  }
  gsap.from(split_word.words, gsapConfig);
});

function handleHeaderScroll() {
  if ($(window).scrollTop() > 300) {
    $("header").addClass("header-fixed");
  } else {
    $("header").removeClass("header-fixed");
  }
}

$(document).ready(function () {
  // Run once on page load
  handleHeaderScroll();

  // Bind to scroll event
  $(window).on("scroll", handleHeaderScroll);
});

function updateAccordionShownClass() {
  $(".accordion .accordion-item").each(function () {
    const $item = $(this);
    if ($item.find(".accordion-collapse").hasClass("show")) {
      $item.addClass("shown");
    } else {
      $item.removeClass("shown");
    }
  });
}

$(document).ready(function () {
  // Initial check on page load
  updateAccordionShownClass();

  // Bind to Bootstrap collapse events
  $("#accordionExample, #accordionExample2").on(
    "shown.bs.collapse hidden.bs.collapse",
    function () {
      updateAccordionShownClass();
    }
  );
});
