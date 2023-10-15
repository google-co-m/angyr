	function getParentUrl() {
		var isInIframe = (parent !== window),
			parentUrl = null;
			
		if (isInIframe) {
			if(document.referrer.indexOf("apps.facebook.") == -1) {
				parentUrl = parent.document.URL;
			} else {
				parentUrl = document.URL;
			}
		}
		else {
			parentUrl = document.URL;
		}
		
		return parentUrl;
	}
	
	window.urlParameters = "";
	
	var search = getParentUrl().split('?');
	
	if(search.length > 1) {
		
		search = search[1];
		search.substring(1);
		
		var toPrase = '{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}';
		
		window.urlParametersDic = search?JSON.parse(toPrase,
					 function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
					 
		window.urlParameters = JSON.stringify(window.urlParametersDic, null, 4);
	}

	
