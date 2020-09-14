$(document).ready(function(){
 
  /*menu*/
  $("ul.gnb>li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown()
  });
  $("ul.gnb>li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp()
  });
 
  /*slide*/
  $(".slide>li").eq(0).siblings().hide();
  var sno = 0;
  setInterval(function(){
    if(sno<2) sno++;
    else sno = 0;
    $(".slide>li").eq(sno).siblings().fadeOut(250);
    $(".slide>li").eq(sno).fadeIn(250);
  },3000);
 
  /*notice gal tab*/
  $(".notgal>h3").click(function(){
    $(".notgal>h3, .notgal>ul").removeClass("on");
    $(this).addClass("on");
    $(this).next("ul").addClass("on");
  });
 
  /*popup*/
  $(".notice>li").eq(0).click(function(){
    $(".modal").show();
  });
  $(".btn").click(function(){
    $(".modal").hide();
  });
 
});

