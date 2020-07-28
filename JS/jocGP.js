let configuratii=[
{
	nume: "H",
	z:1,
	rasp: "1s1",
	g: "1 / I.A",
	p: 1,
	b: "s"

},
{
	nume: "He",
	z:2,
	rasp: "1s2",
	g: "2 / II.A",
	p: 1,
	b: "s"

},
{
	nume: "Li",
	z:3,
	rasp: "1s2 2s1",
	g: "1 / I.A",
	p: 2,
	b: "s"

},
{
	nume: "Be",
	z: 4,
	rasp: "1s2 2s2",
	g: "2 / II.A",
	p: 2,
	b: "s"

},
{
	nume: "B",
	z: 5,
	rasp: "1s2 2s2 2p1",
	g: "13 / III.A",
	p: 2,
	b: "p"

},
{
	nume: "C",
	z: 6,
	rasp: "1s2 2s2 2p2",
	g: "14 / IV.A",
	p: 2,
	b: "p"

},
{
	nume: "N",
	z: 7,
	rasp: "1s2 2s2 2p3",
	g: "15 / V.A",
	p: 2,
	b: "p"

},
{
	nume: "O",
	z: 8,
	rasp: "1s2 2s2 2p4",
	g: "16 / VI.A",
	p: 2,
	b: "p"

},
{
	nume: "F",
	z: 9,
	rasp: "1s2 2s2 2p5",
	g: "17 / VII.A",
	p: 2,
	b: "p"

},
{
	nume: "Ne",
	z: 10,
	rasp: "1s2 2s2 2p6",
	g: "18 / VIII.A",
	p: 2,
	b: "p"

},
]

let numeAtom = document.getElementById("q-nume");
let numarAtomic = document.getElementById("numar-z");
let configAtom = document.getElementById("config-atom");


let corectScreen = document.getElementById("r-corect");
let gresitScreen = document.getElementById("r-gresit");



let randConfig = Math.floor(Math.random() * configuratii.length);

numeAtom.innerHTML = configuratii[randConfig].nume;
numarAtomic.innerHTML = "Z: " + configuratii[randConfig].z;
configAtom.innerHTML = "Configuratie: " + configuratii[randConfig].rasp;



function jocGP(){

	console.log(document.getElementById("varG").value);
	console.log(configuratii[randConfig].g);
	console.log(document.getElementById("varP").value);
	console.log(configuratii[randConfig].p);
	console.log(document.getElementById("varB").value);
	console.log(configuratii[randConfig].b);
    
   

    if((document.getElementById("varG").value === configuratii[randConfig].g) &&  (Number(document.getElementById("varP").value) === configuratii[randConfig].p) && (document.getElementById("varB").value === configuratii[randConfig].b)) {
    	document.getElementById("content-JSF").style.display="none";
        corectScreen.style.display="flex";
    }
    	else {
        document.getElementById("content-JSF").style.display="none";
        gresitScreen.style.display="flex";
        document.getElementById("raspuns-c").innerHTML = "Raspunsul corect era: " + "Grupa: " + configuratii[randConfig].g + " " + "Perioada: " +  configuratii[randConfig].p + " " + "Blocul: " + configuratii[randConfig].b;
    	}
     

    
    randConfig = Math.floor(Math.random() * configuratii.length);
    numeAtom.innerHTML = configuratii[randConfig].nume;
    numarAtomic.innerHTML = "Z: " + configuratii[randConfig].z;
    configAtom.innerHTML = "Configuratie: " + configuratii[randConfig].rasp;
    document.getElementById("varG").value = "1 / I.A";
    document.getElementById("varP").value = "1";
    document.getElementById("varB").value = "s";

    

}

function okFunction(){
	corectScreen.style.display="none";
	gresitScreen.style.display="none";
	document.getElementById("content-JSF").style.display="flex";
	
}

















