$(function () {
    $('#myTab').find('a').each(function () {


        if (this.href == document.location.href || document.location.href.search(this.href) >= 0) {

               $(this).css("color","#ffffff")


            $(this).parent().addClass('a'); // this.className = 'active';

        }
    });
  /*  $('.nav-tabs').find('a').each(function () {

        if (this.href == document.location.href || document.location.href.search(this.href) >= 0) {
            $(this).parent().addClass('ab'); // this.className = 'active';
        }
    });*/
})


//通用返回顶部
$(function(){
    //首先将#back-to-top隐藏
    $("#slider-goTop").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop()>100){

            $("#slider-goTop").fadeIn();
        }else{
            $("#slider-goTop").fadeOut();
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#slider-goTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
    //返回顶部等滑块hover事件
    $('#slider-phone,#slider-wechat').hover(
        function(){
            $(this).next().show();
        },
        function(){
            $(this).next().hide();
        }
    );

    $("image").attr("class","img-responsive")
});


 function GetRequest() { //获取标的ID
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
$(document).ready(function() {
    if(!GetRequest()) {
        return;
    }
    if(GetRequest().name == '冰板') {
        setTimeout(function() {
            $("#slab").trigger("click").addClass("active2").siblings().removeClass("active2");
        }, 100)
    }
    if(GetRequest().name == '温度计') {
        setTimeout(function() {
            $("#initThermometer").trigger("click").addClass("active2").siblings().removeClass("active2");
        }, 100)
    }
    if(GetRequest().name == '云平台') {
        setTimeout(function() {
            $("#initcloudPlatform").trigger("click").addClass("active2").siblings().removeClass("active2");
        }, 100)
    }



})

function onKeyDown(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];

    if(e && e.keyCode==13){ // enter 键
        var a=($(".form-control").val())
        if(a  =="保温箱"){
            window.location .href="product.html"
        }else if(a=="冰板"){
          /*  window.location .href="product.html"*/
            if(GetRequest().name) {
                $("#slab").trigger("click").addClass("active2").siblings().removeClass("active2");
            } else {
                window.location .href="product.html?name="+a;

            }

        }else if(a=="温度计"){
            if(GetRequest().name) {
                $("#initThermometer").trigger("click").addClass("active2").siblings().removeClass("active2");
            } else {
                window.location .href="product.html?name="+a;

            }



        }else if(a=="云平台"){
            if(GetRequest().name) {
                $("#initcloudPlatform").trigger("click").addClass("active2").siblings().removeClass("active2");
            } else {
                window.location .href="product.html?name="+a;

            }
            $("#initcloudPlatform").trigger("click")

        }else{
            window.location .href="businessCollege.html"
        }
    }

}

