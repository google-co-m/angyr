var SendMessageUnity = function(p1, p2, p3) {
	if (typeof SendMessage == 'function')
	{
		return SendMessage(p1, p2, p3);
	}
	else
	{
		return window.u.getUnity().SendMessage(p1, p2, p3);
	}
};

var webgl = false;

if (typeof SendMessage == 'function')
{
	var webgl = true;
}

"use strict";

var TheGameForest = TheGameForest || {};

TheGameForest.UserID = false;
TheGameForest.language = 1000;

TheGameForest.LoggedInGameForest = function(id) {
	console.log("TheGameForest.LoggedInGameForest");
	TheGameForest.UserID = id;
};

TheGameForest.UnityListener = "JSListener";

function autoScrollTo(el) {
    var top = $("#" + el).offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);
};

TheGameForest.HighlightBilling = function() {
	document.getElementById('paypalFrame').contentWindow.blink();
	
	/*location.href = "#";
	location.href = "#paypalFrame";*/
	
	//autoScrollTo('paypalFrame');
	if (typeof parent.window.autoScrollPaypal !== 'undefined') {
		parent.window.autoScrollPaypal();
	}
};

TheGameForest.openShareURLTwitter = function(){
	if(typeof(parent.window.openShareURLTwitter) == "function")
		parent.window.openShareURLTwitter();
};

TheGameForest.openShareURLFaceBook = function(){
	if(typeof(parent.window.openShareURLFaceBook) == "function")
		parent.window.openShareURLFaceBook();
};

TheGameForest.getLanguage = function(listnerName){
	TheGameForest.UnityListener = listnerName;
	console.log("idname: " + TheGameForest.UnityListener);
	function supportsLocalStorage() {
		return typeof(Storage)!== 'undefined';
	}

	// Run the support check
	if (supportsLocalStorage())
	{
		TheGameForest.language = localStorage.getItem('language');
	}
	
	console.log("id4: " + TheGameForest.language);
	
	if (typeof TheGameForest.language !== 'undefined' && TheGameForest.language != null) {
		console.log("id5: " + TheGameForest.language.toString());
		SendMessageUnity(TheGameForest.UnityListener, "LanguageCallback", TheGameForest.language.toString());
	}
	else {
		console.log("id6: " + "1000");
		SendMessageUnity(TheGameForest.UnityListener, "LanguageCallback", "1000");
	}
};

TheGameForest.saveVariable = function(key, value){
	function supportsLocalStorage() {
		return typeof(Storage)!== 'undefined';
	}
	
	// Run the support check
	if (supportsLocalStorage())
	{
		localStorage.setItem(key, value);
	}
};

TheGameForest.loadVariable = function(listnerName, key, defaultValue){
	console.log("idname: " + listnerName);
	function supportsLocalStorage() {
		return typeof(Storage)!== 'undefined';
	}

	// Run the support check
	if (supportsLocalStorage())
	{
		var value = localStorage.getItem(key);
		if (value === null) {
			value = defaultValue;
		}
		
		SendMessageUnity(listnerName, "LoadVariable", value.toString());
		
		return true;
	}
	
	return false;
}
