$(function(){
$("body").bind('touchmove', function(e){e.preventDefault()}); //스크롤방지
	var flag=false;
	$("#bar_chatting").click(function(){
		$('#jb-footer').slideDown('slow', function() {
		if(flag==false){
			$("#jb-footer").css("transition-property","height");
			$("#jb-footer").css("transition-duration",".5s");
			$("#jb-footer").css("height","60%");
			$("#bar_chatting").css("height","12%");
			
			
			$("#bar_chatting").attr("src","images/chatting_bar_down.png");
			flag=true;
		}else{
			$("#jb-footer").css("height","8%");
			$("#bar_chatting").css("height","100%");
			$("#bar_chatting").attr("src","images/chatting_bar_up.png");
			flag=false;
		}
		})
	})
	
	
	

})//onload


function textScroll(scroll_el_id) {
	this.objElement = document.getElementById(scroll_el_id);
	this.objElement.style.position = 'relative';
	this.objElement.style.overflow = 'hidden';

	this.objLi = this.objElement.getElementsByTagName('li');
	this.height = this.objElement.offsetHeight; // li 엘리먼트가 움직이는 높이(외부에서 변경가능)
	this.num = this.objLi.length; // li 엘리먼트의 총 갯수
	this.totalHeight = this.height*this.num; // 총 높이
	this.scrollspeed = 2; // 스크롤되는 px
	this.objTop = new Array(); // 각 li의 top 위치를 저장
	this.timer = null;
	
	for(var i=0; i<this.num; i++){
		this.objLi[i].style.position = 'absolute';
		this.objTop[i] = this.height*i;
		this.objLi[i].style.top = this.objTop[i]+"px";
	}
}

textScroll.prototype.move = function(){
	for(var i=0; i<this.num; i++) {
		this.objTop[i] = this.objTop[i] - this.scrollspeed;
		this.objLi[i].style.top = this.objTop[i]+"px";
	}
	if(this.objTop[0]%this.height == 0){
		this.jump();
	}else{
		clearTimeout(this.timer);
		this.timer = setTimeout(this.name+".move()",50);
	}
}

textScroll.prototype.jump = function(){
	for(var i=0; i<this.num; i++){
		if(this.objTop[i] == this.height*(-2)){
			this.objTop[i] = this.objTop[i] + this.totalHeight;
			this.objLi[i].style.top = this.objTop[i]+"px";
		}
	}
	clearTimeout(this.timer);
	this.timer = setTimeout(this.name+".move()",3000);
}

textScroll.prototype.start = function() {
	this.timer = setTimeout(this.name+".move()",3000);
}