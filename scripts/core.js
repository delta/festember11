/*CORE*/
var festember = (function() {
	var festember = function() {
		function init() {
			console.log("inside");
			return this;
		}
		function ready() {
			var func = this.arguments[0] || function() {};
			if(typeof func == "function")
				func.apply(this, []);
			return this;
		}
		return {
			init: init,
			ready: ready
		};
	}
	festember.init = function() {
		console.log("outside");
		return festember(arguments);
	}
	
	return (window.$=window.festember=festember);
})();
