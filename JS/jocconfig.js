let configuratii=[
{
	nume: "H",
	z:1,
	straturi: ["1s"],
	nrelectroni:[1],
	rasp: "1s1"

},
{
	nume: "He",
	z:2,
	straturi: ["1s"],
	nrelectroni:[2],
	rasp: "1s2"

},
{
	nume: "Li",
	z:3,
	straturi: ["1s", "2s"],
	nrelectroni:[2,1],
	rasp: "1s2 2s1"

},
{
	nume: "Be",
	z: 4,
	straturi: ["1s", "2s"],
	nrelectroni:[2,2],
	rasp: "1s2 2s2"

},
{
	nume: "B",
	z: 5,
	straturi: ["1s", "2s" , "2p"],
	nrelectroni:[2,2,1],
	rasp: "1s2 2s2 2p1"

},
{
	nume: "C",
	z: 6,
	straturi: ["1s", "2s" , "2p"],
	nrelectroni:[2,2,2],
	rasp: "1s2 2s2 2p2"

},
{
	nume: "N",
	z: 7,
	straturi: ["1s", "2s" , "2p"],
	nrelectroni:[2,2,3],
	rasp: "1s2 2s2 2p3"

},
{
	nume: "O",
	z: 8,
	straturi: ["1s", "2s" , "2p"],
	nrelectroni:[2,2,4],
	rasp: "1s2 2s2 2p4"

},
{
	nume: "F",
	z: 9,
	straturi: ["1s", "2s" , "2p"],
	nrelectroni:[2,2,5],
	rasp: "1s2 2s2 2p5"

},
{
	nume: "Ne",
	z: 10,
	straturi: ["1s", "2s" , "2p"],
	nrelectroni:[2,2,6],
	rasp: "1s2 2s2 2p6"

},
]

let numeAtom = document.getElementById("q-nume");
let numarAtomic = document.getElementById("numar-z");


let corectScreen = document.getElementById("r-corect");
let gresitScreen = document.getElementById("r-gresit");


let clone;

let idcont =2;
let newId = "op1";
let randConfig = Math.floor(Math.random() * configuratii.length);

numeAtom.innerHTML = configuratii[randConfig].nume;
numarAtomic.innerHTML = "Z: " + configuratii[randConfig].z;


function plusconfig(){

  clone = document.getElementById(newId).cloneNode( true );

  newId = "op" + idcont;
  newId = newId.toString();
  clone.setAttribute( 'id', newId );

  // console.log(newId);
  // console.log(typeof newId);

  document.getElementById('options').appendChild( clone );
  document.getElementsByClassName("num")[idcont-1].value =" ";
  idcont++;
  
  

}

let ok=0;

function jocConfig(){
    
    console.log(idcont)
    console.log( configuratii[randConfig].straturi.length+1);
    console.log(idcont===configuratii[randConfig].straturi.length+1)

	if(idcont!==configuratii[randConfig].straturi.length+1) {
        document.getElementById("content-JSF").style.display="none";
        gresitScreen.style.display="flex";
        document.getElementById("raspuns-c").innerHTML = "Raspunsul corect era: " + configuratii[randConfig].rasp;
    	}
		else
	{

    for(let i=1;i<idcont; i++)
    	{
    		console.log(document.getElementsByTagName("select")[i-1]);
    		console.log(document.getElementsByTagName("select")[i-1].value);
    		console.log(configuratii[randConfig].straturi[i-1]);
    		console.log(configuratii[randConfig].nrelectroni[i-1]);
    		if((document.getElementsByTagName("select")[i-1].value===configuratii[randConfig].straturi[i-1]) && (     Number(document.getElementsByClassName("num")[i-1].value)===configuratii[randConfig].nrelectroni[i-1])) ok++;

           }

    if(ok===configuratii[randConfig].straturi.length) {
    	document.getElementById("content-JSF").style.display="none";
        corectScreen.style.display="flex";
    }
    	else {
        document.getElementById("content-JSF").style.display="none";
        gresitScreen.style.display="flex";
        document.getElementById("raspuns-c").innerHTML = "Raspunsul corect era: " + configuratii[randConfig].rasp;
    	}
     }

    for(let i=1;i<idcont;i++)
    	document.getElementsByClassName("num")[i-1].value = " ";

    console.log("IDCONT: " + idcont);

    if(idcont>=3) 
    for(let i=idcont;i>2; i--) {
    	
    	console.log(i);
    	console.log(idcont);
    	document.getElementById("options").removeChild(document.getElementById("options").childNodes[i]);
    }

    ok=0;
    idcont=2;
    newId="op1";
    randConfig = Math.floor(Math.random() * configuratii.length);
    numeAtom.innerHTML = configuratii[randConfig].nume;
    numarAtomic.innerHTML = "Z: " + configuratii[randConfig].z;

    

}

function okFunction(){
	corectScreen.style.display="none";
	gresitScreen.style.display="none";
	document.getElementById("content-JSF").style.display="flex";
	
}

















