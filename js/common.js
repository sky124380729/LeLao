//获取验证码
function sendCode(obj) {
    var countdown = 60;
    var _this = obj;
    return function settime() {
        if (countdown == 0) {
            _this.removeAttribute("disabled");
            _this.value = "获取验证码";
            countdown = 60;
            return;
        } else {
            _this.setAttribute("disabled", true);
            _this.value = "重新发送(" + countdown + ")";
            countdown--;
        }
        setTimeout(function () {
            settime(obj)
        }, 1000)
    }
}


//登录注册的弹出层
function openModel(type) {
    layer.closeAll();
    layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['492px'],
        title: false,
        content: $(`#${type}`)
    });
}



//时间选择器
function getDate(obj) {
    laydate.render({
        elem: obj, //指定元素
        show: true
    });
}


$(function () {
    $.get("../common.html", function (result) {
        $("#modelArea").html(result);
    });
})