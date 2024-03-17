window.addEventListener('DOMContentLoaded', function() {
    var originalBlocksHTML = {}; // объект для хранения исходного HTML содержимого каждого блока

    // Сохраняем исходное HTML содержимое каждого блока при загрузке страницы
    function saveOriginalBlocksHTML() {
        var blocks = document.querySelectorAll('.page-3-block');
        blocks.forEach(function(block) {
            originalBlocksHTML[block.id] = block.innerHTML;
        });
    }

    // Восстанавливаем исходное HTML содержимое каждого блока
    function restoreOriginalBlocksHTML() {
        var blocks = document.querySelectorAll('.page-3-block');
        blocks.forEach(function(block) {
            if (originalBlocksHTML.hasOwnProperty(block.id)) {
                block.innerHTML = originalBlocksHTML[block.id];
            }
        });
    }

    // Перемещаем изображения в начало блоков при ширине экрана <= 900px
    function rearrangeImages() {
        var screenWidth = window.innerWidth;
        var blocks = document.querySelectorAll('.page-3-block');
        blocks.forEach(function(block) {
            var img = block.querySelector('img');
            if (screenWidth <= 900 && img && block.lastElementChild === img) {
                block.prepend(img);
            }
        });
    }

    // Сохраняем исходное HTML содержимое каждого блока при загрузке страницы
    saveOriginalBlocksHTML();

    // Вызываем функцию перемещения изображений и восстановления исходного HTML содержимого блоков при изменении размера окна
    window.addEventListener('resize', function() {
        restoreOriginalBlocksHTML();
        rearrangeImages();
    });
});
