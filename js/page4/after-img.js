window.addEventListener('DOMContentLoaded', function() {
    function rearrangeImage() {
        var img = document.querySelector('.page4-back-img');
        var page4Div = document.querySelector('.page-4');
        var formDiv = document.querySelector('.div-for-form');

        if (window.innerWidth <= 900) {
            if (formDiv.lastElementChild !== img) {
                formDiv.appendChild(img);
            }
        } else {
            if (page4Div.firstElementChild !== img) {
                page4Div.insertBefore(img, formDiv);
            }
        }

        // Изменяем src изображения в зависимости от ширины экрана
        if (window.innerWidth <= 900) {
            img.src = "assets/page4/back-img-mobile.png";
        } else {
            img.src = "assets/page4/back-img.png";
        }
    }

    rearrangeImage(); // Вызываем функцию при загрузке страницы

    // Вызываем функцию при изменении размера окна
    window.addEventListener('resize', function() {
        rearrangeImage();
    });
});
