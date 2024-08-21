$(document).ready(function () {
    var imgWrap = [];
    var imgSrcArr = [
        'images/part2-1-right-0.jpg',
        'images/part2-1-right-1.jpg',
        'images/part2-1-right-2.jpg',
        'images/part2-2-right-0.jpg',
        'images/part2-2-right-1.jpg',
        'images/part2-2-right-2.jpg',
        'images/part2-2-right-3.jpg',
        'images/part2-2-right-4.jpg',
    ];
    function preloadImg(arr) {
        for (var i = 0; i < arr.length; i++) {
            imgWrap[i] = new Image();
            imgWrap[i].src = arr[i];         
        }
    }
    preloadImg(imgSrcArr);

    var part2reasonArr = [
        '<p>这些年我国始终紧抓大流域的治理，但对小流域的治理才刚刚开始。因小流域治理效益较低，数量多且分散各处，本身工程措施就比较弱，大大加剧了治理难度，国家在拨款等方面不可能面面俱到。当雨季来临时，小河道狭窄且长期缺乏疏通措施，更易引发洪水，留给人们的应对时间也更短。所以目前的治理难点主要集中在相对偏僻且分散的中小河流区域及乡镇地区。<p>',
        '<p>据水利部的数据，中国有 9.8 万多座水库，4000 多座大中型水库在保证工程自身安全的同时，还要发挥防洪功能，另外 9.4万多座是小型水库，一些水库不同程度存在病险，是防汛工作的薄弱环节和突出短板，因此有必要对一些水库进行功能性改建和运行方式改革。</p>',
        '<p>人口的快速增加让农业用地、住房用地迅速扩张，大量占领湖泊、湿地，使大自然调控洪水的能力下降<p>',
        '<p>长江一些支流和上游山洪沟的防洪能力还不高，局部区域发生洪水造成损失的局面一时还难以全部避免，只能做好山洪灾害防御，加强防洪工程巡查排险，尽早发现险情，做好抢险物资和人力准备。</p>',
        '<p>3 月底水利部已经预测可能发生大洪水，要以超标准洪水的防御预案应对今年防汛。然而在危机到来前有关部门有所松懈，等到 6 月 11 日的新闻发布会上，水利部才提到要求各地在 6 月 30 日之前完成预案编制。<p><p>在这一个月里，中国有超千万的人口受灾，损失近 300 亿元的财产。</p>',
        '<p>从检测范围看，目前监测预警主要是国家和省级相对完善，市、县、乡级还做得不足。从检测结果看，华南地区因大范围的气流变化而引起的降水相对好预测，但局部出现的对流型降水难以准确预测，例如山谷地区。</p>'
    ]
    var fixeddistance = $(window).outerHeight() * 5;


    //计算地图的高度为浏览器高度时，地图的宽度
    var mapratio = 2456 / 2000;
    var mapwidth = $(window).height() / mapratio;
    var mapheight = $(window).height()
    var rightwidth = 0;
    //设置part2right1、part2right2区域的宽度
    if (mapwidth > 600) {
        rightwidth=600;
        $("#part2right1").css("width", 600);
        $("#part2right2").css("width", 600);
        $(".part2map").css("width", 600);

        mapheight = 600 * mapratio;
        $("#part2right1").css("height", mapheight);
        $("#part2right2").css("height", mapheight);
        $(".part2map").css("height", mapheight);
    } else {
        rightwidth=mapwidth;
        $("#part2right1").css("width", mapwidth);
        $("#part2right2").css("width", mapwidth);
        $(".part2map").css("width", mapwidth);
        $("#part2right1").css("height", mapheight);
        $("#part2right2").css("height", mapheight);
        $(".part2map").css("height", mapheight);
    }

    //设置sectiontitle、part2-1、part2-2的宽度
    var totalwidth = 600 + rightwidth;
    $("#part2-1").css("width",totalwidth);
    $("#part2-2").css("width",totalwidth);
    $(".sectiontitle").css("width",totalwidth);

    //part2第1部分地图的固定距离
    var part2box1_last_height = $("#part2box1-last").outerHeight();
    var part2mapduration1 = 0;
    if (mapheight > part2box1_last_height) {
        var d = mapheight - part2box1_last_height;
        $("#part2box1-last").css("margin-bottom",d+100)
        part2mapduration1 = $("#part2scrollend1").offset().top - $("#part2scrollbegin1").offset().top -
            d - 100;
    } else {
        part2mapduration1 = $("#part2scrollend1").offset().top - $("#part2scrollbegin1").offset().top;
    }



    //part2第2部分地图的固定距离
    var part2box2_last_height = $("#part2box2-last").outerHeight();
    var part2mapduration2 = 0;
    if (mapheight > part2box2_last_height) {
        var d = mapheight - part2box2_last_height;
        part2mapduration2 = $("#part2scrollend2").offset().top - $("#part2scrollbegin2").offset().top -
            d - 100;
    } else {
        part2mapduration2 = $("#part2scrollend2").offset().top - $("#part2scrollbegin2").offset().top;
    }




    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#slide_wrapper1",
            duration: fixeddistance,
            triggerHook: 0
        })
        .setPin("#slide_wrapper1")
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#title2-1",
            triggerHook: 0
        })
        .setClassToggle("#slide1", "fadeout")
        .addTo(controller)

    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#title3-1",
            triggerHook: 0
        })
        .setClassToggle("#slide2", "fadeout")
        .addTo(controller)

    //part2map1  固定part2地图  
    var scene4 = new ScrollMagic.Scene({
            triggerElement: "#part2right1",
            duration: part2mapduration1,
            triggerHook: 0
        })
        .setPin("#part2right1")
        .addTo(controller);

    //切换part2地图
    var scene5 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger1-1",
            triggerHook: 0
        })
        .setClassToggle("#part2map1", "fadeout")
        .addTo(controller)

    //显示marker1
    var scene6 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger1-1",
            triggerHook: 0
        })
        .setClassToggle("#marker1", "show")
        .addTo(controller)

    //切换part2地图
    var scene7 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger1-2",
            triggerHook: 0
        })
        .setClassToggle("#part2map2", "fadeout")
        .addTo(controller)

    //隐藏marker1    
    var scene8 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger1-2",
            triggerHook: 0
        })
        .setClassToggle("#marker1", "hide")
        .addTo(controller)


    var scene9 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger1-2",
            triggerHook: 0
        })
        .setClassToggle("#marker2", "show")
        .addTo(controller)


    //part2map1  固定part2 湖南湖北 
    var scene10 = new ScrollMagic.Scene({
            triggerElement: "#part2right2",
            duration: part2mapduration2,
            triggerHook: 0
        })
        .setPin("#part2right2")
        .addTo(controller);

    //切换part2地图
    var scene11 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger2-1",
            triggerHook: 0
        })
        .setClassToggle("#part2map4", "fadeout")
        .addTo(controller)

    var scene12 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger2-1",
            triggerHook: 0
        })
        .setClassToggle("#marker3", "show")
        .addTo(controller)

    //切换part2地图
    var scene13 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger2-2",
            triggerHook: 0
        })
        .setClassToggle("#part2map5", "fadeout")
        .addTo(controller)

    var scene14 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger2-2",
            triggerHook: 0
        })
        .setClassToggle("#marker3", "hide")
        .addTo(controller)

    //切换part2地图
    var scene15 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger2-3",
            triggerHook: 0
        })
        .setClassToggle("#part2map6", "fadeout")
        .addTo(controller)


    var scene16 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger2-4",
            triggerHook: 0
        })
        .setClassToggle("#part2map7", "fadeout")
        .addTo(controller)


    var scene16 = new ScrollMagic.Scene({
            triggerElement: "#part2_trigger2-4",
            triggerHook: 0
        })
        .setClassToggle("#marker4", "show")
        .addTo(controller)

    var scene17 = new ScrollMagic.Scene({
            triggerElement: "#ani_bg",
            duration: 500,
            triggerHook: 0
        })
        .setPin("#ani_bg")
        .addTo(controller);

    var scene18 = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            triggerHook: 0
        })
        .setClassToggle(".cloud", "fadein")
        .addTo(controller)

    var scene19 = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            triggerHook: 0
        })
        .setClassToggle(".arrow", "fadein")
        .addTo(controller)

    var scene20 = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            triggerHook: 0
        })
        .setClassToggle(".pool", "fadein")
        .addTo(controller)

    var scene21 = new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            triggerHook: 0
        })
        .setClassToggle(".bluearrow", "fadein")
        .addTo(controller)

    var rainaudio = document.getElementById("rainaudio");
    var scene22 = new ScrollMagic.Scene({
            triggerElement: "#ani_bg",
            duration: 500,
            triggerHook: 0
        })
        .on("enter", function (e) {
            rainaudio.play();
        })
        .on("leave", function (e) {
            rainaudio.pause();
        })
        .addTo(controller);

    //part2结尾点击事件处理
    $(".part2endcircle").on("mouseover", function () {
        var num = $(this).data("num") - 1;
        var desc = part2reasonArr[num];
        $("#part2reason").html(desc);
    })
})