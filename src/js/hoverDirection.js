(() => {
  // Detect Closest Edge
  function closestEdge(x, y, w, h) {
    const topEdgeDist = distMetric(x, y, w / 2, 0);
    const bottomEdgeDist = distMetric(x, y, w / 2, h);
    const leftEdgeDist = distMetric(x, y, 0, h / 2);
    const rightEdgeDist = distMetric(x, y, w, h / 2);
    const min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    );
    switch (min) {
      case leftEdgeDist:
        return "left";
      case rightEdgeDist:
        return "right";
      case topEdgeDist:
        return "top";
      case bottomEdgeDist:
        return "bottom";
    }
  }

  // Distance Formula
  function distMetric(x, y, x2, y2) {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  }

  const boxes = document.querySelectorAll(".works__item");

  boxes.forEach((box) => {
    const overlay = box.querySelector('.works__description');
    const image = box.querySelector('.works__img');
    const transitionTime = 0.3;

    box.onmouseenter = function (e) {
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      const edge = closestEdge(x, y, this.clientWidth, this.clientHeight);

      switch (edge) {
        case "left":
          // tween overlay from the left
          overlay.style.top = "0%";
          overlay.style.left = "-100%";
          TweenMax.to(overlay, transitionTime, { left: "0%" });
          TweenMax.to(image, transitionTime, { scale: 1.2 });
          break;
        case "right":
          overlay.style.top = "0%";
          overlay.style.left = "100%";
          // tween overlay from the right
          TweenMax.to(overlay, transitionTime, { left: "0%" });
          TweenMax.to(image, transitionTime, { scale: 1.2 });
          break;
        case "top":
          overlay.style.top = "-100%";
          overlay.style.left = "0%";
          // tween overlay from the right
          TweenMax.to(overlay, transitionTime, { top: "0%" });
          TweenMax.to(image, transitionTime, { scale: 1.2 });
          break;
        case "bottom":
          overlay.style.top = "100%";
          overlay.style.left = "0%";
          // tween overlay from the right
          TweenMax.to(overlay, transitionTime, { top: "0%" });
          TweenMax.to(image, transitionTime, { scale: 1.2 });
          break;
      }
    }

    box.onmouseleave = function (e) {
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      const edge = closestEdge(x, y, this.clientWidth, this.clientHeight);

      switch (edge) {
        case "left":
          TweenMax.to(overlay, transitionTime, { left: "-100%" });
          TweenMax.to(image, transitionTime, { scale: 1.0 });
          break;
        case "right":
          TweenMax.to(overlay, transitionTime, { left: "100%" });
          TweenMax.to(image, transitionTime, { scale: 1.0 });
          break;
        case "top":
          TweenMax.to(overlay, transitionTime, { top: "-100%" });
          TweenMax.to(image, transitionTime, { scale: 1.0 });
          break;
        case "bottom":
          TweenMax.to(overlay, transitionTime, { top: "100%" });
          TweenMax.to(image, transitionTime, { scale: 1.0 });
          break;
      }
    };
  });
})();
