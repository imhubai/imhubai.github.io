$(document).ready(load('zhiling'));
function load(filename){
    showTips("加载中...", _searchTop, 3, _searchLeft);

    if (filename == null){
    filename = "zhiling";
}
    if(filename =="zhiling"){
        document.title = "狐白Mud盒子 - 指令"
        }
          if(filename =="wanfa"){
        document.title = "狐白Mud盒子 - 玩法"
        }
          if(filename =="emote"){
        document.title = "狐白Mud盒子 - 表情"
        }
        
        if(filename =="tool"){
            var _searchTop = $('#searchstr').offset().top + 30;
            var _searchLeft = $('#searchstr').offset().left;
    showTips("制作中 不要急", _searchTop, 3, _searchLeft);
        }
    
    $.ajax({
	url: "./files/"+filename+".json",
	type: "GET",
	dataType: "json",
	success: function(data) {
        $("#around_div").remove();
        $(document.body).append("<div id='around_div' class='around_div_c'></div>")
		pageData=data;
		for(var i=0;i<data.length;i++){         
			addnewitem(pageData[i].title,pageData[i].description);
		}
   }
})

function addnewitem(title_str,scr_str) {
    if (scr_str != null){  
     scr_str = scr_str.replace(/\n/gm,"<br\>")
     }
    $("#around_div").append("<div class='itemdiv'><p class='title_p'>"+title_str+"</p><p class='scr_p'>"+scr_str+"</p>");
};
}
var tipsDiv = '<div class="tipsClass"></div>';
        $('#search_box').append(tipsDiv);
 function showTips(tips, height, time, left) {
            var windowWidth = document.documentElement.clientWidth;
            $('.tipsClass').text(tips);
            $('div.tipsClass').css({
                'top' : height + 'px',
                'left' : left + 'px',
                'position' : 'absolute',
                'padding' : '8px 6px',
                'background' : '#000000',
                'font-size' : 14 + 'px',
                'font-weight' : 900,
                'margin' : '0 auto',
                'text-align' : 'center',
                'width' : 'auto',
                'color' : '#fff',
                'border-radius' : '2px',
                'opacity' : '0.8',
                'box-shadow' : '0px 0px 10px #000',
                '-moz-box-shadow' : '0px 0px 10px #000',
                '-webkit-box-shadow' : '0px 0px 10px #000'
            }).show();
            setTimeout(function() {
                $('div.tipsClass').fadeOut();
            }, (time * 1000));
      }
    
function search(){ 
 function addnewitem(title_str,scr_str) {
     if (scr_str != null){  
     scr_str = scr_str.replace(/\n/gm,"<br\>")
     }
    $("#around_div").append("<div class='itemdiv'><p class='title_p'>"+title_str+"</p><p class='scr_p'>"+scr_str+"</p>");
};

var searchText = $('#searchstr').val();
var _searchTop = $('#searchstr').offset().top + 30;
            var _searchLeft = $('#searchstr').offset().left;
            if ($.trim(searchText) == "") {
                showTips("请输入关键字", _searchTop, 3, _searchLeft);
                return;
            }
            else{
    showTips("喵呜~", _searchTop, 3, _searchLeft);
    $("#around_div").remove();
      $(document.body).append("<div id='around_div' class='around_div_c'></div>")
var cunzai = 0
    for(var i=0;i<pageData.length;i++){
      
			if(pageData[i].title.indexOf(searchText)!= -1||pageData[i].description.indexOf(searchText) != -1){
             addnewitem(pageData[i].title,pageData[i].description);
             var cunzai = 1
		}
   
   }
   if (cunzai == 1){
       showTips("找到啦~", _searchTop, 3, _searchLeft);
}
else{
    showTips("没找到喵~", _searchTop, 3, _searchLeft);

}
}

}
