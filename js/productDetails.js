/*
Created  by Mwq  on  2018/4/13
*/
var questionController = function() {
    var that = this;
    this.init = function () {
        this.regEvent();
        this.jobTiao()


    }
    this.regEvent = function () {

        that.initDataList();

    }
    this.initDataList = function () {
        // let data = JSON.parse(window.sessionStorage.getItem("data"));
        var wyid =   window.sessionStorage.getItem("wyid");
        var ids =  window.sessionStorage.getItem("ids")
        var url = "http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/index.php/index/appmessage/index";
        $.ajax({
            url:url,
            type:"post",
            dataType:"JSON",
            data:{
                type:ids,
                id:wyid
            },
            success:function(res){
                var p = res.data.message[0];
                var data = res.data.right;
                var tArr =[];
                var dataArr =[],
                    dataBrr = [],
                    dataArr2 = [];
                tArr.push(
                    `<h4 style="font-weight: 800; font-size: 18px;margin:15px 0px;" data_details1 ="${data[0].type}">
                      ${data[0].type}
                    </h4>`
                )
                $("#title").html(tArr.join(''))
                var type =(data[0].type)
                window.sessionStorage.setItem("dataRm",type)
                $.each(data,function (index,key) {
                    dataArr2.push(
                        `<div class="row" style="margin-bottom:40px;cursor: pointer" data_details ="${key.id}">`,

                        `<ul style="padding:0;line-height:2;">`,

                        `<li class="col-md-4 col-xs-4" style="margin：0px 0px;>`,
                        `<a class="default" ><img src="${key.picture1}" alt="" class="img-responsive" style="border: 1px solid #cccccc;    margin: 0px 10px;"></a>`,
                        `</li>`,
                        `<li class="col-md-8 col-xs-8"  style="margin：0px；">`,
                        `<a class="default"  style="text-decoration: none;font-size: 12px;color: #0f0f0f;"> ${key.title} </a>`,
                        `</li>`,
                        `</ul>`,
                        `</div>`
                    )
                    $("#rightTitle").html(dataArr2.join(''))


                })
                dataArr.push(
                    `<h5><a href="#">首页&gt;产品中心&gt;${p.type}</a></h5>`
                )
                $("#tities").html(dataArr.join(''));

                dataBrr.push(
                    `<h4 class="" style="padding: 15px 0px">${p.title}</h4>`,
                    `<div class="col-xs-12 col-md-12" style="background-color: #e8e8e8;padding: 10px 0px 10px 20px;">`,
                    `<span style="margin-right: 20px;">发布日期:${p.time}</span>`,


                    `</div>`,
                    `<div class="col-md-12 " style="margin:20px 0px 0px 0px;padding: 0px;">`,
                    ` <img src="${p.picture1}" alt="" class="img-responsive">`,
                    `</div>`,
                    `<div class="col-md-12 col-xs-12" style="margin:20px 0px 30px 0px;padding: 0px;">`,
                    `<p>${p.content}</p>`,
                    `</div>`

                )
                $("#authour").html(dataBrr.join(''))



            }
        })

    }

    this.jobTiao = function () {
        $(document).delegate("#rightTitle div", "click", function () {

            var id=($(this).attr("data_details"));
            var type = (window.sessionStorage.getItem("dataRm"));
            window.sessionStorage.setItem("wyid",id);
            window.sessionStorage.setItem("ids",type);
            window.location.href="productDetails.html";



        });
    }
}
$(function () {
    var qst = new questionController();
    qst.init();
})