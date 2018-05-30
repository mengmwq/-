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
        this.jobTiao()

    }

    this.initDataList = function () {


        let data = JSON.parse(window.sessionStorage.getItem("data"));

        let res = JSON.parse(window.sessionStorage.getItem("dataRm"))
        console.log(data);
        var dataArr =[],
            dataBrr = [];

        dataArr2 = []
        dataArr.push(
            `<h5><a>精新商学院 > ${data.type}&gt;${data.title}</a></h5>`

        )
        $("#tities").html(dataArr.join(''));

        dataBrr.push(
            `<h4 class="" style="padding: 15px 0px">${data.title}</h4>`,
            `<div class="col-xs-12 col-md-12" style="background-color: #e8e8e8;padding: 10px 0px 10px 20px;">`,
            `<span style="margin-right: 20px;">来源:${data.author}</span>`,

            `<span>时间：${data.time}</span>`,
            `</div>`,
            `<div class="col-md-12 " style="margin:20px 0px 0px 0px;padding: 0px;">`,
            ` <img src="${data.picture}" alt="" class="img-responsive">`,
            `</div>`,
            `<div class="col-md-12 col-xs-12" style="margin:20px 0px 30px 0px;padding: 0px;">`,
            `<p>${data.content}</p>`,
            `</div>`


        )
        $("#authour").html(dataBrr.join(''))

        var dataArr2 = [];
        $.each(res,function (index,key) {
            dataArr2.push(

                `<li class="col-md-12  padding-0" style="">`,
                `<a class="default" data_details ="${key.id}" >${key.title}</a>`,
                `</li>`
            )
            $("#rmzxAA").html(dataArr2.join(''))
        })

    }
    this.jobTiao = function () {
        $(document).delegate("#rmzxAA a,#zxgg a", "click", function () {
            var url = "http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/index.php/index/message/index";
            var id=($(this).attr("data_details"));
            //console.log(id)
            $.ajax({
                url:url,
                type:"post",
                dataType:"JSON",
                data:{id:id},
                success:function (res) {
                    var data=(res.data.message);
                    // console.log(data,333)
                    var res = (res.data.hot_message);
                    window.sessionStorage.setItem("dataRm",JSON.stringify(res))
                    window.sessionStorage.setItem("data",JSON.stringify(data[0]));
                    window.location.href="businessCollegeInformation.html";

                }
            })





        });
    }



    that.NewsDetails =function(){
        //console.log("#NewsDetails")
        $(document).delegate("#News a,#hot_message a","click",function () {
            var id=($(this).attr("data_details"));
            console.log(id)

            $.ajax({
                url:"http://out.ccsc58.cc/DATA_PORT_JINGXINXIANGNENG_1.01/jxxn/public/index.php/index/message/index",
                dataType:"JSON",
                type:"post",
                data:{id:id},
                success:function (res) {
                    //console.log(res,222222222)

                    var data=(res.data.message);
                    console.log(data,333)
                    var res = (res.data.hot_message);
                    window.sessionStorage.setItem("dataRm",JSON.stringify(res))



                    window.sessionStorage.setItem("data",JSON.stringify(data[0]));
                    window.location.href="businessCollegeInformation.html";

                }
            })
        })
    }
}
$(function () {
    var qst = new questionController();
    qst.init()
})