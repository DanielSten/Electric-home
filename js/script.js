const menuIcon = document.querySelector(".menu_icon");
if (menuIcon) {
	const menuBur = document.querySelector(".menu_burger");
	menuIcon.addEventListener("click", function() {
		document.body.classList.toggle('lock')
		menuIcon.classList.toggle('active');
		menuBur.classList.toggle('active');
	})
}






