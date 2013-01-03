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
/**
 * This class provides custom animations for DOM elements.
 * @class CustomFx
 * @singleton
 */
define({
	/**
	 * Hide an element by fading it to transparent.
	 *
	 * This method set the css display property to none.
	 *
	 * @param {HTMLElement/String} element An Element or the string id of an Element to apply the transition to.
	 * @param {Function} [callback] A function to call once the animation is complete.
	 * @return {HTMLElement} The element that have been animated.
	 *
	 * Examples:
	 *
	 *     <div id="divContainer">Once upon a time...</div>
	 *     ...
	 *     var element = getElementById('divContainer');
	 *     custom_fx.fadeout(element);
	 *
	 * or
	 *
	 *     <div id="divContainer">Once upon a time...</div>
	 *     ...
	 *     custom_fx.fadeout('divContainer', function(element) {
	 *         // Do something...
	 *     });
	 */
	fadeout: function(element, callback) {
		var my_fx = new Fx.Tween(element, {
			duration: 500,
			link: 'cancel',
			property: 'opacity'
		});

		my_fx.addEvent('complete', function(element) {
			element.setStyle('display', 'none');

			if(typeof(callback) !== 'undefined') {
				callback(element);
			}
		});

		my_fx.start(1, 0);

		return element;
	},
	/**
	 * Display an element by fading them to opaque.
	 *
	 * This method set the css display property to block.
	 *
	 * @param {HTMLElement/String} element An Element or the string id of an Element to apply the transition to.
	 * @param {Function} [callback] A function to call once the animation is complete.
	 * @return {HTMLElement} The element that have been animated.
	 *
	 * Examples:
	 *
	 *     <div id="divContainer" style="display:none">Once upon a time...</div>
	 *     ...
	 *     var element = getElementById('divContainer');
	 *     custom_fx.fadein(element);
	 *
	 * or
	 *
	 *     <div id="divContainer">Once upon a time...</div>
	 *     ...
	 *     custom_fx.fadein('divContainer', function(element) {
	 *         // Do something...
	 *     });
	 */
	fadein: function(element, callback) {
		$(element).setStyles({
			display: 'block',
			opacity: 0
		});

		var my_fx = new Fx.Tween(element, {
			duration: 500,
			link: 'cancel',
			property: 'opacity'
		});

		my_fx.addEvent('complete', function(element) {
			element.setStyle('display', 'block');

			if(typeof(callback) !== 'undefined') {
				callback(element);
			}
		});

		my_fx.start(0, 1);
	}
});
