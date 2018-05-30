/*
creat by mwq 2018/5/10*/
var questionController  = function () {
    var that = this;
    this.init = function () {
        this.regEvent();
    }
    this.regEvent = function () {

        this.navBannerImage();
        this.initXr();
        this.NewsDetails()



    }
    this.lunbo =function () {
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });

    }
  this.b = function () {
 $(document).ready(function() {
     $('.autoplay').slick({
            slidesToShow:6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });

    });


  }



    this.navBannerImage = function () {
        var url = "http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/";
        $.ajax({
            url: url,
            type: "post",
            dataType: "JSON",
            success: function (data) {
                var lunboArr = [];
                $.each(data.data.banner, function (ind, key) {
                    lunboArr.push(
                        `<div class="swiper-slide"><img src="${key.picture}" alt="" class="img-responsive"> </div>`
                    )
                   $(".swiper-wrapper").html(lunboArr.join(''));
                })
                that.lunbo();

                //产品列表的渲染
                var data2 = (data.data.product);
                var dateArr1 = [];

                $.each(data2, function (ind, key) {
                    var picture = key.picture;

                    dateArr1.push(
                    `<div id="dok"><img src="${picture}" alt="" class="img-responsive" style="width: 180px;"><p  style="text-align: center;!important;background-color: #ffffff;margin-top: 0px;width:180px;">${key.title}</p></div>`,

                    )

                    $("#www").html(dateArr1.join(''));




                })
                that.b()

                var lunboArr2 = [];
                $.each(data.data.xwzx, function (ind, key) {
                    lunboArr2.push(
                        `<div class="swiper-slide"><img src="${key.picture}" alt="" class="img-responsive"> </div>`
                    )
                    $(".swiper-wrapper.dddddd").html(lunboArr2.join(''));
                })
                that.lunbo();



                //合作伙伴的渲染
                var a = (data.data.link);
                var dateArr = [];
                $.each(a, function (ind, key) {
                    var picture = key.picture;
                    dateArr.push(
                        ' <div class="col-xs-4 col-sm-4 col-md-2  col-lg-2 our-client-item" style="">',
                        '<div class="our-client-logo">',
                        '<img  class="img-responsive center-block" src="' + picture + '" alt="" class="img-responsive">',
                        '</div>',
                        '</div>'
                    )
                    $("#Parents").html(dateArr.join(''));
                })
                //最新动态

               var brr =[];

                brr.push(
                `<li id="zxzx"  > <a   data_detailss = "${data.data.new_message[0].type}" style="cursor: pointer;"> ${data.data.new_message[0].type} </a> </li>`,
                `<li id="hydt" > <a   data_detailss = "${data.data.new_message[0].type}" style="cursor: pointer;"> ${data.data.hy_message[0].type} </a> </li>`

                )

                $("#newss").html(brr.join(''))
                $("#newss li#zxzx").css("background","#3491da")

                $("#newss li").hover(function () {
                    $("#newss li#zxzx").css("background","")
                 $(this).addClass("b").siblings().removeClass("b")

                })


                $(document).delegate("#zxzx a","mouseover",function () {


                   box()


                })
                $(document).delegate("#hydt a","mouseover",function () {
                    var url =  "http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/";
                    $.ajax({
                        url: url,
                        type: "post",
                        dataType: "JSON",
                        success: function (res) {
                            console.log(res.data.hy_message,1111)
                            var dataVrr =[];
                            $.each(res.data.hy_message, function (ind, key) {
                                dataVrr.push(
                                    `<li>`,
                                    `<div class="col-md-10 col-sm-10 col-xs-9 padding-0">`,
                                    `<a style="padding-left:0;" >${key.title}</a>`,
                                    `</div>`,
                                    `<div class="col-md-2 col-sm-2 col-xs-3 xkxq"style="text-align:right;padding:0;padding-right:5px;">`,
                                    `<a data_details ="${key.id}" style="cursor: pointer;">查看详情</a>`,
                                    `</div>`,
                                    `</li>`

                                )
                                $("#News").html(dataVrr.join(''))



                            })


                        }
                    })

                })





            },
            error: function () {
                alert("网络很慢请稍后重试！")
            }
        });
    }
    this.initXr = function(){


        box();
    }

    function box() {

        var url =  "http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/";
        $.ajax({
            url: url,
            type: "post",
            dataType: "JSON",
            success: function (res) {

                var dataVrr =[];
                $.each(res.data.new_message, function (ind, key) {
                    dataVrr.push(
                        `<li>`,
                        `<div class="col-md-10 col-sm-10 col-xs-9 padding-0">`,
                        `<a style="padding-left:0;">${key.title}</a>`,
                        `</div>`,
                        `<div class="col-md-2 col-sm-2 col-xs-3 xkxq"style="text-align:right;padding:0;padding-right:5px;">`,
                        `<a data_details ="${key.id}" style="cursor: pointer;">查看详情</a>`,
                        `</div>`,
                        `</li>`

                    )
                    $("#News").html(dataVrr.join(''))




                })






            }
        })
    }
    that.NewsDetails =function(){
        //console.log("#NewsDetails")
        $(document).delegate("#News .xkxq a","click",function () {

            var id=($(this).attr("data_details"));
            console.log(id)

            $.ajax({
                url:"http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/index.php/index/message/index",
                dataType:"JSON",
                type:"post",
                data:{id:id},
                success:function (res) {
                    console.log(res,222222222)

                    var data=(res.data.message);
                    console.log(data,333)
                    var res = (res.data.hot_message);
                    window.sessionStorage.setItem("dataRm",JSON.stringify(res))



                    window.sessionStorage.setItem("data",JSON.stringify(data[0]));
                    window.location.href="IndustryInformation.html";

                }
            })
        })
    }




}




$(function () {
    var qst = new questionController();
    qst.init();
});
