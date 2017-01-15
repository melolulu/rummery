define(function (require, exports, module) {
    /*IE HTML5标签支持*/
    require('./dist/html5shiv.min.js');
    /*JQ 无缝滚动依赖*/
    require('./dist/jquery.cxscroll.min.js');
    /*index页-滚动初始化*/
    $(".scroll_horizontal").cxScroll();
    /*photo页-日期选择控件*/
    require('./dist/bootstrap-datetimepicker.js');
});