var imageNames = ['stickman1.png', 'stickman2.png', 'stickman3.png'];

$(function(){
    var canvas = document.getElementById('canvas');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var context = canvas.getContext('2d');
    var frames = [];

    $.each(imageNames, function (i, imageName) {
        var image = new Image();
        image.onload = function () {            
            frames.push(image);
        };
        image.src = imageName;
    });    

    var imageIndex = 0;
    var startX = 0;
    var intervalId = setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(frames[imageIndex], startX, 0, 70, 112);

        startX += 12;
        if (startX > canvas.width) {
            startX = 0;
        }
        imageIndex = (imageIndex + 1) % imageNames.length;
    }, 33);    
});