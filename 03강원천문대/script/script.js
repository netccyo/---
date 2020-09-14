$(document).ready(function(){

	//메뉴 내비게이션
	$("ul.gnb>li").hover(function(){
		$(this).find("ul.sub").stop().slideDown(); //mouseover
	},function(){
		$(this).find("ul.sub").stop().slideUp();   //mouseout
	});


	//이미지 슬라이드
	$("ul.slider li").eq(0).siblings().hide();
	var slideNo=0;
	setInterval(function(){
			if(slideNo<2){
				slideNo++
			}else{
				slideNo=0;
			}
			$("ul.slider li").eq(slideNo).siblings().fadeOut(100);
			$("ul.slider li").eq(slideNo).fadeIn(100);
	},3000);

//공지사항갤러리 탭
		$(".notice_gal h3").click(function(){
				$(".notice_gal h3,.notice_gal ul").removeClass("on");
				$(this).addClass("on");
				$(this).next("ul").addClass("on");
		});

		//popup
		$("ul.notice li").eq(0).click(function(){
			$(".modal").show();
		});
		$(".btn").click(function(){
			$(".modal").hide();
		});

}); //ready end