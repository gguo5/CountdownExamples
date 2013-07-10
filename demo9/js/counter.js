function GetCount(){
    dateNow=new Date;
    if(countdown){
        amount=dateFuture.getTime()-dateNow.getTime()+5;
    }else{
        amount=dateNow.getTime()- dateFuture.getTime()+5;//countup
    }
    delete dateNow;
    if(amount<0){
        out="<div id='days'><span></span>0<div id='days_text'></div></div>"+"<div id='hours'><span></span>0<div id='hours_text'></div></div>"+"<div id='mins'><span></span>0<div id='mins_text'></div></div>"+"<div id='secs'><span></span>0<div id='secs_text'></div></div>";
        document.getElementById("countbox").innerHTML=out
    }else{
        days=0;
        hours=0;
        mins=0;
        secs=0;
        out="";
        amount=Math.floor(amount/1e3);//to seconds
        days=Math.floor(amount/86400);//seconds for a day is 86,400
        amount=amount%86400;
        hours=Math.floor(amount/3600);
        amount=amount%3600;
        mins=Math.floor(amount/60);
        amount=amount%60;
        secs=Math.floor(amount);
        out="<div id='days'><span></span>"+days+"<div id='days_text'></div></div>"+"<div id='hours'><span></span>"+hours+"<div id='hours_text'></div></div>"+"<div id='mins'><span></span>"+mins+"<div id='mins_text'></div></div>"+"<div id='secs'><span></span>"+secs+"<div id='secs_text'></div></div>";
        document.getElementById("countbox").innerHTML=out;
        setTimeout("GetCount()",1e3)
    }
}
    
$(document).ready(function(){
    $(".slogan_main").slogan_main();
    $(".slogan_social").slogan_social();
    $("#social_media").social_media();
    $("img.in").hover(function(){
        $(this).stop().animate({
            opacity:"0"
        },"slow")
    },function(){
        $(this).stop().animate({
            opacity:"1"
        },"slow")
    })
});
    
$.fn.extend({
    social_media:function(){
        return this.each(function(){
            var e=7;
            var t=$(this);
            var n="";
            if(facebook=="hide"){
                var e=e-1
            }else{
                n+='<div class="social_box">';
                n+='<a href="'+facebook+'"><img src="img/social_media/facebook_in.png" alt="" class="in"></a>';
                n+='<img src="img/social_media/facebook_out.png" alt="" class="out">';
                n+="</div>"
            }
            if(twitter=="hide"){
                var e=e-1
            }else{
                n+='<div class="social_box">';
                n+='<a href="'+twitter+'"><img src="img/social_media/twitter_in.png" alt="" class="in"></a>';
                n+='<img src="img/social_media/twitter_out.png" alt="" class="out">';
                n+="</div>"
            }
            if(rss=="hide"){
                var e=e-1
            }else{
                n+='<div class="social_box">';
                n+='<a href="'+rss+'"><img src="img/social_media/rss_in.png" alt="" class="in"></a>';
                n+='<img src="img/social_media/rss_out.png" alt="" class="out">';
                n+="</div>"
            }
            if(deviantart=="hide"){
                var e=e-1
            }else{
                n+='<div class="social_box">';
                n+='<a href="'+deviantart+'"><img src="img/social_media/deviantart_in.png" alt="" class="in"></a>';
                n+='<img src="img/social_media/deviantart_out.png" alt="" class="out">';
                n+="</div>"
            }
            if(myspace=="hide"){
                var e=e-1
            }else{
                n+='<div class="social_box">';
                n+='<a href="'+myspace+'"><img src="img/social_media/myspace_in.png" alt="" class="in"></a>';
                n+='<img src="img/social_media/myspace_out.png" alt="" class="out">';
                n+="</div>"
            }
            if(lastfm=="hide"){
                var e=e-1
            }else{
                n+='<div class="social_box">';
                n+='<a href="'+lastfm+'"><img src="img/social_media/lastfm_in.png" alt="" class="in"></a>';
                n+='<img src="img/social_media/lastfm_out.png" alt="" class="out">';
                n+="</div>"
            }
            if(flikr=="hide"){
                var e=e-1
            }else{
                n+='<div class="social_box">';
                n+='<a href="'+rss+'"><img src="img/social_media/flikr_in.png" alt="" class="in"></a>';
                n+='<img src="img/social_media/flikr_out.png" alt="" class="out">';
                n+="</div>"
            }
            t.html(n);
            if(e==1){
                $("#social_media").css("width","40px")
            }else if(e==2){
                $("#social_media").css("width","80px")
            }else if(e==3){
                $("#social_media").css("width","120px")
            }else if(e==4){
                $("#social_media").css("width","160px")
            }else if(e==5){
                $("#social_media").css("width","200px")
            }else if(e==6){
                $("#social_media").css("width","240px")
            }else if(e==7){
                $("#social_media").css("width","280px")
            }
        })
    }
});

$.fn.extend({
    slogan_main:function(){
        return this.each(function(){
            var e=$(this);
            var t='<div id="main_title">'+main_title+"<span>"+sub_title+"</span></div>";
            e.html(t)
        })
    }
});
$.fn.extend({
    slogan_social:function(){
        return this.each(function(){
            var e=$(this);
            var t='<div id="main_title"><span>'+social_network_title+"</span></div>";
            e.html(t)
        })
    }
});
    
month=--month;
dateFuture=new Date(year,month,day,hour,min,sec);
window.onload=function(){
    GetCount()
}