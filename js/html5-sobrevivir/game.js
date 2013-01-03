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
 * This class provides access to all necessary game stuff.
 * @class game
 * @singleton
 */
define( ['main/Camera2d'],
function( Camera2d      ) {

	return {
		/**
		 * State of the game.
		 *
		 * It could be "gamelicense", "resourceslicenses", "gamemenu", "playgame" or "credits".
		 */
		state: "gamelicense",
		/**
		 * Object that manages the canvas element.
		 * @property {Camera2d}
		 */
		camera2d: new Camera2d()
	};

});
