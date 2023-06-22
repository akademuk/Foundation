document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var problemsBlock = document.getElementById('problems');
        var problemsBlockPosition = problemsBlock.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (problemsBlockPosition < screenHeight) {
            // Добавьте классы к блокам
            var problemsImg1 = document.getElementById('problems-img1');
            var problemsImg2 = document.getElementById('problems-img2');
            var problemsImg3 = document.getElementById('problems-img3');

            problemsImg1.classList.add('animation-active1');
            problemsImg2.classList.add('animation-active2');
            problemsImg3.classList.add('animation-active3');
        } else {
            // Удалите классы из блоков
            var problemsImg1 = document.getElementById('problems-img1');
            var problemsImg2 = document.getElementById('problems-img2');
            var problemsImg3 = document.getElementById('problems-img3');

            problemsImg1.classList.remove('animation-active1');
            problemsImg2.classList.remove('animation-active2');
            problemsImg3.classList.remove('animation-active3');
        }
    });
});