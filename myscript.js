    (function(){
        "use strict";

    var btn = document.getElementById("btn");

    btn.addEventListener("click",function(){
        var n = Math.floor(Math.random() * 3);

    switch(n){
        case 0:
        this.textContent= "大吉"
        break

        case 1:
        this.textContent= "中吉"
        break

        case 2:
        this.textContent= "凶"
        break
    }

    /*    if (n === 0) {
        this.textContent='大吉';
    }
    else if (n === 1)　{
        this.textContent='中吉';
    }
    else if (n === 2)　{
        this.textContent='凶';
    }*/
        //this.textContent=n;
    });
    btn.addEventListener("mousedown",function(){
        this.className ="pushed";
    });
    btn.addEventListener("mouseup",function(){
        this.className ="";
    });
})();
