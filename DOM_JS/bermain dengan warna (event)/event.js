//event Headler
const p2 = document.querySelector('.p2');
function ubahWarnaP3 (){
	p2.style.backgroundColor ='lightblue';
}
p2.onclick = ubahWarnaP3;


//Event Listener

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function (){

	const ul = document.querySelector('section#b ul');
	const liBaru = document.createElement('li');
	const teksLi = document.createTextNode('item baru');
	liBaru.appendChild(teksLi);
	ul.appendChild(liBaru);
	
});

const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function(){
	 p3.style.backgroundColor='lightblue';
});
p3.addEventListener('mouseleave', function(){
	 p3.style.backgroundColor = 'white';
});



const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

const pAfter = document.querySelector('.p3');
pAfter.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
	const r = Math.round(Math.random() * 255 + 1 );
	const g = Math.round(Math.random() * 255 + 1 );
	const b = Math.round(Math.random() * 255 + 1 );
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



//merubah warna dengan slider(input type=range)

//tangkap element
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');


sMerah.addEventListener('input', function(){//jalankan fungsi menggunakan input / setelah di geser nilai nya akan berubah-ubah

	//value = untuk mengambil element yg ada di input
	const r = sMerah.value; 
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+r+', '+g+','+ b+')';
});

sBiru.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



//mengganti Warna dengan menggerakan mouse menggunakan sumbu x & y 

document.body.addEventListener('mousemove', function (event){
	const xPos =Math.round ((event.clientX/window.innerWidth) * 255) ;
	const yPos =Math.round ((event.clientY/window.innerHeight) * 255) ;
	document.body.style.backgroundColor = 'rgb('+xPos+', '+yPos+', 100)'

});
	