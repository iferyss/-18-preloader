window.onload = function() {
    let positionX = positionY = 0, invertX = invertY = false;
    let animationId;
  
    function moving() {
      const preloaderContainer = document.getElementById('preloader-container');
      if (preloaderContainer) {
        positionX += (invertX ? -1 : 1) * 1;
        positionY += (invertY ? -1 : 1) * 1;
  
        invertX = (positionX > preloaderContainer.offsetWidth - 250) ? true : (positionX < 0) ? false : invertX;
        invertY = (positionY > preloaderContainer.offsetHeight - 125) ? true : ((positionY < 0)) ? false : invertY;
  
        preloaderContainer.style.backgroundPosition = `${positionX}px ${positionY}px, center, center`;
  
        animationId = requestAnimationFrame(moving);
      }
    }
  
    function startAnimation() {
      moving();
    }
  
    function stopAnimation() {
      cancelAnimationFrame(animationId);
    }
  
    function hidePreloader() {
      const preloaderContainer = document.getElementById('preloader-container');
      if (preloaderContainer) {
        stopAnimation();
        preloaderContainer.style.opacity = '0';
        document.body.style.position = 'static';
        setTimeout(() => {
          preloaderContainer.style.display = 'none';
          document.body.removeChild(preloaderContainer);
        }, 500);
      }
    }
  
    if (document.readyState !== 'loading') {
      startAnimation();
      setTimeout(hidePreloader, 3000);
    }
    else {
      document.addEventListener('DOMContentLoaded', function() {
        startAnimation();
        setTimeout(hidePreloader, 3000);
      });
    }
  };
  