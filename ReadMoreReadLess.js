/*

au click sur #showmore
	1. cacher #showmore
  2. afficher #morecontent en fadeIn, quand il est affiché, afficher #showless
  
au click sur #showless
	1. cacher #showless
  2. cacher #morecontent en fadeOut, quand il est affiché, afficher #showmore

afficher #leo au clic sur #showleo
afficher #bibendum au clic sur #showbib

*/

$("#showmore").click(function(){
	$("#morecontent").toggle(); 
	$("#showmore").hide();
  $("#showless").show();
});

$("#showless").click(function(){
	$("#morecontent").fadeOut(); 
	$("#showless").hide();
  $("#showmore").show();
});

$("#showleo").click(function(){
	$("#leo").show(); 
});

$("#showbib").click(function(){
	$("#bibendum").show(); 
});
