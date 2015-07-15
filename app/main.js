var React = require('react');
var resolveRoute = function () {
	if (!location.hash || location.hash.length === 1) {
		require.ensure([], function () {
			var Member = require('./member.js');
			React.render(<Member />, document.getElementById('text'));
		});
	} else if (location.hash === '#admin') {
		require.ensure([], function () {
			var Admin = require('./admin.js');
			React.render(<Admin />, document.getElementById('text'));
		});
	}
}
window.onhashchange = resolveRoute;
resolveRoute();
var img = document.createElement("img");
img.src = require("./logo.png");
img.height="100";
document.body.appendChild(img);

