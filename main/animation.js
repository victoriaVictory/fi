document.addEventListener('DOMContentLoaded', function () {
  const runningTextContainer = document.getElementById('running-text-container');
  const runningText = document.querySelector('.running-text');

  function setContainerWidth() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const textWidth = runningText.offsetWidth;
    const numberOfClones = Math.ceil(10000000 / 1);
    
    let i = 1;

    function createClone() {
      const clone = runningText.cloneNode(true);
      runningTextContainer.appendChild(clone);
      i++;

      if (i < numberOfClones) {
        // Устанавливаем небольшую задержку перед созданием следующего клон
        setTimeout(createClone, 0);
      }
    }

    createClone(); // Начинаем процесс клонирования
  }

  setContainerWidth(); // Вызываем при загрузке страницы
  window.addEventListener('resize', setContainerWidth); // Вызываем при изменении размеров окна
});
