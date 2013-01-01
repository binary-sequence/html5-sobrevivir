/*

  This file is part of 'html5-sobrevivir'.

  Copyright 2013 Sergio Lindo - <sergiolindo.empresa@gmail.com>

  'html5-sobrevivir' is free software: you can redistribute it and/or modify it
  under the terms of the GNU General Public License as published by the Free
  Software Foundation, either version 3 of the License, or (at your option) any
  later version.

  'html5-sobrevivir' is distributed in the hope that it will be useful, but
  WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
  FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
  details.

  You should have received a copy of the GNU General Public License along with
  'html5-sobrevivir'. If not, see <http://www.gnu.org/licenses/>.

*/
;
define({

	fadeout: function(element, callback) {
		var myFx = new Fx.Tween(element, {
			duration: 500,
			link: 'cancel',
			property: 'opacity'
		});

		myFx.addEvent('complete', function(element) {
			element.setStyle('display', 'none');

			if(typeof(callback) !== 'undefined') {
				callback(element);
			}
		});

		myFx.start(1, 0);
	},

	fadein: function(element, callback) {
		$(element).setStyles({
			display: 'block',
			opacity: 0
		});

		var myFx = new Fx.Tween(element, {
			duration: 500,
			link: 'cancel',
			property: 'opacity'
		});

		myFx.addEvent('complete', function(element) {
			element.setStyle('display', 'block');

			if(typeof(callback) !== 'undefined') {
				callback(element);
			}
		});

		myFx.start(0, 1);
	}

});
