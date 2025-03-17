$(document).ready(function () {
  let currentIndex = 0;
  const planetCards = $(".planet_card");
  const totalPlanets = planetCards.length;
  let isAnimating = false;

  planetCards.hide();
  planetCards.eq(currentIndex).show();

  $(".button_right").click(function () {
    if (isAnimating) return;
    isAnimating = true;

    planetCards.eq(currentIndex).fadeOut(400, function () {
      currentIndex = (currentIndex + 1) % totalPlanets;
      planetCards.eq(currentIndex).fadeIn(400, function () {
        isAnimating = false;
      });
    });
  });

  $(".button_left").click(function () {
    if (isAnimating) return;
    isAnimating = true;

    planetCards.eq(currentIndex).fadeOut(400, function () {
      currentIndex = (currentIndex - 1 + totalPlanets) % totalPlanets;
      planetCards.eq(currentIndex).fadeIn(400, function () {
        isAnimating = false;
      });
    });
  });
});

$('a[href^="#system"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});

$('a[href^="#studies"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});

$('a[href^="#practice"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});

$('a[href^="#firstman"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});

$(document).ready(function () {
  let hiddenRow = $(".nohidden");
  $(".btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".btn").html("Hide");
    } else {
      $(".btn").html("Learn");
    }
  });
});
document.getElementById("btn").addEventListener("click", function () {
  var container = document.getElementById("practice_card");
  if (container.style.height === "29vw") {
    container.style.height = "12vw";
  } else {
    container.style.height = "29vw";
  }
});

$(document).ready(function () {
  let hiddenRow = $(".nnohidden");
  $(".btnn").click(function () {
    hiddenRow.toggleClass("hhidden");
    if (hiddenRow.is(":visible")) {
      $(".btnn").html("Hide");
    } else {
      $(".btnn").html("Learn");
    }
  });
});
document.getElementById("btnn").addEventListener("click", function () {
  var container = document.getElementById("ppractice");
  if (container.style.height === "29vw") {
    container.style.height = "12vw";
  } else {
    container.style.height = "29vw";
  }
});

$(document).ready(function () {
  let hiddenRow = $(".nnnohidden");
  $(".btnnn").click(function () {
    hiddenRow.toggleClass("hhhidden");
    if (hiddenRow.is(":visible")) {
      $(".btnnn").html("Hide");
    } else {
      $(".btnnn").html("Learn");
    }
  });
});
document.getElementById("btnnn").addEventListener("click", function () {
  var container = document.getElementById("pppractice");
  if (container.style.height === "29vw") {
    container.style.height = "12vw";
  } else {
    container.style.height = "29vw";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section:not(header):not(footer)");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
