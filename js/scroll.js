scroll();
arrowsUpDown();




function scroll(){
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
}

function arrowsUpDown(){
	let up = document.getElementById('up');
	let down = document.getElementById('down');
	var index = 1;
	let array = [texto1,texto2,texto3,texto4];
		up.addEventListener('click',function (){
			
				document.getElementById('texto'+index).style.display = 'none'; 
				if(index>=4){
				
				index = 0;
			}
				index++;
				document.getElementById('texto'+index).style.display = 'block';


		});

	    down.addEventListener('click',function () {
	document.getElementById('texto'+index).style.display = 'none'; 
				if(index<=1){
				
				index = 5;
			}
				index--;
				document.getElementById('texto'+index).style.display = 'block';
	});
	
}