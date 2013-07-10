function JBCountDown(settings) {
    var glob = settings;
   
    function deg(deg) {
        return (Math.PI/180)*deg - (Math.PI/180)*90;
    }
    
    glob.total   = Math.floor((glob.endDate - glob.startdate) / 86400);
    glob.days    = Math.floor((glob.endDate - glob.now) / 86400);
    glob.hours   = 24 - Math.floor((glob.endDate - glob.now) % 86400 / 3600);
    glob.minutes = 60 - Math.floor((glob.endDate - glob.now) % 86400 % 3600 / 60);
    glob.seconds = 60 - Math.floor((glob.endDate - glob.now) % 86400 % 3600 % 60);
    glob.secLeft = Math.floor(glob.endDate - glob.now);
    
    
    if (glob.now >= glob.endDate) {
        return;
    }
    
    var clock = {
        set: {
            seconds: function(){
                glob.secLeft--;
                var cSec = $("#canvas_seconds").get(0);
                var ctx = cSec.getContext("2d");
                ctx.clearRect(0, 0, cSec.width, cSec.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.secondsColor;
                
                ctx.shadowBlur    = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                
                var degs = (360 / Math.floor(glob.endDate - glob.startDate)) * (Math.floor(glob.endDate - glob.startDate) - glob.secLeft)
                
                ctx.arc(133.1,133.7,124, deg(0), deg(degs));
                ctx.lineWidth = 18;
                ctx.stroke();
                
                $(".clock .val").text(glob.days)
            }
        },
       
        start: function(){
            /* Seconds */
            var cdown = setInterval(function(){
                if ( glob.seconds > 59 ) {
                    if (60 - glob.minutes === 0 && 24 - glob.hours === 0 && glob.days === 0) {
                        clearInterval(cdown);
                        /* Countdown is complete */
                        return;
                    }
                    glob.seconds = 1;
                    
                    if (glob.minutes > 59) {
                        glob.minutes = 1;
                        
                        if (glob.hours > 23) {
                            glob.hours = 1;
                            if (glob.days > 0) {
                                glob.days--;
                            }
                        } else {
                            glob.hours++;
                        }
                    } else {
                        glob.minutes++;
                    }
                } else {
                    glob.seconds++;
                }
                clock.set.seconds();
            },1000);
        }
    };
    
    clock.set.seconds();
    clock.start();
}