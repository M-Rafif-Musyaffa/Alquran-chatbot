document.addEventListener("DOMContentLoaded", function() {

  const scrollElements = document.querySelectorAll(".scroll-reveal");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };

  // Panggil fungsi saat scroll dan saat load pertama kali
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Untuk elemen yang sudah terlihat saat halaman dimuat

});
