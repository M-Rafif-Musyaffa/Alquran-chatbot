document.querySelector('.btn-download').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Download akan segera dimulai...');
  // Ganti URL di bawah ini ke URL file APK atau Play Store kamu
  window.location.href = "https://example.com/apk/alquran-chatbot.apk";
});
