/* =========================================================================
   Yuxin Cao — Academic Homepage (redesign)
   Vanilla JS: mobile nav, scroll-spy, news toggle, publication filters.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* ---------- Scroll-spy: highlight active nav link ---------- */
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href^="#"]')
  );
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  function onScroll() {
    var pos = window.scrollY + 120;
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= pos) current = sections[i];
    }
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + (current && current.id));
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- News: show more / less ---------- */
  var newsBtn = document.getElementById("moreNewsButton");
  var moreNews = document.getElementById("moreNews");
  if (newsBtn && moreNews) {
    newsBtn.addEventListener("click", function () {
      var open = moreNews.classList.toggle("open");
      newsBtn.textContent = open ? "Show Less" : "Show More";
    });
  }

  /* ---------- Publication year filter ---------- */
  var filters = Array.prototype.slice.call(document.querySelectorAll(".pub-filter"));
  var blocks = Array.prototype.slice.call(document.querySelectorAll(".year-block"));
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var year = btn.getAttribute("data-year");
      filters.forEach(function (b) { b.classList.toggle("active", b === btn); });
      blocks.forEach(function (blk) {
        blk.style.display =
          year === "all" || blk.getAttribute("data-year") === year ? "" : "none";
      });
    });
  });
})();
