/**
 * Created by PHP Matt on 02/12/2016.
 */

function UnityProgress(dom)
{
  // private vars
  var _progress = 0.0,
    _message  = "",
    _dom,
    _parent,
    _bg,
    _bar,
    _barFill,
    _messageBox;


  // public methods
  this.SetProgress = function(_, progress)
  {
    if (_progress < progress) {
      _progress = progress;
    }
	
	if (1 === progress) {
		var sel = this;
		setTimeout(function() {
		sel.Start();
		}, 2000);
		return;
	}

    this.Update();
  };


  this.SetMessage = function (message)
  {
    _message = message;

    this.Update();
  };


  this.Clear = function()
  {
    this.Start();
  };


  this.Start = function()
  {
    _bg.style.display = "none";
    window.removeEventListener("resize", _onResize.bind(this));
  };


  this.Update = function()
  {
    _bg.style.visibility = "visible";
    _bg.style.top        = _dom.offsetTop + 'px';
    _bg.style.left       = _dom.offsetLeft + 'px';
    _bg.style.width      = _dom.offsetWidth + 'px';
    _bg.style.height     = _dom.offsetHeight + 'px';

    _barFill.style.width = (Math.min(_progress, 1) * 100) + "%";
  };


  // private methods
  var _get = function _get(key)
  {
    var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|$)','gi');
    var m;
    while ((m = re.exec(document.location.search)) != null) {
      return m[1];
    }
    return '';
  };


  var _createElements = function _createElements()
  {
    _bg    = document.createElement("div");
    _bg.id = "pre-bg";
    _bg.style.visibility = "hidden";
    _bg.onclick = function() {
	  var p = _get("portal");
      window.open("http://aceviral.com/a/l/AGRWebGLPreloader?utm_source=brandedgames&utm_medium=webglangrygranrunrussia" + (p ? '&utm_url=' + p : ""));
    };
    _parent.appendChild(_bg);

    _bar = document.createElement("div");
    _bar.id = "progress-bar";
    _bg.appendChild(_bar);

    _barFill = document.createElement("div");
    _barFill.id = "progress-bar-fill";
    _bar.appendChild(_barFill);

    var barText = document.createElement("span");
    barText.id = "progress-bar-text";
    barText.innerHTML = "Loading...";
    _bar.appendChild(barText);

    _messageBox    = document.createElement("div");
    _messageBox.id = "pre-message";
    _bg.appendChild(_messageBox);
  }.bind(this);


  var _onResize = function()
  {
    console.log("resizing");
    this.Update();
  }.bind(this);

  // constructor
  (function __construct() {
    var p = _get("portal");
    _dom    = dom;
    _parent = dom.parentNode;
    window.addEventListener("resize", _onResize.bind(this));

    _createElements();
    this.Update();
  }.bind(this))();
}
