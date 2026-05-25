// ==UserScript==
// @name			DSMapPosition
// @author			pL4n3
// @copyright		2013
// @license			No Distribution!
// @description		Setzt den Karten-Link zusĂÂ¤tzlich wieder auf die alte Position.
// @include			http://de*.die-staemme.de/game.php?*
// ==/UserScript==

/* Script API */
var api = typeof unsafeWindow != 'undefined' ? unsafeWindow.ScriptAPI : window.ScriptAPI;
    api.register( '70-Map Position', true, 'pL4n3', 'support-nur-im-forum@die-staemme.de' );

tr = document.getElementById('menu_row');
td = tr.children[2];
link = td.children[0].getAttribute('href');
menu2 = document.getElementById('menu_row2');
maptd = document.createElement('td');
maptd.className = 'firstcell box-item icon-box nowrap';
newLink = document.createElement('a');
newLink.href = link;
newSpan = document.createElement('span');
newSpan.className = 'icon header map';
maptext = document.createTextNode(' Térkép');
newLink.appendChild(newSpan);
newLink.appendChild(maptext);
maptd.appendChild(newLink);
menu2.insertBefore(maptd, menu2.firstChild);