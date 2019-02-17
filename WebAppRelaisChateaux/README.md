# Architecture du projet 

## MichelinScrap
**Tout d'abord je scrappe les 37 pages de restaurants etoilés sur le site michelin et je sauvegarde tout dans un fichier texte appelé post.**

## RelaisGetURL

**Ensuite j'obtiens les urls de relaischateaux grace a la meme methode et je les stocke dans un fichier texte appelé HotelRestaurant.**
## GetFinalTab
**Ce programme récupère les deux fichiers texte créés plus tot, il fais des requetes aux urls des relais et il obtient les noms des rerstaurants associés**
**Il peux ensuite comparer le nom de ces restaurants avec la liste de restaurants etoilés, sile restaurant est etoilés il ajoute le relais,son prix et son restaurant a un json s'appelant Final.**
## Affichage/WebPage
**Je fais une page HTML toute simple et grace a un scrript qui boucle sur le JSON j'inclue dans la page HTML les elements du json sous forme de tableau et j'ajoute un css.**
