$(document).ready(function(){

		//메뉴 네비게이션
		$("ul.gnb>li").mouseenter(function(){
				$("ul.sub,.nav_bg").stop().slideDown(); //mouseover
		});
		$("ul.gnb>li").mouseleave(function(){
				$("ul.sub,.nav_bg").stop().slideUp();   //mouseout
		});

		//슬라이드
		var slideNo=0;
		setInterval(function(){
			if(slideNo<2){
				slideNo++;		
			} else {
				slideNo=0;
			}
			$("ul.slide li").eq(slideNo).siblings().animate({"left":"-1200px"},100);
			$("ul.slide li").eq(slideNo).animate({"left":"0"},100);
		},3000);  //3초에 한번씩 function 반복

		//familysite
		$("footer .fam p").click(function(){
			$(this).toggleClass("on");
			$("footer .fam ul").stop().slideToggle();
		});

		//popup
		$(".notice ul li").eq(0).click(function(){
			$(".modal").fadeIn();
		});
		$(".btn").click(function(){
			$(".modal").fadeOut();
		});


}); //ready end


