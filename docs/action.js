function draw() {
    // alert("呼ばれました");
    imgach = 100;
    lpos1 = 400; // 縦棒のx軸の位置
    lpos2 = 100; // 縦棒のy軸の位置
    
    // alert(img.src);

    // ctx.drawImage(img, lpos1 - 5 + 40, lpos2, imgach * 3, imgach);

    // img = new Image();
    // img.src = images[i];
    
    // imga = new Image();
    // imga.src = images[0];

    // imgc = new Image();
    // imgc.src = images[1];

    // imgl = new Image();
    // imgl.src = images[2];

    // imgf = new Image;
    // imgf.src = images[3];

    // ctx.drawImage(imga, lpos1 - 5 + 40, lpos2, imgach * 3, imgach);  // (821,263), 3:1   
    // ctx.drawImage(imgc, lpos1 + 45, lpos2, imgach * 5, imgach);  // (1367,263), 5:1   
    // ctx.drawImage(imgl, lpos1, lpos2, imgach * 1.6, imgach); // (165,264), 1.6:1
};


$(document).ready(function () {
    // alert("11");
    c = document.getElementById("canvas");
    ctx = c.getContext("2d")

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    imgsrc = ["img/あなたの人生.png", "img/キャンセルしますか.png", "img/l.png", "img/キャンセルできません.png"];

    // var color = new Array();
    // color[0] = new Image();
    // color[0].src = "green.png";
    // color[1] = new Image();
    // color[1].src = "blue.png";


    var imgArray = new Array();
    var imglen = imgsrc.length;

    for (var i = 0; i < imglen; i++) {
        imgArray[i] = new Image();
        alert(i+" "+imgsrc[i]);

        // alert("I");

        imgArray[i].onload = function () {
            // alert("good");
            // alert(imgsrc[i]);
            
            if (i == imglen) {
                alert(i+" 読み込まれました、表示します。");
                draw();
            }
        }

        imgArray[i].src = imgsrc[i];
    };

    
    

    // imgArray[1] = new Image();
    // imgArray[1].src = 'images/img/Splash_image2.jpg';

    // for (var i = 0; i < images.length; i++) {
    //     var img = new Image();
    //     img.onload = onload;
    //     img.onerror = onerror;
    //     img.src = myImages[i];
    // }

    
    // var imagesLoaded = 0;

    // img = new Image();

    // img.onload = function () {
    //     alert("good");
    // };
    // img.src = "img/あなたの人生.png";

    // img = images[0];
    // img.onload = function () {
    //     alert("good");
    // };
    // img.src = "img/あなたの人生.png";


    // for (var i = 0; i < imageCount; i++) {
    //     img = new Image();
    //     // alert(i);
    //     // img.src = images[i];
    //     // alert(images[i].onload);

    //     img.onload = function () {  
    //         // alert("good");
    //         imagesLoaded++;
    //         // alert(imagesLoaded);


    //         if (imagesLoaded == imageCount) {
    //             // alert("読み込まれました、表示します。");
    //             draw();
    //         }
    //     }
    //     img.src = images[i];
    // }


    // imga = new Image();
    // imga.src = "img/あなたの人生.png";

    // imgc = new Image();
    // imgc.src = "img/キャンセルしますか.png";

    // imgl = new Image();
    // imgl.src = "img/l.png";

    // imgf = new Image;
    // imgf.src = "img/キャンセルできません.png";
    
    

    // alert(img.src);

    // imgach = 100;
    // lpos1 = 400; // 縦棒のx軸の位置
    // lpos2 = 100; // 縦棒のy軸の位置

    // imga.onload = function () { // あなたの人生
    //     imgc.onload = function () { // キャンセルしますか
    //         imgl.onload = function () { // 縦棒
    //             ctx.drawImage(imga, lpos1 - 5 + 40, lpos2, imgach * 3, imgach);  // (821,263), 3:1   
    //             ctx.drawImage(imgc, lpos1 + 45, lpos2, imgach * 5, imgach);  // (1367,263), 5:1   
    //             ctx.drawImage(imgl, lpos1, lpos2, imgach * 1.6, imgach); // (165,264), 1.6:1  
    //         };
    //     };
    // };

    // imgc.onload = function(){ // キャンセルしますか
    //     ctx.drawImage(imgc, lpos1+45, lpos2, imgach * 5, imgach);  // (1367,263), 5:1   
    // };

    // imgl.onload = function () { // 縦棒
    //     ctx.drawImage(imgl, lpos1, lpos2, imgach * 1.6, imgach); // (165,264), 1.6:1   
    // };

    // imgf.onload = function () {
    //     var imgfh = 150;
    //     ctx.drawImage(imgf, (canvas.width - imgfh * 3.4) / 2, (canvas.height - imgfh) / 2, imgfh*3.4, imgfh); // (1406,413), 3.4:1
    //     // alert(imgf.width);
    // };




});

// function cancel() {
//     alert(lpos1);

//     ctx.drawImage(imga, lpos1 - 5 + 0, lpos2, imgach * 3, imgach);  // (821,263), 3:1 
    
    

// };
