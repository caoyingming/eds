
window.onload=function(){
   var homesro = new IScroll("#home",{
     snap:true,
     momentum:false,
     hScrollbar:false,
     vScrollbar: false
   });
};
(function(){
// 底部tab切换
  $(function(){
    $("#footernav").on("click","li",function(){
      var i = $(this).index();
      $(".main section").eq(i).css({
        'right':'100%'
      }).siblings().css({
        'right':'0'
      })

//切换头部
      // var title =$(this).find('a').attr('title');
      // console.log(title);
      // $('#lable').text(title)
    });
  });




})(Zepto)
