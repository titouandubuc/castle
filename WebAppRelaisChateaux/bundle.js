(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var fs=require('fs');
var json1=require('./Final.json');
var i;
for(i=0;i<41;i++){
	var tableau =document.getElementById('tab');
	tab.innerHTML+='<tr> '+"<td>"+json1.table[i].Nom+"</td>"+"<td>"+json1.table[i].Restaurant+"</td>"+"<td>"+json1.table[i].Prix+"</td>"+'<tr>';

}
},{"./Final.json":3,"fs":1}],3:[function(require,module,exports){
module.exports={"table":[
{
	"Nom": " Maison Rostang ",
	"Restaurant": " Maison Rostang ",
	"Prix": "90.00$"
},
{
	"Nom": " Lucas Carton ",
	"Restaurant": " Lucas Carton ",
	"Prix": "89.00$"
},
{
	"Nom": "Troisgros (Loire)",
	"Restaurant": " Le Bois sans Feuilles ",
	"Prix": "400.00$"
},
{
	"Nom": "Hôtel Impérial Garoupe (Alpes-Maritimes)",
	"Restaurant": " Le Pavillon ",
	"Prix": "360.00$"
},
{
	"Nom": "La Pyramide Patrick Henriroux (Isère)",
	"Restaurant": " La Pyramide Patrick Henriroux ",
	"Prix": "170.00$"
},
{
	"Nom": "Coquillade Village (Vaucluse)",
	"Restaurant": " Le Gourmet ",
	"Prix": "170.00$"
},
{
	"Nom": "Auberge du Jeu de Paume (Oise)",
	"Restaurant": " La Table du Connétable ",
	"Prix": "263.50$"
},
{
	"Nom": "Hôtel Le Chabichou Restaurants & Spa (Savoie)",
	"Restaurant": " Le Chabichou ",
	"Prix": "470.00$"
},
{
	"Nom": "Château de La Chèvre d’Or (Alpes-Maritimes)",
	"Restaurant": " La Chèvre d'Or ",
	"Prix": "237.00$"
},
{
	"Nom": "Maison Lameloise (Saône-et-Loire)",
	"Restaurant": " Maison Lameloise ",
	"Prix": "180.00$"
},
{
	"Nom": "Le Couvent des Minimes Hôtel & Spa L'Occitane (Alpes-de-Haute-Provence)",
	"Restaurant": " Le Cloître ",
	"Prix": "224.00$"
},
{
	"Nom": "Moulin de l’Abbaye (Dordogne)",
	"Restaurant": " Moulin de l'Abbaye ",
	"Prix": "145.00$"
},
{
	"Nom": "Le Saint-James Bouliac (Gironde)",
	"Restaurant": " Le Saint-James Bouliac ",
	"Prix": "175.00$"
},
{
	"Nom": "Hôtel Les Barmes de l'Ours (Savoie)",
	"Restaurant": " La Table de l'Ours ",
	"Prix": "325.00$"
},
{
	"Nom": "Le Mas des Herbes Blanches (Vaucluse)",
	"Restaurant": " La Table du Mas ",
	"Prix": "218.00$"
},
{
	"Nom": "Le Mas des Herbes Blanches (Vaucluse)",
	"Restaurant": " La Table du Mas ",
	"Prix": "218.00$"
},
{
	"Nom": "Château de Berne (Var)",
	"Restaurant": " Le Jardin de Benjamin ",
	"Prix": "281.00$"
},
{
	"Nom": "Hôtel & Spa du Castellet (Var)",
	"Restaurant": " Restaurant Christophe Bacquié ",
	"Prix": "208.00$"
},
{
	"Nom": "Cap d’Antibes Beach Hotel (Alpes-Maritimes)",
	"Restaurant": " Les Pêcheurs ",
	"Prix": "294.00$"
},
{
	"Nom": "Hôtel et Restaurant Régis et Jacques Marcon (Haute-Loire)",
	"Restaurant": " Restaurant Régis et Jacques Marcon ",
	"Prix": "$"
},
{
	"Nom": "Abbaye de la Bussière (Côte-d’Or)",
	"Restaurant": " Gastronomique ",
	"Prix": "225.00$"
},
{
	"Nom": "La Grenouillère (Pas-de-Calais)",
	"Restaurant": " La Grenouillère ",
	"Prix": "180.00$"
},
{
	"Nom": "Le Château de Beaulieu (Pas-de-Calais)",
	"Restaurant": " Le Meurin ",
	"Prix": "170.00$"
},
{
	"Nom": "La Bastide de Saint-Tropez (Var)",
	"Restaurant": " L’Olivier ",
	"Prix": "220.00$"
},
{
	"Nom": "La Bastide de Saint-Tropez (Var)",
	"Restaurant": " L’Olivier ",
	"Prix": "220.00$"
},
{
	"Nom": "Château de Mercuès (Lot)",
	"Restaurant": " Le Duèze ",
	"Prix": "198.00$"
},
{
	"Nom": "Flocons de Sel (Haute-Savoie)",
	"Restaurant": " Flocons de Sel ",
	"Prix": "430.00$"
},
{
	"Nom": "Le Petit Nice-Passedat (Bouches-du-Rhône)",
	"Restaurant": " Le Petit Nice ",
	"Prix": "220.00$"
},
{
	"Nom": "Le Phébus & Spa - Villa des Anges (Vaucluse)",
	"Restaurant": " La Table de Xavier Mathieu ",
	"Prix": "210.00$"
},
{
	"Nom": "La Bonne Étape (Alpes-de-Haute-Provence)",
	"Restaurant": " La Bonne Étape ",
	"Prix": "158.00$"
},
{
	"Nom": "Le Vieux Logis (Dordogne)",
	"Restaurant": " Le Vieux Logis ",
	"Prix": "170.00$"
},
{
	"Nom": "Hameau Albert Ier (Haute-Savoie)",
	"Restaurant": " Albert 1er ",
	"Prix": "151.00$"
},
{
	"Nom": "Relais de la Poste (Landes)",
	"Restaurant": " Relais de la Poste ",
	"Prix": "162.00$"
},
{
	"Nom": "Royal Champagne Hotel & Spa (Marne)",
	"Restaurant": " Le Royal ",
	"Prix": "390.00$"
},
{
	"Nom": "Château de Valmer (Var)",
	"Restaurant": " La Palmeraie ",
	"Prix": "244.00$"
},
{
	"Nom": "Maison Doucet (Saône et Loire)",
	"Restaurant": " Restaurant Frédéric Doucet ",
	"Prix": "123.00$"
},
{
	"Nom": "La Chapelle Saint-Martin (Haute-Vienne)",
	"Restaurant": " La Chapelle Saint Martin ",
	"Prix": "135.00$"
},
{
	"Nom": "Le Chambard (Haut-Rhin)",
	"Restaurant": " La Table d'Olivier Nasti ",
	"Prix": "182.00$"
},
{
	"Nom": "Le Chambard (Haut-Rhin)",
	"Restaurant": " La Table d'Olivier Nasti ",
	"Prix": "182.00$"
},
{
	"Nom": "Baumanière Hôtel & Spa (Bouches-du-Rhône)",
	"Restaurant": " L'Oustau de Baumanière ",
	"Prix": "225.00$"
},
{
	"Nom": "Le Relais Bernard Loiseau – Spa Loiseau des Sens (Côte-d’Or)",
	"Restaurant": " Bernard Loiseau ",
	"Prix": "99.00$"
},
{
	"Nom": "",
	"Restaurant": "",
	"Prix": "$"
},]}
},{}]},{},[2]);
