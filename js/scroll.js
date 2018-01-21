let arrow = document.getElementById('arrow');

// HIDE OR SHOW ARROW
window.addEventListener('scroll',function(){
	let scrollNumber = window.pageYOffset;
	if (scrollNumber > 400){
		arrow.style.display = 'block';
	}else{
		arrow.style.display = 'none';
	}
});
arrow.addEventListener('click',function(){
	let interval = setInterval(subir,100);
	function subir(){
		let scrollNumber = window.pageYOffset;
		if (scrollNumber < 10){
			clearInterval(interval);
		}else{
			window.scrollBy(0,-90);
		}
	}
});

