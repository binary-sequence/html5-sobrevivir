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
console.info('Include: mootools-core-1.4.5-full-compat-yc.js.');
console.info("Include: html5-sobrevivir.main.js.");

require.config({
 paths: {
  main: 'html5-sobrevivir'
 }
});

require(['main/game', 'main/custom_fx'],
function( game      ,  custom_fx      ) {

 console.info('Required modules:');
 console.info(game);
 console.info(custom_fx);
 console.info('End of required modules.');

 document.addEvent('domready', function() {

	console.info('Event: Document ready.');

	document.body.addEvent('contextmenu',function(e) {
		console.info('Event: Context menu.');
		e.stop();
	});

	window.addEvent('resize', function(e) {
		console.info('Event: Window resize.');
		game.camera2d.resize();
	});

	window.addEvent('click',function(e) {

		console.info('Event: Window click.');

		if(game.state == 'gamelicense') {
			custom_fx.fadeout('divGameLicense', function(element) {
				custom_fx.fadein('divResourcesLicenses', function(element) {
					game.state = 'resourceslicense';
				});
			});
		} else if(game.state == 'resourceslicense') {
			custom_fx.fadeout('divResourcesLicenses', function(element) {
				custom_fx.fadein('divGameMenu', function(element) {
					game.state = 'gamemenu';
				});
			});
		} else if(game.state == 'gamemenu') {
			custom_fx.fadeout('divGameMenu', function(element) {
				custom_fx.fadein('canvasGameScreen', function(element) {
					game.state = 'playgame';
				});
			});
		}

	});

 });// END OF document.addEvent('domready'

});// END OF require
