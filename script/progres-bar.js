document.addEventListener('DOMContentLoaded', function () {
    var isProgressBarInitialized = false;

    window.addEventListener('scroll', function () {
        var problemsBlock = document.getElementById('problems');
        var problemsBlockPosition = problemsBlock.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;


        if (problemsBlockPosition < screenHeight && !isProgressBarInitialized) {
            var progressValues = [0.75, 0.5, 0.25];

            $(".progress-container").each(function (index) {
                var progressBar = $(this).find(".progress-bar");
                var progressValue = parseFloat(progressBar.data("value"));

                progressBar.circleProgress({

                    value: progressValue,
                    size: 200,
                    startAngle: -Math.PI / 2,
                    thickness: 10,
                    lineCap: "round",
                    fill: { color: "#B90000" },
                    emptyFill: "#fff",
                    animation: { duration: 2000 }
                });

                $(this).find(".progress-text").text((progressValue * 100).toFixed(0) + "%");
            });

            isProgressBarInitialized = true;
        }
    });
});