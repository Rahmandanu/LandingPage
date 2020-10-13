const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click', function(e) {

	// cek apa yang di klik adalah thumb
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout (function(){
			jumbo.classList.remove('fade');
		}, 500);


		//me looping semua thumb nya untuk menghilangkan class active nya klo ada
		thumbs.forEach(function(thumb) {
		//  if (thumbs.classList.contains == 'active') {
		//  	thumb.classList.remove('active');
		//  }
		
		thumb.className='thumb';
		});

		e.target.classList.add('active');
	
	
	
	}
});