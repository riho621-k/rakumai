// スマホ用のハンバーガーメニューが押された時
document.querySelector('.sp-menu-btn').addEventListener('click', function(){
    document.querySelector('.sp-menu').classList.toggle('is-active');
    document.querySelector('.sp-menu-line').classList.toggle('is-active');
});


//お箸拡大
var hasi = document.querySelector('.img-hasi');
var hasi_id = document.getElementById('hasi-id');
var vw = window.innerWidth / 100;

window.addEventListener("scroll", scroll);
function scroll() { 

    
    var y = window.scrollY;

    //お箸処理
    if (y >= 800) { //これ以上は消す
        hasi_id.style.opacity = 0;
    }
    else if (y >= 300) { //少しずつ大きく
        hasi_id.style.width = (80 + y) + 'vw';
        hasi_id.style.top = 136 - (y / 4) + 'vw';
        hasi_id.style.left = 33 - (y / 10) + 'vw';
        //console.log('width ->' + (80 + y));
    } 
    else { //初期設定
        hasi_id.style.top = 136 + 'vw';
        hasi_id.style.left = 33 + 'vw';
        hasi_id.style.width = 80 + 'vw';
        hasi_id.style.opacity = 1;
    }
}

var kurt_btn = document.getElementById('fixed_kurt_id');
var kurt_box_id = document.getElementById('kurt_box_id');
var kurt_box = document.querySelector(".kurt_box");

var item_array = ['sample_item','discount_item','normal_item','suihanki_item','water_item'];

function kurtRestart() { // カートのアニメを再表示
    kurt_btn.style.display = 'inline';
    kurt_box.className = 'kurt_box';
    window.requestAnimationFrame(function(time) {
        window.requestAnimationFrame(function(time) {
            kurt_box.className = "kurt_box kurt_anime_class";
        });
    });
}

function kurtCheck(item_id) { // カートに追加ボタンが押された時の処理

    //呼び出し元のselect要素取得
    var select = document.getElementById(`${item_id}_id`);
    if (select.value === '0') { 
        document.getElementById(`${item_id}_btn_id`).textContent = 'カートに入れる';
        document.getElementById(`${item_id}_kurt_id`).style.display = 'none';

    } else {
        document.getElementById(`${item_id}_btn_id`).textContent = 'カートに入っています';

        switch (item_id) {
            case item_array[0]: // sample_item
                text = 'サンプル 1個 500円';
                break;
            
            case item_array[1]: // discount_item
                text = `らくまい定期便 ${select.options[select.value].textContent}`;
                break;

            case item_array[2]: // normal_item
                text = `らくまい通常注文 ${select.options[select.value].textContent}`;
                break;
            
            case item_array[3]: // suihanki_item
                text = `らくらく炊飯器 ${select.options[select.value].textContent}`;
                break;
            
            case item_array[4]: // water_item
                text = `最後に入れるお水 ${select.options[select.value].textContent}`;
                break;
        }

        //カート内ポップアップの中のテキストを代入
        document.getElementById(`${item_id}_kurt_id`).textContent = text;
        document.getElementById(`${item_id}_kurt_id`).style.display = 'inline';
    }
    
    //1以上のアイテムが選択されているselectの数を数える
    var item_value = 0;
    for (var i = 0; item_array.length > i; i++) {

        if (document.getElementById(`${item_array[i]}_id`).value >= 1) {
            item_value ++;
        }
    }

    //カートボタンの表示を変える
    if (item_value >= 1) {
        kurtRestart();       
    } else {
        kurt_btn.style.display = 'none';
    }
}

function kurtClick(){
    console.log('kurtClick');
    //ここにクリックした時の処理を作りたい
}
