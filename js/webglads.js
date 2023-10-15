
    window.SkipAd = function() {
		
        var stop = false;
        if (typeof jQuery !== 'undefined') {
            stop = true;
            $('#overlayad').fadeOut();
        }
        
        if(!stop)
            setTimeout(window.SkipAd, 500);
    }
    
    window.ShowAd = function() {
		
        console.log('window.ShowAd');
        var stop = false;
        if (typeof jQuery !== 'undefined') {
            stop = true;
            $('#overlayad').fadeIn();
        }
        
        if(!stop)
            setTimeout(window.ShowAd, 500);
    }

