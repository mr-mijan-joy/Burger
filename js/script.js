	
	// slider section script

 function xfunction() {
 	let xslide = document.getElementById('slide_one');
 	let yslide = document.getElementById('slide_two');
 	let zslide = document.getElementById('slide_three');

 	xslide.style.display = 'block';
 	yslide.style.display = 'none';
 	zslide.style.display = 'none';
 }

 xfunction();


  function yfunction() {
  	let xslide = document.getElementById('slide_one');
 	let yslide = document.getElementById('slide_two');
 	let zslide = document.getElementById('slide_three');

 	yslide.style.display = 'block';
 	xslide.style.display = 'none';
 	zslide.style.display = 'none';
 }

 yfunction();

  function zfunction() {
  	let xslide = document.getElementById('slide_one');
 	let yslide = document.getElementById('slide_two');
 	let zslide = document.getElementById('slide_three');

 	zslide.style.display = 'block';
 	xslide.style.display = 'none';
 	yslide.style.display = 'none';
 }

 zfunction();