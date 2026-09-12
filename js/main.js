// Ambient drifting-ember background effect on the fixed canvas behind the
// page — a small bit of visual identity that fits the name "Sparks"
// without needing any real art yet. Safe to delete this whole file (and
// the <canvas> tag / <script> reference in index.html) once real
// background art or a different treatment replaces it.
(function () {
  const canvas = document.getElementById("spark-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, sparks;
  const SPARK_COUNT = 60;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function makeSpark() {
    return {
      x: Math.random() * width,
      y: height + Math.random() * height,
      radius: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.6 + 0.15,
      drift: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      hue: Math.random() < 0.5 ? "255, 122, 61" : "255, 210, 61", // accent / accent-2
    };
  }

  function init() {
    resize();
    sparks = Array.from({ length: SPARK_COUNT }, makeSpark);
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    for (const s of sparks) {
      s.y -= s.speed;
      s.x += s.drift;
      if (s.y < -10) Object.assign(s, makeSpark(), { y: height + 10 });

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.hue}, ${s.alpha})`;
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  // Respect users who've asked for less motion.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.addEventListener("resize", resize);
  init();
  if (!prefersReducedMotion) {
    requestAnimationFrame(tick);
  }
})();
