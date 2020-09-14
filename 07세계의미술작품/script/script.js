$(document).ready(function(){

	//메뉴 내비게이션
	$("ul.gnb>li").mouseover(function(){
		$(this).find("ul.sub").stop().slideDown();
 });
 $("ul.gnb>li").mouseout(function(){
		$(this).find("ul.sub").stop().slideUp();
	});

//슬라이드 애니메이션
var slide=$(".slide li"); //슬라이드에 사용할 이미지 배열에 저장
var sno=0; //배열 첨자는 0부터 시작. 이미지 개수 카운트
var lastno=slide.length-1; //마지막 번호는 배열에 있는 아이템 개수-1
function playSlide(){
 //현재 이미지 1초동안 아래로 움직인 후에 다시 위로 보내기 
 $(slide[sno]).animate({
  "top":"300px"
 },1000,function(){
  $(this).css({"top":"-300px"});
 });
 sno++;
 if(sno>lastno) sno=0;
 $(slide[sno]).animate({
  "top":"0"
 },1000);		
}
setInterval(function(){
 playSlide();
},2000);

//공지사항갤러리 탭
$(".notice_gal h3").click(function(){
 $(".notice_gal h3, .notice_gal ul").removeClass("on");
 $(this).addClass("on");
 $(this).next("ul").addClass("on");
});


//레이어 팝업
$(".notice li").eq(0).click(function(){
 $(".modal").show();
});
$(".btn").click(function(){
 $(".modal").hide();
});

}); //ready end