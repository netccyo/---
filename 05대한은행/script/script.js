$(document).ready(function(){

 //메뉴 효과
	$("ul.gnb>li").mouseover(function(){
		$("ul.sub").stop().slideDown();
	});   //mouseover
	$("ul.gnb>li").mouseout(function(){
		$("ul.sub").stop().slideUp();
	});   //mousout


 //슬라이드 애니메이션
 // $("ul.slide li").eq(0).siblings().css({"left":"-1200px"});
 // var slideNo=0;
 // setInterval(function(){
 // 	if(slideNo<2) slideNo++;
 // 	else slideNo=0;
 // 	$("ul.slide li").eq(slideNo).siblings().animate({"left":"-1200px"},100);
 // 	$("ul.slide li").eq(slideNo).animate({"left":"0"},100);
 // },3000);

var slide = $(".slide li"); //슬라이드에 사용할 이미지 배열에 저장
var sno = 0; //배열 첨자는 0부터 시작. 이미지 개수 카운트
var lastno = slide.length - 1; //마지막 번호는 배열에 있는 아이템 개수-1
function playSlide(){
 $(slide[sno]).animate({
  "left":"1200px"
 },1000,function(){
  $(this).css({"left":"-100%"});
 });	 
 sno++;
if(sno > lastno) sno = 0;
$(slide[sno]).animate({
  "left":"0"
 },1000);		
}
var timer = setInterval(function(){
 playSlide();
},2000);


 //공지사항갤러리 탭
 $(".notice_gal h3").click(function(){
 	$(".notice_gal h3, .notice_gal ul").removeClass("on");
 	$(this).addClass("on");
 	$(this).next("ul").addClass("on");
 });

 //레이어 팝업창
 $("ul.notice li").eq(0).click(function(){ //공지사항 첫번째 콘텐츠 클릭시
 	$(".modal").show(); //팝업창 보이기
 });
 $(".btn").click(function(){  //닫기 버튼 클릭시
 	$(".modal").hide(); //팝업창 숨기기
 });


}); //ready end