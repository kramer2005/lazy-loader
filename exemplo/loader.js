const imageLoader = (entries) => {
  entries.map((e) => {
    if (e.isIntersecting) {
      const i = e.target.getAttribute("index");
      e.target.src = srcs[i];
      e.target.srcset = srcSets[i];
      observer.unobserve(e.target);
    }
  });
};

const observer = new IntersectionObserver(imageLoader, {
  threshold: 0.1,
});

const observe = () => {
  const images = document.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    if (images[i].getAttribute("index") !== null) {
      observer.observe(images[i]);
    }
  }
};

observe();
