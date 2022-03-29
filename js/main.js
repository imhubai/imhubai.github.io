
//main.js
//made with ♡ by 狐白
$(document).ready(findcookie());
function findcookie(){}
	function hlxlogin(){
		var hlx_key = $('.keyinput').val();
		var hlx_id = $('.idinput').val();
		if (!hlx_key==""&&!hlx_id==""){
			$.getJSON("http://floor.huluxia.com/user/info/ANDROID/2.1?platform=2&gkey=000000&app_version=0&versioncode=0&market_id=tool_web&_key="+hlx_key+"&device_code=&user_id="+hlx_id             ,function(data){
				if(data["nick"]){
					var nick = data["nick"]
					var avatar = data["avatar"]
				    var age = data["age"]
                    var gender = data["gender"]
                    var credits = data["credits"]
                    var sign = data["signature"]
                    var level = data["level"]
                    var exp = data["exp"]
                    var nextexp = data["nextExp"]
                    var postcount = data["postCount"]
                    var followercount = data["followerCount"]
                    var followingcount = data["followingCount"]
                    var favoritecount = data["favoriteCount"]
                    var integralnick = data["integralNick"]
                    
                    $(".nametext").text(nick);
                    $("#signature").text("个性签名:"+sign);
                    if (gender==1){
                        var genderCN ="女"
                            }
                                else
                                    {
                            var genderCN = "男"
                            }
                    $(".statustext").text("性别:"+genderCN+" 年龄:"+age+" 等级:"+level+" 经验:"+exp+"/"+nextexp);
                    $("#huluc").text(credits);
                    $("#postc").text(postcount);
                    $("#followerc").text(followercount);
                    $("#followingc").text(followingcount);
                    
				}
			}
		)}
		else{}
		}
   
clickcount = 0
function startsign(){
    clickcount++
    var name = $(".nametext").text()
    if (name == "未登录"){
  $(".signtext").text("板块签到娘:客官,登录后才能调戏妾身喵~")
  setTimeout(function () {
      if (clickcount >= 25){
    $(".signtext").text("板块签到娘:啊~啊~嗯嗯~不要 喵~ 不要~")
}else{
         $(".signtext").text("板块签到娘:今天签到了喵？")
}
    }, 1500);
}
}