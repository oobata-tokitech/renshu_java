    (function(){
        "use strict";

    var btn = document.getElementById("btn");

    btn.addEventListener("click",function(){
        var n = Math.floor(Math.random() * 3);
        
        if (n === 0) {
        this.textContent='大吉';
    }
    else if (n === 1) {
        this.textContent='中吉';
    }
    else if (n === 2) {
        this.textContent='凶';
    }
        //this.textContent=n;
    },{once:true});
    //ボタンが押された時にはクラス名pushedがつく
    btn.addEventListener("mousedown",function(){
        this.className ="pushed";
    },{once:true});
    btn.addEventListener("mouseup",function(){
        this.className ="";
    },{once:true});
})();
