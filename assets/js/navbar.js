const menuToggle = document.getElementById("menu-toggle");
	const slideMenu = document.getElementById("slide-menu");

	let hoverTimeout;

	menuToggle.addEventListener("mouseenter", () => {
		clearTimeout(hoverTimeout);
		slideMenu.classList.add("show");
	});

	menuToggle.addEventListener("mouseleave", () => {
		hoverTimeout = setTimeout(() => {
			slideMenu.classList.remove("show");
		}, 300);
	});

	slideMenu.addEventListener("mouseenter", () => {
		clearTimeout(hoverTimeout);
	});

	slideMenu.addEventListener("mouseleave", () => {
		hoverTimeout = setTimeout(() => {
			slideMenu.classList.remove("show");
		}, 300);
	});