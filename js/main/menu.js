// Fonction qui écoute l'évènement click d'un élément et affiche ou non un autre //

//////   On déclare les variables des éléments à modifier   //////
let bouton_menu = document.getElementById("header-nav-ul-li-menu");
let menu = document.getElementById("header-nav-ul-li-hideMenu");

/////   On écrit le programme modifiant le style des éléments récupérés   ////
function Menu(){
	if(getComputedStyle(menu).display != "none"){
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	}
};



bouton_menu.onclick = Menu;