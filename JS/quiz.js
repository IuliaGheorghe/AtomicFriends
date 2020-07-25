let questions= [
{
   q: "Numarul catenelor aciclice ramificate ce corespund formulei moleculare C7H16 este:",
   a: 6,
   b: 7,
   c: 8,
   d: 9,
   e: 4,
   correct: 3
},
{
q: "Numarul de compusi ciclici cu formula moleculara C3H6O este egal cu: ",
   a: 1,
   b: 3,
   c: 4,
   d: 8,
   e: 10,
   correct: 2
},
{
q: "Care este masa atomica a Ca?",
   a: 40,
   b: 23,
   c: 24,
   d: 30,
   e: 36,
   correct: 1
},
{
q: "Care este numarul atomic Z al atomului de O?",
   a: 1,
   b: 23,
   c: 24,
   d: 8,
   e: 16,
   correct: 4
},
{
q: "Intr-un recipient cu volumul de 6L se afla 16,8 g de hidrocarbura la temperatura de 27 grade Celsius si presiunea de 1,23 atm. Hidrocarbura contine 14,28% H si are formula moleculara:",
   a: "C4H10",
   b: "C5H12",
   c: "C4H8",
   d: "C5H10",
   e: "CH4",
   correct: 3
},

{
q: "Concentratia procentuala a solutiei obtinute la dizolvarea a 20g NaCl in 80g de H2O este:",
   a: "20%",
   b: "33%",
   c: "10%",
   d: "2%",
   e: "50%",
   correct: 1
},

{
q: "Calculează concentraţia procentuală a solutiei obtinute prin dizolvarea a 25 g de soda caustică in 125 g de apa",
   a: "18%",
   b: "16,6%",
   c: "6,6%",
   d: "80%",
   e: "50%",
   correct: 2
},

{
q: "Masa (in grame) de NaOH ce se obtine din 10 grame Na cu 8% impuritati in reactie cu apa este egala cu:",
   a: 16,
   b: 18,
   c: 15,
   d: 20,
   e: 8,
   correct: 1
},

{
q: "Ce concentrație procentuală are soluția obținută prin eliminarea la fierbere a 160g de apă dintr-o soluție de 400g de concentrație 24%?",
   a: "20%",
   b: "40%",
   c: "60%",
   d: "44%",
   e: "42%",
   correct: 2
},

{
q: "4,8 grame de metal reacționează cu oxigenul, rezultand 8 grame de oxid. Care este metalul?",
   a: "Mg",
   b: "Na",
   c: "K",
   d: "Ca",
   e: "O",
   correct: 1
},

{
q: "Masa moleculara a dioxidului de carbon este egala cu: ",
   a: "33",
   b: "40",
   c: "54",
   d: "42",
   e: "44",
   correct: 5
},

{
q: "Numarul atomilor de carbon din molecula etanului este egal cu: ",
   a: 3,
   b: 1,
   c: 5,
   d: 2,
   e: 4,
   correct: 4
},

{
q: "Numarul legaturilor duble din molecula etinei este egal cu: ",
   a: 1,
   b: 2,
   c: 3,
   d: 0,
   e: 6,
   correct: 4
},

{
q: "Numarul de atomi din molecula glucozei este:",
   a: 24,
   b: 22,
   c: 25,
   d: 20,
   e: 26,
   correct: 1
},

{
q: "Valenta potasiului este egala cu:",
   a: 2,
   b: 3,
   c: 1,
   d: 4,
   e: 5,
   correct: 3
},

{
q: "Valenta clorului este egala cu:",
   a: 2,
   b: 3,
   c: 1,
   d: 4,
   e: 5,
   correct: 3
},

{
q: "Numarul de masa al cuprului este egal cu:",
   a: 62,
   b: 63,
   c: 61,
   d: 64,
   e: 65,
   correct: 4
},

{
q: "Ce masa de Oxid de Magneziu (MgO) exprimata in grame rezulta prin arderea a 48g de Mg?",
   a: 80,
   b: 82,
   c: 62,
   d: 40,
   e: 44,
   correct: 1
},

{
q: "Calculați cantitatea (moli) de acid fosforic care contine 640g O",
   a: 20,
   b: 12,
   c: 22,
   d: 10,
   e: 34,
   correct: 4
},

{
q: "Numarul perechilor de electroni neparticipanti din molecula apei este egal cu:",
   a: 2,
   b: 4,
   c: 1,
   d: 6,
   e: 0,
   correct: 1
},

]

let question=document.getElementById("question");
let a1 = document.getElementById("ans1");
let a2 = document.getElementById("ans2");
let a3 = document.getElementById("ans3");
let a4 = document.getElementById("ans4");
let a5 = document.getElementById("ans5");

let score=0;
let greseli=0;
let qIndex = 1;
let randIndex;


function showQ(randIndex){
	question.innerHTML = questions[randIndex].q;
	a1.innerHTML  = questions[randIndex].a;
	a2.innerHTML  = questions[randIndex].b;
	a3.innerHTML  = questions[randIndex].c;
	a4.innerHTML  = questions[randIndex].d;
	a5.innerHTML  = questions[randIndex].e;

}

function randaway(){
   questions.splice(randIndex,1);

}

function final(){
   document.getElementById("content").style.display="none";

   document.getElementById("scor").style.display="flex";

   let text=document.getElementById("main-change");
   let pct = document.getElementById("punctaj");

   if(score>0) text.innerHTML = "Felicitari! Scorul tau este:"
   	else text.innerHTML = "Ne pare rau. De aceasta data nu ai raspuns corect la nicio intrebare. Suntem siguri in schimb ca pe viitor te vei descurca mult mai bine!"

   	pct.innerHTML = score + " / 100";

}

// function wait(ms) {
//     var start = Date.now(),
//         now = start;
//     while (now - start < ms) {
//       now = Date.now();
//     }
// }

// function flash(div, classn) {
//   var box = document.getElementById(div);
//   box.classList.add(classn);
//   setTimeout(function(){
//       box.classList.remove(classn);
//   }, 2000);
// }

function verifica(x){
   let raspunsid = "ans" + x.toString();
   let raspunscorectid = "ans" + questions[randIndex].correct.toString();
	if(x===questions[randIndex].correct) {score+=10; greseli=0; }
	else
	  {greseli++;
     

				if (greseli==2) final();}
	randaway();
    qIndex++;
    flow();
}



function flow(){


	if(qIndex===11) final(); 
  else{ 
	randIndex=Math.floor(Math.random() * questions.length);
	showQ(randIndex);}
}

flow();