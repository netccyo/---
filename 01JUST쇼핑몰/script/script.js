$(document).ready(function(){

		//menu
		$("ul.gnb>li").hover(function(){
				$("ul.sub").stop().slideDown(); //mouseover
		},function(){
				$("ul.sub").stop().slideUp(); //mouseout
		});	

	//slide
		$("ul.slider li").eq(0).siblings().css({"top":"-300px"});

		var slideNo=0;
		setInterval(function(){
			if(slideNo<2){
				slideNo++;		
			} else {
				slideNo=0;
			}
			$("ul.slider li").eq(slideNo).siblings().animate({"top":"-300px"},100);
			$("ul.slider li").eq(slideNo).animate({"top":"0"},100);

		},3000);  //3초에 한번씩 function 반복


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