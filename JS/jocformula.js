let joc = [

{
	denumire: "Acid Fosforic",
	raspuns: "H3PO4"
},
{
	denumire:"Apa",
	raspuns:"H2O"
},
{
	denumire:"Hidroxid de Sodiu",
	raspuns:"NaOH"
},
{
	denumire:"Clorura de Magneziu",
	raspuns:"MgCl2"
},
{
	denumire:"Clorura de Sodiu",
	raspuns:"NaCl"
},
{
	denumire:"Bromura de Potasiu",
	raspuns:"KBr"
},
{
	denumire:"Metan",
	raspuns:"CH4"
},
{
	denumire:"Dioxid de Carbon",
	raspuns:"CO2"
},
{
	denumire:"Acid Sulfuric",
	raspuns:"H2SO4"
},
{
	denumire:"Acid Sulfuros",
	raspuns:"H2SO3"
},
{
	denumire:"Acid Azotic",
	raspuns:"HNO3"
},
{
	denumire:"Acid Azotos",
	raspuns:"HNO2"
}

]


let randomNum  = Math.floor(Math.random() * joc.length);

let denumireComp = document.getElementById("q-nume");
let raspunsUser = document.getElementById("q-raspuns");

let corectScreen = document.getElementById("r-corect");
let gresitScreen = document.getElementById("r-gresit");

denumireComp.innerHTML=joc[randomNum].denumire;

function test(raspCorect){

  if(raspunsUser.value===raspCorect) {
    document.getElementById("content").style.display="none";
    corectScreen.style.display="flex";
  }
   else
   {
   	document.getElementById("content").style.display="none";
    gresitScreen.style.display="flex";
    document.getElementById("raspuns-c").innerHTML = "Raspunsul corect era: " + raspCorect;
}

}

function jocFormula(){
   
   test(joc[randomNum].raspuns);

   randomNum = Math.floor(Math.random() * joc.length);
   denumireComp.innerHTML = joc[randomNum].denumire;

  

}

function okFunction(){
	corectScreen.style.display="none";
	gresitScreen.style.display="none";
	document.getElementById("content").style.display="block";
	document.getElementById("q-raspuns").value="";
}