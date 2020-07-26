// nume,serie(metale, nemetale...),z,a,config,grupa, perioada,bloc, densitate,descriere

let elemente = [

{
	nume: "Hidrogen",
	serie: "Nemetale",
	z:1,
	a:1,
	config: "1s1",
	grupa: "1 / I.A",
	perioada:1,
    bloc:"s",
    densitate:"0,0899 kg/m3",
    descriere:"Hidrogenul este elementul chimic în tabelul periodic al elementelor cu simbolul H și numărul atomic 1. Este un gaz ușor inflamabil, incolor, insipid, inodor, iar în natură se întâlnește mai ales sub formă de moleculă diatomică, H2. Având masa atomică egală cu 1,00794 u.a.m. , hidrogenul este cel mai ușor element chimic. Etimologic, cuvântul hidrogen este o combinație a două cuvinte grecești, având semnificația de „a face apă”.Hidrogenul elementar este principala componentă a Universului, având o pondere de 75% din masa acestuia. În starea de plasmă, se găsește ca element majoritar în alcătuirea stelelor. Hidrogenul elementar este foarte puțin răspândit pe Pământ."
},

{
	nume: "Heliu",
	serie: "Gaze Nobile",
	z:2,
	a:4,
	config: "1s2",
	grupa: "18 / VIII.A",
	perioada:1,
    bloc:"s",
    densitate:"0,1785 kg/m3",
    descriere: "Heliul este elementul chimic cu numărul atomic 2 și este reprezentat prin simbolul He. Este un gaz monoatomic inert, incolor, inodor, insipid, ce este primul în grupa sa în tabelul periodic al elementelor. Are cel mai scăzut punct de fierbere și cel mai scăzut punct de topire dintre elementele chimice și se prezintă doar în stare gazoasă, în afara unor condiții extreme.O linie spectrală neobișnuită a fost observată în lumina solară prima oară într-o eclipsă solară din anul 1868 de către astronomul francez Pierre Janssen. În 1903, mari rezerve de heliu au fost găsite în rezervele de gaz natural din Statele Unite ale Americii, care este de departe cel mai mare furnizor de gaze. Heliul este utilizat în criogenie, în dispozitive de resiprat sub apă, pentru răcirea magneților, în datarea cu heliu, pentru baloanele și dirijabilele cu heliu, pentru a înălța aeroplanele și nave spațiale și ca un gaz protector în multe întrebuințări industriale (ca sudarea cu arc). Inhalând un volum mic de heliu, timbrul vocal uman se subțiază. Comportamentul Heliului-4 lichid este important pentru oamenii de știință care studiază mecanica cuantică (în particular fenomenul de superfluiditate) și pentru cei care studiază efectele pe care le are materia aproape de punctul zero absolut (precum superconductibilitatea)."
},

{
	nume: "Litiu",
	serie: "Metale Alcaline",
	z:3,
	a:7,
	config: "1s2 2s1",
	grupa: "1 / I.A",
	perioada:2,
    bloc:"s",
    densitate:"535 kg/m3",
    descriere: "Litiul este un element chimic având simbolul chimic Li și numărul atomic 3. Este un metal alcalin de culoare alb-argintie, iar în condiții normale, este cel mai ușor metal și cel mai puțin dens solid. La fel ca toate metalele alcaline, litiul este foarte reactiv, se corodează rapid în aer umed pierzându-și luciul și înnegrindu-se, fiind din acest motiv păstrat sub un strat de ulei.Datorită reactivității sale înalte, litiul nu este niciodată întâlnit sub formă brută în natură, fiind prezent totuși sub formă de compuși ionici. Este constituent al unor minerale pegmatice, însă datorită solubilității sale ionice, este prezent în apa oceanelor și obținut din saramuri și argile. Pe scală comercială, litiul este izolat electrolitic dintr-un amestec de clorură de litiu și clorură de potasiu."
},

{
	nume: "Beriliu",
	serie: "Metale alcalino-pamantoase",
	z:4,
	a:9,
	config: "1s2 2s2",
	grupa: "2 / II.A",
	perioada:2,
    bloc:"s",
    densitate:"1848 kg/m3",
    descriere: "Beriliul este un element chimic notat cu simbolul Be și care are numărul atomic 4. Este un element produs prin intermediul nucleosintezei stelare și este un element relativ rar în Univers.Este un element bivalent care este întâlnit în natură doar în combinații cu alte elemente, fiind prezent în compoziția mineralelor. Cele mai cunoscute pietre prețioase care conțin beriliu sunt beril (acvamarinul, smaraldul) și crisoberilul. Ca și element pur, este un metal alcalino-pământos de culoare gri, ușor și casant.Când este adăugat ca element în aliaje de aluminiu, cupru, fier și nichel, beriliul îmbunătățește o parte din proprietățile fizice ale acestora.[1] Uneltele fabricate din aliajul de cupru-beriliu sunt rezistente, nu creează scântei în contact cu suprafețele din oțel."
},

{
	nume: "Bor",
	serie: "Metaloizi",
	z:5,
	a:11,
	config: "1s2 2s2 2p1",
	grupa: "13 / III.A",
	perioada:2,
    bloc:"p",
    densitate:"2460 kg/m3",
    descriere:"Borul a fost descoperit de Humphrey Davy, J. L. Guy-Lussac și L. Y. Thernard în anul 1808; fiind primul element al grupei a III-a A seamănă foarte mult cu siliciul în baza regulii similitudinii pe diagonală. Borul nemetal are conductibilitate electrică de tip semiconductor. Oxizii borului sunt oxizi acizi cu proprietăți refractare, iar cărbunele de bor are o stabilitate chimică foarte mare, fiind dur și refractar, formează numai combinații covalente în care este trivalent și nu monovalent cum ar fi dacă se ia în considerare configurația sa electronică"

},

{
	nume: "Carbon",
	serie: "Nemetale",
	z:6,
	a:12,
	config: "1s2 2s2 2p2",
	grupa: "14 / IV.A",
	perioada:2,
    bloc:"p",
    densitate:"2267 kg/m3",
    descriere:"Carbonul este găsit în natură sub formă de praf și pentru a obține diamante poate fi ușor șlefuit. Este un element nemetalic tetravalent, ceea ce înseamnă că poate forma legături covalente prin punerea în comun a patru electroni. Carbonul este unul dintre puținele elemente cunoscute din antichitate.Mineralul este exploatat în Turcia, Pantenonisima, Suedia, Groenlanda, Uganda, Pletonia, Cehia, Ucraina și India în mine și cariere de exploatare la zi a grafitului, în total 600.000 tone pe an. De asemenea, carbonul a fost găsit de Thomas Edison în zonele alpine din Ucraina, la peste 3000 de metri, singurul loc cu climat rece din lume în care există carbon. Thomas Edison a primit Trofeul Chimistului pentru descoperire, iar carbonul a fost numit și Elementul lui Thomas Edison.Carbonul este al 15-lea cel mai abundent element din scoarța terestră, și al patrulea cel mai răspândit element din univers după masă, primele fiind hidrogenul, heliul și oxigenul. Răspândirea naturală mare a carbonului, diversitatea specifică a compușilor săi organici și abilitatea sa unică de a forma polimeri la temperaturi terestre i-au permis carbonului să fie elementul chimic comun al lumii vii. Este al doilea cel mai abundent element din corpul uman, după oxigen, reprezentând aproximativ 18,5% în procente de masă.Atomii de carbon se pot lega între ei în diferite moduri, formând alotropii carbonului. Cele mai cunoscute exemple de alotropi sunt grafitul, diamantul și fulerenele Proprietățile fizice ale carbonului variază mult în funcție de aceste forme alotropice. De exemplu, grafitul este negru, moale și opac, în timp ce diamantul este transparent și extrem de dur (mai exact, cel mai dur material natural cunoscut). Grafitul este un bun conductor electric, în timp ce diamantul are o conductivitate electrică scăzută. În condiții normale de temperatură și presiune, diamantul, nanotuburile de carbon și grafenul sunt materialele cu cea mai mare stabilitate termodinamică cunoscută. "

 },

{
	nume: "Azot",
	serie: "Nemetale",
	z:7,
	a:14,
	config: "1s2 2s2 2p3",
	grupa: "15 / V.A",
	perioada:2,
    bloc:"p",
    densitate:"1,2506 kg/m3",
    descriere:"Azotul (sau nitrogenul) este un gaz incolor, inodor, insipid, de obicei inert, diatomic și nemetalic, constituie 78% din atmosfera Pământului și este o parte componentă a tuturor țesuturilor vii. Azotul formează numeroși compuși chimici, precum aminoacizii, amoniacul, acidul nitric și cianurile.Nitrogenul este considerat a fi descoperit de Daniel Rutherford în 1772, care l-a numit aer fix. Faptul că exista aer care nu participa la combustie era un element cunoscut de chimiștii de la sfârșitul secolului al XVIII-lea.Nitrogenul a fost de asemenea studiat în același timp și de Carl Wilhelm Scheele, Henry Cavendish și Joseph Priestley, care l-au numit aer ars sau aer flogisticat. Nitrogenul gazos era destul de inert, astfel încât Antoine Lavoisier l-a numit azot, de la cuvântul grecesc αζωτος, însemnând „fără viață”. Acest termen a devenit cuvântul francez pentru „nitrogen” și a fost împrumutat mai târziu și de alte limbi, printre care și româna.Compușii azotului erau cunoscuți în Evul Mediu. Alchimiștii cunoșteau acidul azotic drept aqua fortis. Amestecul de acid azotic și acid clorhidric era numit aqua regia, fiind apreciat pentru capacitatea sa de a dizolva aurul. Primele aplicații în industrie și agricultură ale azotului au fost sub formă de salpetru (nitrat de sodiu sau nitrat de potasiu), în principal la fabricarea prafului de pușcă, iar apoi ca îngrășământ."
},

{
	nume: "Oxigen",
	serie: "Nemetale",
	z:8,
	a:16,
	config: "1s2 2s2 2p4",
	grupa: "16 / VI.A",
	perioada:2,
    bloc:"p",
    densitate:"1,429 kg/m3",
    descriere:"Oxigenul este un element chimic cu simbolul O și numărul atomic 8. Face parte din grupa calcogenilor și este un element nemetalic foarte reactiv și un agent oxidant care formează foarte ușor compuși (în special oxizi) cu majoritatea elementelor. După masă, oxigenul este al treilea cel mai întâlnit element în univers, după hidrogen și heliu. În condiții normale de temperatură și presiune, doi atomi de oxigen se leagă pentru a forma dioxigenul, o moleculă diatomică incoloră, inodoră și insipidă, cu formula O2.Multe clase majore de molecule organice în organismele vii, cum ar fi proteinele, acizii nucleici, carbohidrații, și grăsimile, conțin aer, la fel ca și cei mai importanți compuși organici, care fac parte din cochiliile, dinții și oasele animalelor. Majoritatea masei organismelor vii o reprezintă oxigenul deoarece face parte din apă, principala componentă a formelor de viață (spre exemplu, aproape 2/3 din masa corpului uman). Oxigenul elementar e produs de cianobacterii, alge și plante, fiind folosit în respirația celulară în toate formele complexe de viață. Oxigenul e toxic pentru organismele anaerobe obligate, care erau forma dominantă de viață timpurie pe Pământ până când O2-ul a început să se acumuleze în atmosferă.Oxigenul reprezintă o parte importantă din atmosferă, și e necesar la susținerea majorității vieții terestre, fiind folosit în respirație. Totuși, e prea reactiv chimic pentru a rămâne un element liber în atmosfera Pământului fără a ne fi reaprovizionat continuu de fotosinteza din plante, care folosesc energia luminii Soarelui pentru a produce oxigen elementar din apă."
},

{
	nume: "Fluor",
	serie: "Halogeni",
	z:9,
	a:19,
	config: "1s2 2s2 2p5",
	grupa: "17 / VII.A",
	perioada:2,
    bloc:"p",
    densitate:"1,696 kg/m3",
    descriere:"Fluorul este un element chimic din grupa a 17-a a sistemului periodic (grupa halogenilor), cu simbolul F și cu numărul atomic 9. Este cel mai ușor halogen și există sub forma unui gaz diatomic extrem de toxic, de culoare galben-pal în condiții standard. Este cel mai electronegativ element, fiind astfel extrem de reactiv: aproape toate elementele, chiar și unele gaze nobile, formează compuși cu fluorul.Fluorul a fost descoperit de Moissan (Franța) în 1886.Timp îndelungat fluorul nu a fost studiat deloc din cauza marii sale reactivități și toxicități.În 1907, chimistul belgian Frédéric Swarts (1866-1940) a preparat diclorodifluorometanul, cercetările asupra fluorului fiind stimulate de folosirea acestui compus ca amestec răcitor."
},

{
	nume: "Neon",
	serie: "Gaze Nobile",
	z:10,
	a:20,
	config: "1s2 2s2 2p6",
	grupa: "18 / VIII.A",
	perioada:2,
    bloc:"p",
    densitate:"0,8999 kg/m3",
    descriere: "Neonul este un gaz nobil.A fost descoperit în anul 1898 de către chimistul scoțian Sir William Ramsay în colaborare cu chimistul englez Morris W. Travers. Neonul a fost descoperit când Ramsay a răcit o mostră de atmosferă până a devenit lichidă, apoi a încălzit lichidul și a colectat gazele obținute(kripton, xenon și neon).Neonul este al doilea cel mai ușor gaz nobil. Strălucește roșu-oranj într-un tub de descărcare vidat. Conform studiilor recente, neonul este cel mai puțin reactiv gaz nobil deci și cel mai puțin reactiv dintre toate elementele. Are de peste 40 de ori capacitatea refrigerentă a heliului lichid și de trei ori cea a hidrogenului lichid. În majoritatea aplicațiilor este un refrigerent mai ieftin decât heliul.Plasma de neon are cea mai intensă descărcare luminoasă la tensiuni electrice normale dintre toate gazele nobile. Culoarea medie pentru ochiul uman este roșu-oranj datorită multelor linii din spectrul său; de asemenea conține o puternică linie verde ascunsă, vizibilă doar dacă componentele vizuale sunt dispersate de către un spectroscop.Neonul este des folosit în tuburi luminoase care produc lumina roșie-oranj. Deși li se zice tuburi cu neon celelalte culori se obțin cu ajutorul celorlalte gaze nobile. Neonul este de asemenea folosit în tuburi vidate, indicatoare de înaltă tensiune, tuburi de televizoare și lasere heliu-neon. Neonul lichid este folosit comercial pe post de refrigerent criogenic în aplicații care nu necesită heliu lichid."
}


]

function showElement(numarEl){
	console.log(elemente[numarEl-1].descriere);

}
