 var container = document.querySelectorAll('.cont');

    for(var i=0; i<container.length; i++) {
        
        var x, y, X, Y, swipeX, swipeY;

        container[i].addEventListener('touchstart', function(event) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
            swipeX = true;
            swipeY = true ;
        });

        container[i].addEventListener('touchmove', function(event) {

            X = event.changedTouches[0].pageX;
            Y = event.changedTouches[0].pageY;
            
            // 左右滑动
            if(swipeX && Math.abs(X-x) - Math.abs(Y-y) > 0) {

                // 阻止事件冒泡
                event.stopPropagation();

                if(X - x > 10) {
                    event.preventDefault();
                    this.style.left = '0px';
                }
                if(x - X > 10) {
                    event.preventDefault();
                    this.style.left = '-15rem';
                }
                swipeY = false;
            }

            // 上下滑动
            if(swipeY && Math.abs(X-x) - Math.abs(Y-y) < 0) {
                swipeX = false;
            }
            
        });

    }