var test = false;  
        $(window).scroll(function(){  
                //获取当前位置到窗口顶部的高度  
                var h_num=$(window).scrollTop();  
                if(h_num>980){//当当前高度大于导航条到窗口顶部高度  
                   //切换导航条的类名为固定后的类名  
                   $('.price-nav').addClass('fixer');   
           //当导航条的position变成了fixed后，原来的位置会变空，需要在原位置增加个占位div  
                   if(!test){  
                        var stayPos = document.createElement("div");  
                stayPos.id= "stayPosDiv";  
            stayPos.style.height = "38px";//导航条的高度  
                var temp = document.getElementById("nav");  
                temp.appendChild(stayPos);  
                test=true;  
            }  
                }else{  
                      //如果回到导航条原位置之前则替换回原来的类名  
                      $('.price-nav').removeClass('fixer');  
              if(test){//移除占位div  
                   var temp = document.getElementById("nav");  
                   temp.removeChild(stayPosDiv);  
                   test = false;  
              }  
               }     
          });  