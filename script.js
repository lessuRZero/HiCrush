function createHearts(){
	const container = document.querySelector(".container");

	const createheart = document.createElement("div");
	createheart.classList.add('hearts');
	createheart.innerHTML = "❤";
	createheart.style.left = Math.random() * 100 + 'vw';
	createheart.style.animationDuration = Math.random() * 3 + 2 + 's';
	console.log(createheart);

	container.appendChild(createheart);
}

setInterval(createHearts, 1200);


