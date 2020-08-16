// Fonction qui écoute l'évènement click d'un élément et affiche ou non un autre //

//////   On déclare les variables des éléments à modifier   //////
let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("menu");

/////   On écrit le programme modifiant le style des éléments récupérés   ////
function menuDisplay(){
	if(getComputedStyle(menu).display != "flex"){
		menu.style.display = "flex";
	} else {
		menu.style.display = "none";
	}
};

menuButton.onclick = menuDisplay;