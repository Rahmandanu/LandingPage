//Cara Biasa
// const kartu = document.querySelector('.card');
const close = document.querySelectorAll('.close');

// tombol.addEventListener('click', function (){
// 	kartu.style.display = 'none';
// });





//DOM Traversal
// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function (e){
// 			//close[i].parentElement.style.display ='none';
// 		e.target.style.parentElement.display = 'none';
// 	});
// }








//cara yang lebih efektif 
close.forEach(function (element) { // untuk setiap element close jalankan fungsi
	element.addEventListener('click', function(e){
		e.target.parentElement.style.display ='none';
		e.preventDefault() //menghentikan default menggunakan preventDefault (kalau yang kita klik link)
		e.stopPropagation(); //menghnetikan  bubbling event / menjalankan event nya masing-masing tanpa harus bersamaan/ bertabrakan
	});
});


//memberikan event pada parentnya
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
	card.addEventListener('click', function(e){
		alert('ok');
	});
});






//memberikan event pada container

 const container = document.querySelector('.container');
container.addEventListener('click',function(e){
if (e.target.className == 'close') { // kalau yang kita klik nama kelasnya = close makan ambil parent nya lalu kita hapus
 		e.target.parentElement.style.display ='none';
 		e.preventDefault(); // jaga-jaga kalau yang kita klik adalah link
 	}
 })
//e.target(yang kita klik)