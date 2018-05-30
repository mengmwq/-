/*
Created  by Mwq  on  2018/4/13
*/
var questionController = function() {
    var that = this;
    this.init = function () {
        this.regEvent();


    }
    this.regEvent = function () {

        that.initDataList();

    }
    this.initDataList = function () {
        var wyid =   window.sessionStorage.getItem("q");

        var url = "http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/index.php/index/recruit/index";
        $.ajax({
            url:url,
            type:"post",
            dataType:"JSON",
            data:{
                id:wyid
            },
            success:function(res){
                var p = res.data.info[0];
                console.log(p,9)
                dataBrr = [];
                dataCrr = [];
                dataArr2 = []
                dataBrr.push(
               `<div  style="padding: 10px 0px;font-size: 22px;color: #ffffff;">${p.job}</div>`,
                `<div class="" style="color: #ffffff;padding: 20px 0px">${p.pag}</div>`,
                `<div class="" style="color: #ffffff;">发布时间：${p.time}</div>`

                )
                $("#authour").html(dataBrr.join(''))
                dataCrr.push(
                `<div class="" >`,
                    `<a class="default"  >${p.describe}</a>`,
               ` </div>`
                )
                $("#describe").html(dataCrr.join(''))
                var dataArr2 = [];
                dataArr2.push(
                    `<div class="">`,
                    `<a class="default"  >${p.requirement}</a>`,
                    ` </div>`
                )
                $("#requirement").html(dataArr2.join(''))

            }
        })

    }
}
$(function () {
    var qst = new questionController();
    qst.init();
})

