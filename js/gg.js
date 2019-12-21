// 轮播图
var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('point');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');

var index = 0;//index表示第几张图片在展示--第index长图片有active这个类名
//第几个点在展示
var time = 0;//定时器图片跳转参数
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}
var goIndex = function () {
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';
}
var goNext = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}
var goPre = function () {
    if (index > 0){
        index--;
    }else{
        index = 4;
    }
    goIndex();
}
    goNextBtn.addEventListener('click', function () {
        goNext();
    })
    goPreBtn.addEventListener('click',function () {
        goPre();
    })
for (var i = 0;i<points.length;i++) {
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index')
        index = pointIndex;
        goIndex();
        time = -10;
    })
}
setInterval(function () {
    time ++;
    if (time == 20) {
        goNext();
        time = 0;
    }
},400)


// 搜索框
var all_b = document.getElementsByTagName("b");
var all_li = document.getElementsByClassName("tab")[0].getElementsByTagName("li");
var all_span = document.getElementsByClassName("tab")[0].getElementsByTagName("span");
var all_search = document.getElementsByClassName("search")
for (var i = 0; i < all_li.length - 3; i++) {
    all_li[i].index = i;
    all_li[i].onclick = function() {
        for (var i = 0; i < all_li.length - 3; i++) {
            all_li[i].className = "";
            all_search[i].className = "search";
        }
        this.className = "info-active2";
        all_search[this.index].className = "search show";
    }
}
for (var i = 0; i < all_b.length; i++) {
    all_b[i].onclick = function() {
        var siblings = this.parentNode.children;
        for (var i = 0; i < siblings.length; i++) {
            siblings[i].className = "";
        }
        this.className = "info-active1";
    }
}

// 热门景区

var hotSpan = document.getElementById("hot").getElementsByTagName("span");
var hotlist = document.getElementById("hot").getElementsByClassName("tab-img");
for (var i = 0; i < hotSpan.length; i++) {
    hotSpan[i].index = i;
    hotSpan[i].onmouseover = function() {
        for (var i = 0; i < hotSpan.length; i++) {
            hotSpan[i].className = "";
            hotlist[i].className = "tab-img";
        }
        this.className = "active";
        hotlist[this.index].className = "tab-img show1";
    }
}