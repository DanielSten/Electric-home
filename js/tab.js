const tabsBtn = document.querySelectorAll(".menu_product");
const tabsItem = document.querySelectorAll(".tabs")

tabsBtn.forEach(function(item) {
	item.addEventListener("click", function(){
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("id");
		let currentTab = document.querySelector(tabId);

		if ( ! currentBtn.classList.contains('active') ) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active')
			});

			tabsItem.forEach(function(item) {
				item.classList.remove('active')
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active')
		}
	});

});
document.querySelector('.menu_product').click();


