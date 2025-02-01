  // الحصول على الزر باستخدام الـ id
  const scrollDownButton = document.getElementById('scroll-down-button');

  // إضافة حدث النقر (Click Event)
  scrollDownButton.addEventListener('click', () => {
      window.scrollBy({
          top: 1200, // التمرير لأسفل بمقدار 200 بكسل
          behavior: 'smooth' // تمرير سلس
      });
  });