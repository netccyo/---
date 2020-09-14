$(document).ready(function(){

		//메뉴 네비게이션
		$("ul.gnb>li").mouseenter(function(){
				$("ul.sub,.nav_bg").stop().slideDown(); //mouseover
		});
		$("ul.gnb>li").mouseleave(function(){
				$("ul.sub,.nav_bg").stop().slideUp();   //mouseout
		});

		//이미지 슬라이드
		$("ul.slide li").eq(0).siblings().hide();
		var slideNo=0;
	 setInterval(function(){
			if(slideNo<2){
				slideNo++;
			}else{
				slideNo=0;
			}
			$("ul.slide li").eq(slideNo).siblings().fadeOut(100);
			$("ul.slide li").eq(slideNo).fadeIn(100);
		},3000);
		
		//popup
		$(".notice ul li").eq(0).click(function(){
			$(".modal").fadeIn();
		});
		$(".btn").click(function(){
			$(".modal").fadeOut();
		});

}); //ready end