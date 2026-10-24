/* Add each new review as one entry below. Newest first; the first entry is featured on the home page.
   Fields: name, role, org, product, rating (1-5), text */
window.NHA_REVIEWS = [
  { name: "Tineyi Mbanje", role: "Director", org: "Total Compliance Ltd", product: "Business Website", rating: 5,
    text: "Thank you for your professional service, our website is perfectly working." }
];
(function () {
  var R = window.NHA_REVIEWS || [];
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x) e.textContent = x; return e; }
  function who(r) { return [r.name, [r.role, r.org].filter(Boolean).join(", ")].filter(Boolean).join(", "); }
  var f = document.getElementById("featured");
  if (f && R.length) {
    var w = f.querySelector(".wrap"); w.textContent = "";
    var b = el("blockquote", "", "\u201C" + R[0].text + "\u201D"), c = el("cite", "", who(R[0]));
    var a = el("a", "more", "Read all reviews"); a.href = "reviews.html";
    w.appendChild(b); w.appendChild(c); w.appendChild(a);
  }
  var l = document.getElementById("review-list");
  if (l) {
    l.textContent = "";
    if (!R.length) { l.appendChild(el("p", "lead", "No reviews yet. Be the first to share your experience.")); return; }
    R.forEach(function (r) {
      var n = Math.max(0, Math.min(5, r.rating | 0)), art = el("article", "review");
      var s = el("div", "rstars", "\u2605".repeat(n) + "\u2606".repeat(5 - n)); s.setAttribute("role", "img"); s.setAttribute("aria-label", n + " out of 5");
      art.appendChild(s); art.appendChild(el("p", "rtext", r.text));
      var m = el("p", "rmeta"); m.appendChild(el("b", "", r.name));
      m.appendChild(document.createTextNode([[r.role, r.org].filter(Boolean).join(", "), r.product].filter(Boolean).map(function (x) { return " " + x; }).join(" | ")));
      art.appendChild(m); l.appendChild(art);
    });
  }
})();
