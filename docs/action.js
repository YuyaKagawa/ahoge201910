// 最初に画像を読み込み、表示
$(document).ready(function () {
    c = document.getElementById("canvas"); // canvasの要素取得
    alert(c);
    ctx = c.getContext("2d") // canvasに描画できるように

    ctx.fillStyle = "red"; // 色は赤
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 長方形を表示

    imgsrc = ["img/あなたの人生.png", "img/キャンセルしますか.png", "img/l.png", "img/キャンセルできません.png"]; // 画像の配列
    imgArray = new Array(); // imageオブジェクトの配列の初期化
    imglen = imgsrc.length; // imageの数

    var imgLoaded = 0; // ロードできた画像の数

    // 1個ずつ画像を読み込み
    for (var i = 0; i < imglen; i++) {
        imgArray[i] = new Image(); // imageオブジェクトを追加してゆく

        // 画像を読み込む
        imgArray[i].onload = function () {
            imgLoaded++; // 読み込めたら読み込めた数をプラス

            if (imgLoaded == imglen) { // もし全て読み込めたら
                draw(0); // 表示
            }
        }

        imgArray[i].src = imgsrc[i]; // 画像のパスを指定、この位置でないとなぜかダメ
    };
});

// canvasをクリアする関数
function clearcanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをまっさらに
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 赤い長方形を描く
};

// メインのcanvas表示
function draw(bc) {
    var imgach = 100; // 画像の表示サイズの
    var lpos1 = 400; // 縦棒のx軸の位置
    var lpos2 = 100; // 縦棒のy軸の位置
    var posa = - bc * 40; // 「あなたの〜」の位置

    clearcanvas(); // canvasをクリア

    // 1個ずつ画像を表示
    for (var i = 0; i < imglen-1; i++) {
        switch(i){
            case 0: // 「あなたの〜」
                ctx.drawImage(imgArray[i], lpos1 + posa, lpos2, imgach * 3, imgach);  // (821,263), 3:1
                break;
            case 1: // 「、キャンセル〜」
                ctx.drawImage(imgArray[i], lpos1 + 45, lpos2, imgach * 5, imgach);  // (1367,263), 5:1
                break; 
            case 2: // 「l」
                if (bc < 5){ // ボタンを押された回数が5回未満の場合だけ表示
                    ctx.drawImage(imgArray[i], lpos1, lpos2, imgach * 1.6, imgach); // (165,264), 1.6:1
                };
                break;
        };
    };
};

// 最後の表示
function drawlast(){
    clearcanvas(); // canvasをクリア    
    ctx.drawImage(imgArray[3], (canvas.width-680)/2, (canvas.height-200)/2, 680, 200);  // 「キャンセルできません〜」, (1406,413), 3.4:1
};

var bcount = 1; // ボタンが押された回数

// ボタンが押されたら実行される関数
function cancel() {
    draw(bcount); // 表示

    if (bcount == 5){ // 5回目押されたら
        var b = document.getElementsByClassName("buttons"); // ボタンの要素取得

        // 2つのボタンについて
        for (var i = 0; i < 2; i++){
            b[i].style.visibility="hidden"; // 表示を消す、display=noneと比べてこちらは表示が消えるだけでオブジェクトは依然ある
        };

        // 数秒後に実行
        setTimeout(()=>{
            drawlast(); // 最後の表示
        },3000);
    };

    bcount++; // ボタンが押された回数をインクリメント
};
