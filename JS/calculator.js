var objects = [
{

  Al:27,
  Ar: 40,
  As:75,
  Ag: 108,
  Au:197,
  At: 210,
  Ac: 227,
  Am:243

} ,

{

  Be:9,
  B: 11,
  Br:80,
  Ba: 137,
  Bi:209,
  Bk: 247,
  Bh: 270

} ,

{

  C:12,
  Ca: 40,
  Cr:52,
  Co: 59,
  Cu:64,
  Cd: 112,
  Cs: 133,
  Cn: 285,
  Ce:140,
  Cf: 251, 
  Cm: 247,
  Cl: 35.5

}, 

{

  Db: 268,
  Ds: 281,
  Dy: 162.5

},

{

  Eu: 152,
  Er: 167,
  Es: 252

},

{

  F:19,
  Fe: 56,
  Fl:289,
  Fm: 257,
  Fr: 223

},

{

  Ga: 70,
  Ge: 73,
  Gd: 157

},

{

  H:1,
  He: 4,
  Hf: 178.5,
  Hg: 201,
  Hs:269,
  Ho: 165

},

{

  I: 127,
  Ir: 192,
  In: 115

},

{

  K:39,
  Kr: 84

},

{

  Li: 7,
  Lv: 293,
  La: 139,
  Lu: 175,
  Lr: 262

},

{

  Mg: 24,
  Mn: 55,
  Mo: 96,
  Mt: 278,
  Md: 258,
  Mc: 288

},

{

  N:14,
  Ne:20,
  Na:23,
  Ni: 59,
  Nh:284,
  Nb: 93,
  No: 259,
  Nd: 93,
  Np: 237

},

{

  O:16,
  Os:190,
  Og:294

},

{

  P: 31,
  Pt: 195,
  Pb: 207,
  Po: 209,
  Pr: 141,
  Pm: 145,
  Pu: 244,
  Pd: 106,
  Pa: 231,
  Ph:231,

},

{

  Rb: 86,
  Ru: 101,
  Rh: 103,
  Re: 186,
  Rn: 222,
  Ra: 226,
  Rf: 263,
  Rg: 272

},

{

  S: 32,
  Se: 79,
  Sc: 45,
  Sr: 88,
  Sn:119,
  Sb: 122,
  Sg: 263,
  Sm: 150,
  Si: 28

},

{

  Ti: 48,
  Te: 127,
  Ta: 181,
  Tl: 204,
  Tm: 169,
  Tb: 159,
  Tc: 99, 
  Ts: 294 
},

{

  U: 238

},

{

  V: 51

},

{

  W: 184

},

{

  Xe: 131

},

{

  Y: 89

},

{

  Zn: 65,
  Zr: 91

}]

var lettersSpecial = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];

var letters = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','k','K','l','L','m','M','n','N','o','O','p','P','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

var acceptedChars = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','k','K','l','L','m','M','n','N','o','O','p','P','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',' ', '(' , ')', '[', ']'];

let masaMoleculara=0;
var currentIndex;
let nr=1;
let value=0;

function findGoodObject(text){

var goodObjIndex;

var letter = text[0];

for(let i=0;i<lettersSpecial.length;i++)
if (letter.toLowerCase()===lettersSpecial[i]) goodObjIndex = i;
return objects[goodObjIndex];

}

function numere(formulaMol, currentInd, formulaMol){
  let vectorNumere = [];
  for(let i=currentInd; i<formulaMol.length; i++)
    {
     if(Number(formulaMol[i+1]) || formulaMol[i+1]==='0'){ 
        vectorNumere.push(formulaMol[i+1]); nr=Number(vectorNumere.join("")); 
        currentIndex=currentInd+ nr.toString().length; 
    
      }
      else {break; nr=1}}


}

let num = 1;

function paranteza(copieFormula){
  let vectorNumere = [];
  for(let i = 1;i<copieFormula.length;i++)
    if(copieFormula[i]=")")  
       {if(Number(copieFormula[i+1]) || copieFormula[i+1]==='0'){ 
        vectorNumere.push(copieFormula[i+1]); num=Number(vectorNumere.join("")); 
          console.log(num);}
        }
      
      
        return num;
  
}

function subVerif(copieFormula, object, objectKeys){

 for(let i=0;i<objectKeys.length;i++){

    if(copieFormula === objectKeys[i])
      {
        value=object[objectKeys[i]];
        currentIndex=copieFormula.length-1;
      return true;
    }}
      
      return false;
}

function verifica(formulaMoleculara){
 
 
 if(formulaMoleculara[0] === "(")  {
  console.log("Am dat de o paranteza"); num=paranteza(formulaMoleculara);
  formulaMoleculara = formulaMoleculara.slice(1, formulaMoleculara.length);
  currentIndex++;
  console.log("F.M " + formulaMoleculara);
} 

  let object = findGoodObject(formulaMoleculara);
  let objectKeys = Object.keys(object);
  let copieFormula = formulaMoleculara;

  while(!subVerif(copieFormula, object , objectKeys))
       {
        copieFormula = copieFormula.slice(0,-1);
        if(!copieFormula) {alert("Te rugam sa introduci o formula valida!"); return false}
      }
  console.log("Formula dupa cautare valoare in obiect: " + copieFormula);

  numere(formulaMoleculara,currentIndex, formulaMoleculara);
  console.log("Numarul ce se afla dupa elementul gasit " + nr);
  console.log(num);
  masaMoleculara+=num*nr*value;
  console.log("Masa Moleculara Temporara: " + masaMoleculara);
  formulaMoleculara = formulaMoleculara.substring(currentIndex+1, formulaMoleculara.length);
  console.log("Noua formula moleculara: " + formulaMoleculara);
  nr=1;

 if(formulaMoleculara[0] === ")")  {

  formulaMoleculara = formulaMoleculara.slice(num.toString().length+1, formulaMoleculara.length); 
  currentIndex+=num.toString().length+1; num=1;
  console.log("F.M " + formulaMoleculara);}
  if(formulaMoleculara.length!==0) { let formulaMol= formulaMoleculara; verifica(formulaMol);}

  return true;
}

function isAlpha(letter){
   for(let i=0;i<acceptedChars.length;i++)
    if(letter===acceptedChars[i]) return true;
  return false;
}

function goodChars(vector){

let ok=[];
for(let i=0;i<vector.length;i++)
ok[i]=0;


for(let i=0; i<vector.length;i++)
{
    let n=0;
    if(Number(vector[i]) || vector[i]==='0') n=1;
    for(let j=0;j<acceptedChars.length;j++)
    if(vector[i]===acceptedChars[j] || n===1) ok[i]=1;
}

for(let i=0; i<ok.length;i++)
   if(ok[i]!==1) return false;

return true;


}

function display(masaMolec){
  let resdiv = document.getElementById('result');
  resdiv.style.display="flex";
  document.getElementById("content").style.position = "absolute";
  document.getElementById("content").style.right = "0";
  document.getElementById("content").style.left = "0";
  let rezultat = document.getElementById("nr");
  rezultat.innerHTML=masaMolec;
}

function flow(){
   masaMoleculara=0;
   formulaMoleculara = document.getElementById("formula-moleculara").value;
   console.log("Formula initiala: " + formulaMoleculara);
   goodChars(formulaMoleculara);
   if((!goodChars(formulaMoleculara)) || (!isAlpha(formulaMoleculara[0]))) {alert("Te rugam sa introduci o formula valida!"); return false}
   if(verifica(formulaMoleculara))
   display(masaMoleculara);
   nr=1;
   value=0;

 }