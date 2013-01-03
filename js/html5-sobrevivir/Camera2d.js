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
 * This class manages the canvas element.
 * @class Camera2d
 */
define(function () {

	return new Class({
		/**
		 * Width of the canvas.
		 * @private
		 * @readonly
		 */
		WIDTH: 1023,
		/**
		 * Height of the canvas.
		 * @private
		 * @readonly
		 */
		HEIGHT: 682,
		/**
		 * Size ratio of the canvas.
		 * @private
		 * @readonly
		 */
		RATIO: 1.5,
		/**
		 * Track of the scale of the canvas.
		 * @property {Number}
		 * @private
		 */
		scale: null,
		/**
		 * Reference to the canvas element.
		 * @property {HTMLElement}
		 * @private
		 */
		canvasGameScreen: null,
		/**
		 * Provides doble buffering.
		 * @property {HTMLElement}
		 * @private
		 */
		bufferGameScreen: null,
		/**
		 * Detect Android device.
		 * @private
		 */
		android: false,
		/**
		 * Detect iOS/iPad device.
		 * @private
		 */
		ios: false,
		/**
		 * Creates the camera2d object and initializes properties.
		 * @constructor
		 */
		initialize: function() {
			this.canvasGameScreen = $('canvasGameScreen');
			this.canvasGameScreen.width = this.WIDTH;
			this.canvasGameScreen.height = this.HEIGHT;
			this.canvasGameScreen.context2d = this.canvasGameScreen.getContext('2d');

			this.bufferGameScreen = document.createElement('canvas');
			this.bufferGameScreen.width = this.canvasGameScreen.width;
			this.bufferGameScreen.height = this.canvasGameScreen.height;
			this.bufferGameScreen.context2d = this.bufferGameScreen.getContext('2d');

			// We need to sniff out Android and iOS so that we can hide the address bar in our resize function.
			var ua = navigator.userAgent.toLowerCase();
			if(ua.indexOf('android') > -1) {
				this.android = true;
			}
			if(ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
				this.ios = true;
			}

			this.resize();
		},// END OF initialize
		/**
		 * Resize the canvas in proportion to the new size of the window.
		 */
		resize: function() {
			var currentWidth = null;
			var currentHeight = null;
			if(window.innerWidth / window.innerHeight > 800 / 600) {
				currentHeight = window.innerHeight;
				// Resize the width in proportion to the new height.
				currentWidth = currentHeight * this.RATIO;
			} else {
				currentWidth = window.innerWidth;
				// Resize the height in proportion to the new width.
				currentHeight = currentWidth / this.RATIO;
			}

			// This will create some extra space on the page, allowing us to scroll past the address bar, thus hiding it.
			if (this.android || this.ios) {
				document.body.style.height = (window.innerHeight + 50) + 'px';
			}

			// Set the new canvas style width and height.
			// note: our canvas is still 1023 x 682, but we're essentially scaling it with CSS.
			this.canvasGameScreen.style.width = currentWidth + 'px';
			this.canvasGameScreen.style.height = currentHeight + 'px';

			this.scale = currentWidth / this.WIDTH;
			// TODO Conversion from canvas pixels to css pixels.
			// this.canvasGameScreen.offsetTop
			// this.canvasGameScreen.offsetLeft

			// We use a timeout here because some mobile browsers don't fire if there is not a short delay.
			window.setTimeout(function() {
				window.scrollTo(0,1);
			}, 1);

		}// END OF resize method.
	});

});
