let provocari=[
{
	intrebare:"Ce concentrație procentuală are soluția obținută prin eliminarea la fierbere a 160g de apă dintr-o soluție de 400g de concentrație 24%?",
	a:"40%",
	b:"45%",
	c:"42%",
	d:"38,6%",
	raspuns: 1
},
{
	intrebare:"Într-o soluție de soda caustica de concentrație de 10% cu masa soluției de 400g , se adaugă o cantitate de soda caustica astfel încât concentrația sa fie de 20%. Determină masa de soda caustica adăugată.",
	a:"50kg",
	b:"600g",
	c:"50g",
	d:"50,5kg",
	raspuns: 3
},
{
	intrebare:"Ce cantitate de substanta de oxid de aluminiu Al2O3 se obtine la arderea in oxigen a aluminiului cu cantitatea de substanta 2,5 mol?",
	a:"1,5 moli",
	b:"1,25 moli",
	c:"1 mol",
	d:"1,168 moli",
	raspuns: 2
},
{
	intrebare:"Nucleul unui atom contine 16 neutroni,iar invelisul electronic 15 electroni.Indicati elementul chimic caruia ii corespunde nucleul.",
	a:"P",
	b:"S",
	c:"O",
	d:"N",
	raspuns: 1
},
]

let intrebareCh=document.getElementById("intrebare");
let op1=document.getElementById("op1");
let op2=document.getElementById("op2");
let op3=document.getElementById("op3");
let op4=document.getElementById("op4");

let randomNum  = Math.floor(Math.random() * provocari.length);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Timp Ramas: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            
            document.getElementById("post-contTL").style.display = "flex";
            document.getElementById("post-contTL").style.flexDirection = "column";
            document.getElementById("content").style.display = "none";
            
        }
    }, 1000);
}

function showContent(){
    
    intrebareCh.innerHTML = provocari[randomNum].intrebare;
    op1.innerHTML = provocari[randomNum].a;
    op2.innerHTML = provocari[randomNum].b;
    op3.innerHTML = provocari[randomNum].c;
    op4.innerHTML = provocari[randomNum].d;


	var fiveMinutes = 60 * 5;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

	document.getElementById("pre-cont").style.display = "none";
	document.getElementById("content").style.display = "flex";
	
}

function showRes(){
	location.reload();
	return false;
	
}

function chOption(index){
   if(index===provocari[randomNum].raspuns) {
   	
            document.getElementById("post-contR").style.display = "flex";
            document.getElementById("post-contR").style.flexDirection = "column";
            document.getElementById("content").style.display = "none";
            
   }
           else{
            document.getElementById("post-contW").style.display = "flex";
            document.getElementById("post-contW").style.flexDirection = "column";
            document.getElementById("content").style.display = "none";
            }
}
