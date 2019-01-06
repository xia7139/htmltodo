/**
 * Created by chengxia on 2019/1/6.
 */
//*******************************JavaScript扩展*******************************************
/**
 * javascript中格式化日期的函数，如下是一个例子：
 var now_time = new Date();
 var now_time_str = now_time.format("YYYYMMdd hh:mm_ss");
 * */
Date.prototype.format = function(format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

/*
 filter()兼容旧环境
 filter 被添加到 ECMA-262 标准第 5 版中，因此在某些实现环境中不被支持。可以把下面的代码插入到脚本的开头来解决此问题，
 该代码允许在那些没有原生支持 filter 的实现环境中使用它。该算法是 ECMA-262 第 5 版中指定的算法
 */

Array.prototype.filter = Array.prototype.filter || function(func) {
        var arr = this;
        var r = [];
        for (var i = 0; i < arr.length; i++) {
            if (func(arr[i],i,arr)) {
                r.push(arr[i]);
            }
        }
        return r;
    }

//*******************************JavaScript扩展*******************************************