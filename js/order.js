/*var myScroll;
  window.onload = function(){
    myScroll = new iScroll('hone', { 
      checkDOMChanges: true ,
      preventDefault:false,
      snap:true,
      momentum:false,
      hScrollbar:false,
      vScrollbar: false
    });
    myScroll = new iScroll('Haveorder', { 
      checkDOMChanges: true,
      preventDefault:false,
      snap:true,
      momentum:false,
      hScrollbar:false,
      vScrollbar: false
    });
  }*/




  $(function(){
    $('.nav-list ul').on('click', 'li', function() {
      var idx = $(this).index();
      console.log(idx);
      $(this).addClass('on').siblings().removeClass('on');
      $('#tap_list section').eq(idx).addClass('sectiono').siblings().removeClass('sectiono');
    })

})