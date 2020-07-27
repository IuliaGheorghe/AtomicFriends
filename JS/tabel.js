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
},

{
	nume: "Sodiu",
	serie: "Metale Alcaline",
	z:11,
	a:23,
	config: "1s2 2s2 2p6 3s1",
	grupa: "1 / I.A",
	perioada:3,
    bloc:"s",
    densitate:"968 kg/m3",
    descriere:"Sodiul (câteodată denumit și natriu) este un metal alcalin, argintiu, moale, cu o reactivitate ridicată. Din această cauză, sodiul nu există liber în natură, ci doar sub formă de combinații chimice deosebit de stabile. În stare liberă, reacționează violent cu apa și ia foc în aer la temperaturi de peste 115°C. La temperatură obișnuită lăsat în aer fumegă. Datorită liniilor sale spectrale din domeniul culorii galben, conferă unei flăcări culoarea galben.Pentru industrie, compușii cei mai importanți sunt: clorura de sodiu (NaCl), carbonatul de sodiu (Na2CO3), bicarbonatul de sodiu (NaHCO3), salpetrul de Chile (NaNO3), soda caustică (NaOH), boraxul (Na2B4O7·10H2O), tiosulfatul de sodiu (Na2S2O3·5H2O).onii de sodiu au o mare importanță în procesele fiziologice din organism, în depolarizarea membranelor, și în transmiterea stimulilor. Contrar tendinței de difuzie, pompa de sodiu-potasiu scoate ioni Na+ din celulă și introduce ioni K+, polarizând membranele (datorită diferențelor de concentrație de Na și K față de fețele membranei), pozitiv la interior și negativ la exterior. În timpul depolarizării, sodiul pătrunde masiv în celula și potasiul iese, schimbând polarizarea membranei.Sodiul este cel mai răspândit metal alcalin din scoarța Pământului, dar și unul dintre cele mai răspândite din Univers. În natură se găsește sub forma depozitelor masive de sare gemă (clorură de sodiu, NaCl), în mineralul halit, în combinație cu clorura de potasiu), în silvină, împreună cu aluminiul în criolit (Na3AlF6), sau sub formă de azotat în salpetrul de Chile (NaNO3, azotat de sodiu), reprezentând 2,6% din masa scoarței terestre. În apa marină, ionii de Na+ îi însoțesc pe cei de Cl-.Liniile spectrale D ale sodiului se găsesc în majoritatea stelelor, precum și în Soare."
},

{
	nume: "Magneziu",
	serie: "Metale alcalino-pamantoase",
	z:12,
	a:24,
	config: "1s2 2s2 2p6 3s2",
	grupa: "2 / II.A",
	perioada:3,
    bloc:"s",
    densitate:"1738 kg/m3",
    descriere: "Magneziul este al optulea element și al treilea metal după aluminiu și fier ca abundență în scoarța solidă terestră, formând aproximativ 2% din masa acesteia. Magneziul este al treilea ca și componență în sărurile dizolvate în apa mării.Denumirea este de origine greacă, Magnesia fiind numele unei regiuni din Tessalia. Englezul Joseph Black a identificat pentru prima oară magneziul ca element în anul 1755, Sir Humphry Davy a obținut pentru prima dată magneziu pur în 1808, dintr-un amestec de oxid de magneziu și HgO, iar A.A.B. Bussy l-a preparat într-o formă legată in 1831. Magneziul este un metal alcalino-pământos și de aceea nu se întâlnește decât combinat cu alte elemente. Se găsește în zăcăminte mari de magnezit (carbonat de magneziu), dolomit și alte minerale de exemplu talc.Magneziul este un metal foarte rezistent, de culoare alb-argintie, foarte ușor (cu o treime mai ușor decât aluminiul) și care devine ușor mat în contact cu aerul. În soluție, formează ioni de Mg++. Este ușor de aprins când este sub formă de fâșii subțiri. Odată aprins, arde cu o flacără albă, foarte luminoasă și este greu de stins, fiind capabil să ardă la interacțiunea cu azotul și dioxidul de carbon.Verdețurile, ca de exemplu spanacul, furnizează magneziu pentru că molecula de clorofilă conține acest metal. Nucile, semințele și unele cereale sunt o bună sursă de magneziu. Deși magneziul este prezent în multe alimente, se întâlnește în general în cantități mici. Conform părerii multor nutriționiști, necesarul zilnic de magneziu nu poate fi asimilat dintr-un singur fel de mâncare. Mâncând o mare varietate de mâncăruri, incluzând cinci feluri de fructe și legume zilnic și multe cereale, se poate asigura doza adecvată de magneziu."
},

{
	nume: "Aluminiu",
	serie: "Metale de post-tranzitie",
	z:13,
	a:27,
	config: "1s2 2s2 2p6 3s2 3p1",
	grupa: "13 / III.A",
	perioada:3,
    bloc:"p",
    densitate:"2700 kg/m3",
    descriere:"Aluminiul este un element chimic comun, ocupând poziția a treia, după oxigen și siliciu, ca răspândire terestră, existând în procent de 7.4%. Compușii aluminiului constituie 8.13% din scoarța terestră, fiind întâlniți în substanțele minerale, precum și în lumea vegetală și animală.În stare naturală este întâlnit sub forma mineralelor, dintre care amintim silicații, silicoaluminații (feldspat, mică, argile), criolitul (fluoaluminat de sodiu), bauxita, corindonul.După fier, acesta a devenit metalul cu cea mai largă întrebuințare. Aluminiul a fost remarcat pentru faptul că este un metal ușor, cu o densitate de 2.7 g/cm3. Această calitate îl face să fie utilizat în cantități mari în industria navală și aeronautică. Capacitatea mare de reflexie este folosită în construirea oglinzilor metalice.Este un bun conducător electric și termic, fiind folosit în industria electrochimică sub formă de sârmă, înlocuind conductoarele electrice din cupru, care sunt mai scumpe.Este un metal ductil și maleabil, fiind posibilă obținerea unei foițe subțiri de 0.005 mm grosime. Totodată, această proprietate este utilizată în industria alimentară, aluminiul fiind folosit la ambalarea produselor alimentare sau în industria farmaceutică.O altă proprietate importantă a acestui metal este rezistența la coroziune, care se datorează formării unui strat protector de oxid. Rezistă la acțiunea chimică a acidului azotic diluat sau concentrat, iar acest lucru se reflectă în fabricarea canistrelor transportoare de acid azotic din aluminiu.Prezintă o afinitate mare pentru oxigen, fiind utilizat în obținerea altor metale precum Cr, Mn, Co, V din oxizi."
},

{
	nume: "Siliciu",
	serie: "Metaloizi",
	z:14,
	a:28,
	config: "1s2 2s2 2p6 3s2 3p2",
	grupa: "14 / IV.A",
	perioada:3,
    bloc:"p",
    densitate:"2330 kg/m3",
    descriere:"Siliciul a fost prima dată identificat de Jons Berzelius în anul 1823.Siliciul este puțin reactiv.Dintre halogeni, Si se combină la temperatura camerei numai cu F. Cu Cl și Br reacționează la 500oC formând tetrahalogenurile respective. Siliciul este foarte răspândit în natură, însă nu în stare liberă,deși masa sa alcătuiește 27,5 % din cea a scoarței Pământului prin constituția silicată sub forma silicei (dioxidului de siliciu) și silicați cum ar fi mica, feldspatul, ș.a. Este al doilea element ca răspândire pe Pământ, după oxigen. Cuarțul este forma cristalină stabilă a bioxidului de siliciu, prezentându-se în stare pură sub formă de cristale incolore (cristal de stâncă), precum și varietăți colorate: ametistul—violet, citrinul—galben etc. Siliciul se găsește în graminee, în scheletul multor animale marine (diatomee și infuzori); după moartea acestor animale, scheletele se depun pe fundul mărilor formând kiselgurul sau pământul de infuzori."

},

{
	nume: "Fosfor",
	serie: "Nemetale",
	z:15,
	a:31,
	config: "1s2 2s2 2p6 3s2 3p3",
	grupa: "15 / V.A",
	perioada:3,
    bloc:"p",
    densitate:"1823 kg/m3",
    descriere:"Fosforul a fost descoperit în anul 1669 de către alchimistul german Hennig Brand din Hamburg. Acesta supunea niște reziduuri de urină la un proces de calcinare în retortă, în absența aerului. Fosfații din urină sufereau un proces de reducere sub influența carbonului format prin piroliza resturilor organice conținute. Ulterior, J. Kunckel în Germania și R. Boyle în Anglia redescopereau procesul de obținere.Hennig a descoperit proprietatea fosforului de a lumina în întuneric cu lumină albastră, numindu-l „foc rece”.Lavoisier intuiește pentru prima dată că fosforul este un element chimic. I. Gahnn (1770), iar apoi Scheele (1777) semnalează prezența elementului în oase. Fosforul nu poate exista liber în natură deoarece are o mare afinitate pentru oxigen. Se găsește numai sub formă de compuși, mai ales fosfați.Principalul mineral care conține fosfor este apatitul. Totodată se află în corpul plantelor și animalelor sub formă de combinații anorganice(carapacea scoicilor, oasele vertebratelor) și sub formă de compuși organici (anumite proteine, fosfatidil-lipide și compuși zaharonucleofosforici din sânge, creier, păr, fibre musculare, gălbenuș de ou, lapte).Din cauza solubilității în grăsimi, fosforul alb este toxic, spre deosebire de fosforul roșu. Fosforul alb în stare solidă și lichidă are molecula formată din patru atomi de fosfor care ocupă vârfurile unui tetraedru regulat. Unghiurile de valență de 60° sunt mici, indicând o tensionare considerabilă a moleculei, ceea ce ar explica marea reactivitate a fosforului alb."
},

{
	
	nume: "Sulf",
	serie: "Nemetale",
	z:16,
	a:32,
	config: "1s2 2s2 2p6 3s2 3p4",
	grupa: "16 / VI.A",
	perioada:3,
    bloc:"p",
    densitate:"1960 kg/m3",
    descriere:"Sulful (numit și pucioasă) este un nemetal polivalent abundent în natură. În condiții standard de temperatură și presiune, moleculele de sulf prezintă o aranjare octatomică, având formula S8. Sulful elementar este un solid cristalin, de culoare galbenă. Din punct de vedere chimic, reacționează cu toate elementele, mai puțin cu aurul, platina, iridiul, azotul, telurul, iodul și gazele nobile. Se află în perioada a 3-a, în grupa a VI-a principală, fiind astfel un calcogen.Sulful este un element esențial în corpul tuturor organismelor vii, dar de cele mai multe ori este întâlnit sub formă de compuși organici cu sulf sau sulfuri metalice, și foarte rar sub formă elementară. Trei aminoacizi (cisteină, cistină și metionină) și două vitamine (biotină și tiamină) sunt compuși organici cu sulf. De asemenea, mulți cofactori biochimici conțin sulf, precum glutationul sau tioredoxina. Legăturile disulfurice S-S, numite și „punți de sulf”, au un rol important în unele țesuturi animale, întrucât conferă rezistență mecanică și insolubilitate proteinei numită cheratină ce se găsește în epiteliul extern, păr, unghii, pene, etc.Majoritatea cantității de sulf obținut la nivel mondial este folosit la nivel industrial pentru producția de acid sulfuric, unul dintre cei mai importanți compuși chimici utilizați. De asemenea, oxizii sulfului (dioxid de sulf, trioxid de sulf, etc) sunt componenți ai ploii acide. În cantități mai mici, sulful este folosit în chibrituri, insecticide și fungicide. Mulți compuși derivați ai acestuia sunt urât mirositori; de exemplu, mirosul de grepfrut sau cel de usturoi este datorat prezenței de compuși organici cu sulf în compoziția plantei. "
},

{
	
	nume: "Clor",
	serie: "Halogeni",
	z:17,
	a:'35,5',
	config: "1s2 2s2 2p6 3s2 3p5",
	grupa: "17/ VII.A",
	perioada:3,
    bloc:"p",
    densitate:"3,214 kg/m3",
    descriere:"Clorul este al doilea cel mai ușor halogen, fiind în grupa acestora situat sub fluor și deasupra bromului, astfel încât proprietățile sale sunt oarecum intermediare celor două elemente. Clorul este un gaz de culoare galben-verzui în condiții normale de temperatură. Este un element extrem de reactiv și un agent oxidant puternic: în comparație cu celelalte elemente, are cea mai mare afinitate pentru electroni și a treia cea mai mare electronegativitate (singurii mai electronegativi fiind doar fluorul și oxigenul).Cel mai răspândit compus al clorului, clorura de sodiu (denumită de obicei sare de bucătărie), a fost cunoscut încă din timpuri străvechi. În jurul anului 1630, clorul gazos a fost sintetizat în urma unei reacții chimice, dar la acel moment nu a fost recunoscut ca o substanță importantă la nivel fundamental.Datorită reactivității sale foarte mari, toată cantitatea de clor din scoarța Pământului se află sub formă de compuși ai clorului, de obicei cloruri ionice, printre care se numără și sarea de bucătărie. Este al doilea cel mai răspândit halogen (după fluor) și al 21-lea cel mai răspândit element chimic din scoarța terestră. Pe de altă parte, cantitatea de săruri de clor din depozitele subterane sunt minore în comparație cu cantitatea imensă de clorură de sodiu dizolvată în apa de mare.Clorul molecular este obținut la nivel industrial prin procedeul electrolizei saramurii. Potențialul mare de oxidare al clorului elementar a dus la dezvoltarea unor utilizări importante, precum producerea înălbitorilor, agenților dezinfectanți și a reactivilor folosiți pe larg în procedeele din industria chimică. Clorul este folosit pentru fabricarea unei game largi de produse uzuale și folositoare, aproximativ două treimi dintre aceștia fiind compuși organici precum policlorura de vinil, dar și mulți compuși intermediari pentru fabricarea materialelor plastice și dezinfecția piscinelor publice. Clorul elementar, la concentrații ridicate, este extrem de periculos și de toxic pentru toate organismele vii, și de aceea a fost folosit ca armă de război chimic în Primul Război Mondial, fiind primul compus gazos de acest gen."
},

{

	
	nume: "Argon",
	serie: "Gaze Nobile",
	z:18,
	a:40,
	config: "1s2 2s2 2p6 3s2 3p6",
	grupa: "18/ VIII.A",
	perioada:3,
    bloc:"p",
    densitate:"1,784 kg/m3",
    descriere:"Argonul se găsește sub formă gazoasă, reprezentând 0,94% din atmosfera terestră. Pe Pământ este cel mai des întâlnit și folosit gaz nobil.Deși este foarte abundent în atmosfera terestră (aproape 1%), argonul nu a fost descoperit până în anul 1894, când fizicianul John Strutt, al treilea Lord Rayleigh și chimistul Sir William Ramsay au raportat existența lui la întâlnirea anuală a Asociației Britanice pentru Avansare a Științei la Oxford.Argonul, având pe ultimul strat structură stabilă de octet, este foarte stabil și opune o rezistență foarte mare la combinarea cu alte elemente. Până în 1962 se credea că toate gazele nobile sunt inerte din punct de vedere chimic. În august 2000 s-a creat primul compus al argonului, expunând o mostră de argon înghețat, care conținea fluorură de hidrogen, la raze ultraviolete. S-a obținut hidro-fluorură de argon (HArF) un compus stabil până la temperatura de 40 K (-233 °C).Argonul reprezintă 0,934% din punct de vedere al volumului și 1,29% din punct de vedere a masei din atmosfera terestră. Se extrage din atmosferă prin intermediul fracționării, un proces prin care de asemenea se obțin și gazele azot, oxigen, neon, kripton și xenon."
},

{

	nume: "Potasiu",
	serie: "Metale Alcaline",
	z:19,
	a:39,
	config: "1s2 2s2 2p6 3s2 3p6 4s1",
	grupa: "1/ I.A",
	perioada:4,
    bloc:"s",
    densitate:"856 kg/m3",
    descriere: "Acest element chimic a fost izolat prima dată din potasă. Este un metal alcalin de culoare alb-argintie, maleabil și ductil, care se oxidează ușor în aer. Reacționează violent cu apa, generând suficientă căldură pentru a aprinde hidrogenul gazos eliberat; poate reacționa și cu gheața până la temperatura de -100 °C.În natură este întâlnit numai sub formă de sare ionică, este prezent în concentrație semnificativă, în stare dizolvată, în apa de mare, de asemenea este întâlnit, sub forma diverșilor compuși, ca și constituent al unor minerale. Ionul de potasiu, prezent în țesuturile vegetale și animale, este un oligoelement indispensabil în metabolismul celulelor vii. Cea mai ridicată concentrație de potasiu o au celulele plantelor, fiind aglomerat în special în fructul lor.Concentrația mare de potasiu din plante, asociat cu cantitățile foarte scăzute de sodiu din acestea, conduce la izolarea potasiului din cenușa de plante, fiind din punct de vedere istoric factorul care a condus la numele de potasă. Agricultura intensă deprivă solul de potasiu, iar fertilizatorii agricoli consumă 93% din producția chimică a potasiului la nivel de economie globală modernă.Potasiul și sodiul sunt metale alcaline, care sunt identice din punct de vedere chimic, acesta fiind un motiv pentru care sărurile acestora nu au fost diferențiate istoric. S-a constatat că sunt elemente chimice diferite doar în momentul când au fost izolate prin electroliză la începutul secolului 19.Funcțiile potasiului și ale sodiului în organismele vii sunt diferite. Animalele, în special, folosesc sodiul și potasiul diferit pentru a genera potențial electric în celulele lor, în special țesutul nervos. Deficitul de potasiu la animale, inclusiv omul, conduce la numeroase disfuncții neurologice."
},

{
	nume: "Calciu",
	serie: "Metale alcalino-pamantoase",
	z:20,
	a:40,
	config: "1s2 2s2 2p6 3s2 3p6 4s2",
	grupa: "2/ II.A",
	perioada:4,
    bloc:"s",
    densitate:"1550 kg/m3",
    descriere:"Este un metal alcalino-pământos de culoare gri, cel de-al cincea element din punct de vedere al răspândirii în scoarța terestră. Calciul este de asemenea al cincilea dintre cei mai răspândiți ioni dizolvați în apa mărilor, după sodiu, clor, magneziu și sulfați.Calciul a fost cunoscut ca element din anul 1808 cand Sir Humphry Davy și renumitul chimist suedez J. J. Berzelius il obțineau prin electroliza clorurii de calciu folosind un catod de mercur. Separarea calciului metalic din amalgamul de calciu rezultat din electroliză era realizată printr-o distilare in vid.Sărurile de calciu și soluțiile ionice ale calciului sunt incolore indiferent de contribuția calciului. Multe dintre săruri nu sunt solubile în apă. În soluție, ionul de calciu are un gust variabil, fiind declarat ca având un gust ușor sărat, acru, mineralic sau chiar liniștitor. Se pare că multe animale pot gusta calciul și utiliza simțul pentru a găsi sărurile pe care le ling.Din punct de vedere chimic calciul este reactiv și moale pentru un metal. Este un element metalic argintiu care trebuie extras prin electroliză din clorură de calciu (CaCl2). Odată produs, formează rapid o crustă de oxid și nitrat când este expus la aer. Este mai greu de aprins decât magneziul, dar atunci când se aprinde arde intens cu o flacără roșie. Calciul reacționează cu apa, producând hidrogen la o viteză îndeajuns de mare pentru a fi observabil, dar la o viteză prea mică pentru a produce căldură la temperatura camerei, deși sub formă de pudră reacția este mai intensă."
},

{
	nume: "Scandiu",
	serie: "Metale de  tranzitie",
	z:21,
	a:45,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
	grupa: "3/ III.B",
	perioada:4,
    bloc:"d",
    densitate:"2985 kg/m3",
    descriere:"Scandiul (simbol Sc) este primul metal tranzițional din sistemul periodic de culoare alb-gălbuie ce formează o multitudine de culori în timp ce se oxidează. A fost descoperit de către Lars Nilson(1840-1899), student al lui Berzelius, în 1876. El a explicat că numele provine de la faptul că elementul face parte din acele minerale care se găsesc doar în Peninsula Scandinavă. Se obține din minereuri, și are diferite utilizări.Scandiul este un metal moale, cu un aspect argintiu. Ca stare de agregare, scandiul se găsește în formă solidă, având punctele de topire și de fierbere peste 1500° Celsius. Cristalele de scandiu au structura cristalină hexagonală. Așchii de scandiu se aprind în aer cu o flacără galbenă strălucitoare pentru a forma oxid de scandiu (III).Scandiul are valența 3 cu plus.Se dezvoltă o distribuție ușor gălbuie sau roz atunci când este oxidat de aer.Este sensibil la intemperii și se dizolvă încet în cei mai mulți acizi diluați.El nu reacționează cu un amestec 1:1 de acid azotic (HNO3) și nici cu un amestec de 48% acid fluorhidric (HF), posibil datorită formării unui strat pasiv impermeabil."
},
{
	nume: "Titan",
	serie: "Metale de  tranzitie",
	z:22,
	a:48,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
	grupa: "4/ IV.B",
	perioada:4,
    bloc:"d",
    densitate:"4560 kg/m3",
    descriere:"Are o densitate mică și este un metal de tranziție dur, lucios și rezistent la coroziune (inclusiv față de apa de mare, apa regală și clor), cu o culoare argintie. Este al nouălea cel mai răspândit element, alcătuind 0,6% din scoarța terestră.[2] Titanul poate fi folosit în combinații cu fierul, vanadiul, molibdenul, printre alte elemente, cu scopul de a produce aliaje puternice și ușoare pentru industria aerospațială (motoare cu reacție, proiectile sau nave spațiale), uz militar, procese industriale (chimicale și petro-chimicale, uzine de desalinizare, hârtie), automobile, agro-alimentare, proteze medicale, implanturi ortopedice, instrumente și pile dentare, implanturi dentare, bijuterii, telefoane mobile și alte aplicații.Doar 5% din producția anuală este folosită pentru a produce Titan sub formă de metal.Restul este utilizat în principal pentru producția de pigment TiO2 folosit în producerea de vopsea albă."
},
{
	nume: "Vanadiu",
	serie: "Metale de  tranzitie",
	z:23,
	a:51,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
	grupa: "5/ V.B",
	perioada:4,
    bloc:"d",
    densitate:"5959 kg/m3",
    descriere:"Este un metal tranzițional moale, ductil, de culoare cenușiu–argintie. Formarea unui strat protector de oxid stabilizează metalul față de oxidare. Vanadiul se găsește în natură numai sub formă de combinații. El este rezistent la acțiunea acizilor (precum acidul sulfuric) și a soluțiilor saline. Oxidarea metalului are loc la peste 660 °C, cu formare de V2O5.Vanadiul a fost descoperit în 1801 de Andrés Manuel del Río în urma studierii mineralului vanadit, pe care l-a denumit „eritroniu” deoarece – prin încălzire – majoritatea sărurilor sale își schimbă culoarea în roșu. Patru ani mai târziu el a fost convins de către alți oameni de știință (în mod eronat) că eritroniul era de fapt crom. Elementul a fost redescoperit în 1831 de Nils Gabriel Sefström, care l-a denumit „vanadiu”, după Vanadis (zeița scandinavă a frumuseții și fertilității).Elementul se găsește în natură în circa 65 de minerale diferite și în depozitele de combustibili fosili. În Rusia și China se obține din zgura de la oțelării, iar în alte țări ca produs secundar al mineritului uraniului sau ca produs de ardere ale fracțiunilor petroliere grele."
},
{
	nume: "Crom",
	serie: "Metale de  tranzitie",
	z:24,
	a:52,
	config: "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
	grupa: "6/ VI.B",
	perioada:4,
    bloc:"d",
    densitate:"7139 kg/m3",
    descriere:"Are o culoare alb-cenușie și este lucios. Numele său derivă de la cuvântul grecesc chroma, care înseamnă culoare, din cauza faptului că majoritatea compușilor săi sunt intens colorați. Oxidul de crom a fost folosit de către chinezi, încă de acum 2000 de ani, pe timpul dinastiei Qin, pentru a acoperi vârfurile armelor. Cromul în combinație cu alte elemente are un colorit variat, fiind folosit și ca pigment în vopsele sau lacuri.Cromul a fost descoperit în anul 1797 de către chimistul francez Louis Nicolas Vauquelin, în minereul crocoit (cromat de plumb), mineral folosit ca pigment. Descoperirea cromului a fost primită cu mare interes, deoarece acesta este foarte rezistent la coroziune și este foarte dur.O altă descoperire majoră a fost faptul că adăugarea de crom în timpul fabricării oțelului, cromul îl face pe acesta să fie mai rezistent la coroziune și la decolorare. Această utilizare, alături de placarea cu crom (electroplacarea) sunt cele mai uzuale metode de folosire a cromului.Cromul și ferocromul se obțin din același mineral, cromit, prin tratarea la cald, având agent reducător siliciul sau prin aluminotermie."
},
{
	nume: "Mangan",
	serie: "Metale de  tranzitie",
	z:25,
	a:55,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
	grupa: "7/ VII.B",
	perioada:4,
    bloc:"d",
    densitate:"7210 kg/m3",
    descriere:"Este un metal alb-argintiu, asemănător fierului, care se găsește în stare liberă în natură (deseori în combinație cu fierul) și în mai multe minerale. Manganul liber este un metal mult folosit în industrie, mai ales ca element de aliere. Ionii de mangan au diverse culori și sunt folosiți în industrie ca pigmenți și ca oxidanți. De asemenea, ionii de mangan (II) apar ca și cofactori pentru o serie de enzime.Unii compuși ai manganului erau cunoscuți încă din preistorie. Au fost descoperite picturi vechi de 17000 de ani realizate cu pigmenți pe bază de bioxid de mangan.Egiptenii și romanii foloseau compuși ai manganului la fabricarea sticlei, fie pentru a o colora, fie pentru a o decolora. De asemenea, în minereurile de fier folosite de spartani se găsea și mangan, iar unii cercetători susțin că duritatea excepțională a oțelurilor spartane se datorează realizării accidentale a unui aliaj fier-mangan.Manganul nu are înlocuitori satisfăcători pentru principalele sale aplicații, legate de utilizarea ca element de aliere. În unele din aplicațiile sale secundare (de exemplu acoperirile cu fosfat de mangan) se pot folosi ca înlocuitori zincul și vanadiul. În fabricarea de baterii, bateriile standard și alcaline ce conțin mangan vor fi probabil înlocuite pe viitor cu baterii pe bază de litiu."
},
{
	nume: "Fier",
	serie: "Metale de  tranzitie",
	z:26,
	a:56,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
	grupa: "8/ VIII.B",
	perioada:4,
    bloc:"d",
    densitate:"7860 kg/m3",
    descriere:"Este elementul chimic cel mai întâlnit pe Terra, formând cea mai mare parte a nucleului acestei planete și este al patrulea element ca abundență în scoarța terestră. Este produs în cantitate mare ca rezultat de fuziune în stelele cu masă mare, unde producerea de nichel-56 (care se dezintegrează în fier) este ultima reacție fuziune nucleară ce este exotermă, devenind ultimul element care se produce înaintea stingerii unei supernove ce duce la reacții ce împrăștie precursorii radionuclizilor fierului în spațiu.Fierul metalic a fost utilizat încă din Antichitate, deși aliajele cu punct scăzut de topire al cuprului au fost folosite primele în istorie. Fierul pur este moale (mai moale decât aluminiul), însă nu se poate obține prin topire. Materialul este întărit de impurități din procesul de topire, precum carbonul. O anumită proporție de carbon (între 0,2% și 2,1%) produce oțelul, care poate fi de 1000 de ori mai rezistent decât fierul pur. Fierul metalic brut este obținut în furnale, unde minereul este redus de către cocs la fonta. O prelucrare ulterioară cu oxigen reduce conținutul de carbon pentru a se obține oțel. Oțelurile și aliajele din fier cu conținut scăzut de carbon, în combinație cu alte metale, sunt de departe cele mai comune metale în industrie, datorită numărului mare de proprietăți dezirabile.Fierul joacă un rol important în biologie, formând substanțe compuse cu oxigen molecular în hemoglobina și mioglobina; acești doi compuși sunt proteine comune ce au rol în transportul oxigenului la vertebrate. De asemenea, fierul este metalul cel mai utilizat în enzimele redox cele mai importante, care sunt implicate în respirația celulară, procesele de oxidare și reducere la organismele vegetale și animale."
},
{
	nume: "Cobalt",
	serie: "Metale de  tranzitie",
	z:27,
	a:59,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
	grupa: "9/ VIII.B",
	perioada:4,
    bloc:"d",
    densitate:"8900 kg/m3",
    descriere:"Acest metal a fost izolat pentru prima oară în 1730 de către chimistul suedez George Brandt.Datorită proprietăților sale feromagnetice cobaltul este folosit pentru fabricarea magneților; oxizii cobaltului sunt folosiți la obținerea unor emailuri albastre (albastru de cobalt) pentru ceramică. Oxizii se mai folosesc și la colorarea sticlei în albastru. O curiozitate este că sărurile higroscopice (de exemplu CoC12) sunt albastre în stare anhidră, și de culoare roz în stare hidratată.Cobaltul face parte dintre metalele care deși sunt relativ puțin răspândite în natura au un rol foarte important în aliarea cu alte metale dure. Importanta cobaltului se datorează în primul rând valorii sale, drept component al așa-numitelor aliaje dure: aliaje metaloceramice și aliaje de turnare de tipul stelitilor, cum și aliaje cu proprietăți specifice deosebite, magnetice, refractare și antiacide."
},
{
	nume: "Nichel",
	serie: "Metale de  tranzitie",
	z:28,
	a:59,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
	grupa: "10/ VIII.B",
	perioada:4,
    bloc:"d",
    densitate:"8908 kg/m3",
    descriere:"Nichelul este un metal răspândit în diverse produse chimice și aliaje, constituind circa 0,008 % din scoarța Pământului. Acest lucru face ca omul să fie încontinuu expus la acest metal. Nichelul este corodat de transpirație, salivă și alte lichide secretate de organism. Incidența alergiei la nichel în populația generală este de circa 30 %, cu o netă preponderență la femei. Sursele de expunere sunt: domestice, profesionale, iatrogene, accidentale și alimentare.ichelul era utilizat încă din antichitate, fără a se ști de existența sa, sub formă de aliaje (bronzuri); în manuscrisele chinezești este menționat „cuprul alb” (aliaj al nichelului cu cuprul), cunoscut și sub numele de batung, folosit pe aceste meleaguri în jurul anilor 1700 - 1400 î.Hr. În Germania medievală a fost găsit un minereu roșu în munții Erzgebirge (Munții Metaliferi), care semăna cu minereul de cupru. Dar atunci când minerii n-au reușit să extragă cupru din el, au dat vina pe un spirit răutăcios al mitologiei germane, Nickel (similar cu Old Nick) (chinuitor de cupru).Nichelul este un metal alb-cenușiu sau alb-argintiu, cu o tentă ușor gălbuie. Este unul dintre cele patru metale (alături de fier, cobalt și gadoliniu) care prezintă proprietăți magnetice. Nichelul este un metal tranzițional greu și ductil."
},
{
	nume: "Cupru",
	serie: "Metale de  tranzitie",
	z:29,
	a:64,
	config: "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
	grupa: "11/ I.B",
	perioada:4,
    bloc:"d",
    densitate:"8960 kg/m3",
    descriere:"Cuprul (numit și aramă) este un metal de culoare roșcată, foarte bun conducător de electricitate și căldură. Cuprul a fost folosit de oameni din cele mai vechi timpuri, arheologii descoperind obiecte din acest metal datând din 8700 î.Hr. A fost unul din primele metale folosite, deoarece cantități mici din el apar în unele locuri în stare liberă. Principalele minereuri ale cuprului sunt: calcozina (sulfura de cupru), calcopirita sau criscolul (ferosulfura de cupru), cupritul (oxidul cupros) și malachitul și azuritul (ambele forme ale carbonatului basic de cupru).Cuprul este folosit încă din cele mai vechi timpuri. Acesta a jucat un rol important în civilizația omenească, fiind folosit la statui, la obiecte casnice, etc. Obiecte din cupru cu o vechime mai mare de 6000 de ani au fost găsite în zone cu importanță istorică, de exemplu la Caldeea, în Egipt, Asiria, Fenicia și America. Originea numelui vine de la cuvântul latinesc cyprium (provenit de la insula Cipru). În Asia au fost descoperite urmele unor mine de cupru ce datează încă din timpul Epocii Caldeene.Se crede că elementul cupru a fost al treilea descoperit, după aur și argint. Judecând după obiectele antice de cupru descoperite, se poate afirma că acest metal a apărut în Egipt, cu 5 000 de ani î.e.n. și apoi, cam cu un mileniu mai târziu, în regiunea dintre Tigru (râu) și Eufrat, unde se dezvoltase civilizația sumeriană. În Egiptul Antic, pe vremea faraonului Turmes, cuprul se exploata în Peninsula Sinai și era cunoscută sub numele de komt."
},
{
	nume: "Zinc",
	serie: "Metale de  tranzitie",
	z:30,
	a:66,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
	grupa: "12/ II.B",
	perioada:4,
    bloc:"d",
    densitate:"7140 kg/m3",
    descriere:"Zincul este un metal de culoare albăstruie spre alb, care devine maleabil în jurul a 100°-150 °C. Se obține din minereuri și din compuși, fiind folosit în aliaje cu alte metale pentru protejarea acestora împotriva oxidării (ruginirii).În antichitate, înainte de a fi identificat ca element chimic, zincul era folosit pentru obținerea alamei. Un aliaj conținând aproximativ 87% zinc s-a găsit în unele ruine preistorice din Transilvania. Printre cele mai importante se numără alama, bronzul comercial, aluminiu de sudura, nichel argintiu și argint German. Zincul nu e considerat toxic, totuși dacă se inhalează oxid de zinc (ZnO) apare o tulburare cunoscută sub numele de tremurat de zinc.În Europa modernă, zincul metalic a fost redescoperit de Margraff în 1746, prin reducerea calaminei cu mangalul.Zincul a fost un factor important în procedeul de descoperire al bateriei, astfel savantul Alessandro Volta l-a utilizat pentru a inventa Pila Volta, prima baterie din lume. Ea era alcătuită din diferite straturi succesive de cupru, zinc și postav îmbibat în acid sulfuric, care produceau curent electric. Această invenție a fost făcută în anul 1800."
},
{
	nume: "Galiu",
	serie: "Metale de post-tranzitie",
	z:31,
	a:70,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
	grupa: "13/ III.A",
	perioada:4,
    bloc:"p",
    densitate:"5904 kg/m3",
    descriere:"Galiul nu se găsește, în natură, în forma sa elementară, dar se găsește, sub formă de sare de galiu (III), în minereurile de bauxită sau în cele de zinc.În 1871, chimistul rus Dimitri Mendeleev, a prezis existența galiului, elementul situat în sistemul periodic sub aluminiu, element numit de acesta eka-aluminiu. De asemeni, Mendeleev a prezis și o parte din proprietățile acestuia, și anume: densitatea, punctul de topire, caracterul de oxid etc., proprietăți ce nu diferă cu mult față de realitate. Galiul a fost descoperit de Paul Emile Lecoq de Boisbaudran în 1875, cu ajutorul spectroscopiei, analizând o mostră de sfalerit. Acesta a observat două linii violete, caracteristicile spectrale ale galiului. Originea numelui: din cuvântul latinesc Gallia (vechiul nume al Franței).Galiul foarte pur are o culoare argintie, iar metalul solid se frânge concoidal, ca sticla.Galiul se extinde cu 3,1% când se solidifică, prin urmare stocarea în recipiente din sticlă sau metal este evitată din cauza posibilității ruperii containerului. Punctul de topire al galiului la 29,7646 °C, este peste temperatura normală a unei camere și este aproximativ la aceeași temperatură cu cea a unei zile de vară la latitudinile mijlocii ale Pământului; prin urmare galiul nu este marcat ca lichid în Tabelul periodic, singurele elemente lichide la temperatura camerei cunoscute fiind mercurul (metal) și bromul (nemetal)."
},
{
	nume: "Germaniu",
	serie: "Metaloizi",
	z:32,
	a:73,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
	grupa: "14/ IV.A",
	perioada:4,
    bloc:"p",
    densitate:"5,32 kg/m3",
    descriere:"Este un metaloid lucios, dens, de culoare gri, ce posedă proprietăți chimice similare cu staniul și siliciul. Germaniul pur este un semiconductor, având un aspect similar cu siliciul. Germaniul reacționează cu oxigenul, formând numeroși compuși, fiind astfel mult prea reactiv pentru a fi găsit în stare nativă pe Pământ.Datorită concentrației sale reduse în componența mineralelor, descoperirea germaniului a avut loc târziu. Germaniul ocupă locul 50 ca și abundență în compoziția scoarței terestre. In 1869, Dmitri Mendeleev a prezis existența elementului, precum și unele proprietăți ale acestuia pe baza poziției sale in Tabelul periodic, numindu-l ekasiliciu. Aproape două decenii mai târziu, Clemens Winkler descoperă germaniul (alături de argint si sulf), în argirodit. Deși acest element semăna cu arsenul și stibiul ca și aspect, proprietățile sale chimice de combinare confirmau proprietățile similare cu siliciul, confirmând astfel predicția lui Mendeleev. Winkler va numit elementul după țara sa, Germania. În zilele noastre, germaniul este extras în principal din sfalerit (principalul minereu al zincului), cu toate că germaniul mai poate fi extras din minereuri de argint, plumb și cupru.Germaniul metalic este utilizat ca și semiconductor în tranzistori, precum și alte dispozitive electronice. Primul deceniu al electronicii s-a bazat pe utilizarea germaniului ca și element constituent al tranzistorilor. Cu toate acestea, în prezent, doar 2% din producția de germaniu este alocată acestui domeniu, unde siliciul de puritate înaltă este preponderent utilizat. Utilizările curente ale germaniului includ încorporarea sa în sistemele de fibră optică și celule solare. Compușii germanici sunt de asemenea utilizați ca și catalizatori, precum și materiale pentru nanofire. Acest element formează o gamă largă de compuși organometalici, precum tetraetilgermanul, de asemenea util în chimia organometalică."
},

{
	nume: "Arsen",
	serie: "Metaloizi",
	z:33,
	a:75,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
	grupa: "15/ V.A",
	perioada:4,
    bloc:"p",
    densitate:"5,727 kg/m3",
    descriere:'Numele grec "arsenicon" (în traducere "bărbat"), era atribuit în antichitate unor sulfuri de arsen și acidului arsenicos. Pentru prima dată, Platon și Strabon amintesc de existența și exploatarea arsenului din muntele Sandaracurgium – provincia Pont. Ca element, se pare că a fost preparat pentru prima dată de Albertus Magnus, în anul 1250, din auri-pigment și săpun, și apoi de Paracelsus prin sublimarea sandaracului cu coji de ou. Alchimiștii foloseau arsenul pentru albirea metalelor colorate ca fierul și cuprul. Acestea, frecate cu arseniu, primeau un luciu alb.În paralel cu descoperirea proprietăților fizico-chimice ale arsenului, alchimiștii au descoperit și proprietățile biomedicale. Din arsenul alb s-au preparat puternice otrăvuri, care au făcut multe victime de-a lungul anilor. Se spune că Papa Pius al III-lea și Clement al XIV-lea au fost otrăviți cu "aqua Toffana di Napoli" preparată din arseniu, iar despre Napoleon Bonaparte că ar fi fost asasinat pe insula Sf. Elena prin adaos regulat de arseniu în hrană de către un trimis al regelui Ludovic al XVIII-lea. Mult mai târziu, la sfârșitul secolului XIX și începutul secolului trecut, s-a descoperit și efectul benefic al arsenului. Era anul 1909 când P. Ehrlich descoperă salvarsanul și prorietatea lui de a vindeca sifilisul.'
    },
    {
	nume: "Seleniu",
	serie: "?",
	z:34,
	a:79,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
	grupa: "16/ VI.A",
	perioada:4,
    bloc:"p",
    densitate:"4,79 g/cm3 la 300 K",
    descriere:"A fost descoperit de către Berzelius în 1817 și studiat mai departe de către alți cercetători ce-l găsesc în roci, seleniul în timp devine unul din importantele minerale care sunt răspunzătoare de o bună funcționalitate a organismului uman, respectiv animal.În cantități mari, se produce otrăvirea cu seleniu ce se manifesta printr-un prurit rebel și prin apariția de ulcere pe piele. Originea numelui este din cuvântul grecesc Selênê (luna).Din punct de vedere chimic, seleniul este foarte apropiat de sulf, căruia îi seamănă foarte mult( se afla și în aceeași grupă din sistemul periodic), astfel încât seleniul va putea împrumuta uneori sistemele enzimatice sau de transport ale sulfului.Seleniul se folosește în celule fotoelectrice, camere de filmat, la redresarea curentului electric, copiatoare etc. Seleniul pur își crește conductivitatea de o mie de ori atunci când este mutat de la întuneric la lumina solară puternică, lucru care îl face utilizat la construirea luxmetrelor."
},
{
	nume: "Brom",
	serie: "Halogeni",
	z:35,
	a:80,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
	grupa: "17/ VII.A",
	perioada:4,
    bloc:"p",
    densitate:"3,1028 kg/m3",
    descriere:"Bromul face parte din grupa halogenilor (grupa a VII-a principală), împreună cu fluorul, clorul, iodul și astatinul. În stare nativă este un element foarte reactiv, reacționând direct cu majoritatea metalelor și cu multe nemetale, dând săruri numite bromuri. De aceea, nu este prezent deloc în stare liberă în atmosferă.Bromul este singurul nemetal care la temperatura și presiunea obișnuită (la condițiile camerei) se află în stare lichidă. Are un miros puternic, neplăcut, de unde provine și numele său (din greacă βρῶμος bromos înseamnă miros urât),[1] posedând un caracter nemetalic. Bromul formează compuși importanți, printre care bromurile (menționate mai sus, exemple: bromură de potasiu și bromură de sodiu) și acidul bromhidric. Unele utilizări importante ale bromului sunt în industria farmaceutică, fotografică (în acest caz se folosește sarea de argint numită bromură de argint), în pesticide, în tratamentele cu băi termale, etc."
    },
    {
	nume: "Kripton",
	serie: "Gaze Nobile",
	z:36,
	a:84,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
	grupa: "18/ VIII.A",
	perioada:4,
    bloc:"p",
    densitate:"3,749 kg/m3",
    descriere:"Este un element nereactiv, ca și celelalte gaze nobile, formând un singur compus cunoscut, Fluorura de kripton (KrF2). Este un gaz rar, existând în atmosferă, o parte la 670 000. Se obține din distilarea fracționată a aerului lichid, și în stare pură este inodor și incolor. Este ultilizat la tuburile fluorescente și la lumina stroboscopică, în aeroporturi, precum și la lămpile aparatelor foto sau la lasere.Kryptonul a fost descoperit în anul 1898 în Marea Britanie de Sir William Ramsay, un chimist scoțian și Morris Travers, un chimist englez, în reziduul rămas după evaporarea aproape a tuturor componentelor aerului lichid. Neonul a fost descoperit printr-o procedură similară de aceeași oameni doar peste câteva săptămâini.William Ramsay a fost distins cu Premiul Nobel pentru Chimie în anul 1904 pentru descoperirea unei serii de gaze nobile, inclusiv kriptonul."
},

{
	nume: "Rubidiu",
	serie: "Metale alcaline",
	z:37,
	a:"85,5",
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
	grupa: "1/ I.A",
	perioada:5,
    bloc:"s",
    densitate:"1,532 kg/m3",
    descriere:"Rubidiul este un metal alcalin moale, de culoare alb-argintie; în stare elementară este foarte reactiv, cu proprietăți similare altor metale alcaline, precum oxidarea rapidă în aer. Rubidiul natural este un amestec izotopic: 85Rb, singurul izotop stabil, cu o concentrație de 72%. Restul procentelor, de 28% reprezintă izotopul radioactiv 87Rb ce are timpul de înjumătățire de 49 miliarde de ani - mai mult de 3 ori vârsta estimată a Universului.Chimiștii germani Robert Bunsen și Gustav Kirchhoff au descoperit rubidiul in 1861 datorită metodei spectroscopiei atomice.Acest metal nu este cunoscut ca având o funcție vitală pentru organisemele vii. Cu toate acestea, a fost observat faptul că rubidiul ionic este asimilat de organisme similar ionului de potasiu, fiind asimilat activ de către celulele vegetale și animale datorită încărcăturii similare."
    },
 {
	nume: "Strontiu",
	serie: "Metale alcalino-pamantoase",
	z:38,
	a:88,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
	grupa: "2/ II.A",
	perioada:5,
    bloc:"s",
    densitate:"?",
    descriere: "A fost descoperit de către Adair Crawford și William Cruickshank în anul 1790. Denumirea acestuia a fost dată după orașul scoțian Strotian. Stronțiul este un element foarte reactiv de consistență moale de culoare metalică, alb-argintie și galbenă în cazul în care acesta intră în contact cu aerul. Stronțiul se regăsește în natură în celestină și stronțianit. În timp ce stronțiul natural este stabil, izotopul sintetic al acestuia 90Sr este radioactiv, se găsește în deșeurile radioactive și are un timp de înjumătățire de 28,90 ani.Stronțiul este un metal gri, argintiu care este mai moale decât calciul și cu mult mai reactiv cu apa, cu care reacționează formând hidroxidul de stronțiu și Hidrogen gazos. Datorită faptului că acesta este extrem de reactiv în contact cu aerul sau apa, acest element apare în mod normal în natură doar în compuși cu alte elemente, cum ar fi minerale precum stronțianitul și celestita. Stronțiul este păstrat sub o hidrocarbură lichidă cum ar fi kerosenul sau uleiul mineral pentru a preveni oxidarea. Strontiul metalic fin, sub formă de pulbere este foarte piroforic, aprinzându-se spontan în aer la temperatura camerei. Sărurile de stronțiu dau o culoare roșu aprins în flăcări motiv pentru care sunt utilizate în pirotehnie și în producția de rachete de semnalizare."
},
{
	nume: "Ytriu",
	serie: "Metale de tranzitie",
	z:39,
	a:89,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
	grupa: "3/ III.B",
	perioada:5,
    bloc:"d",
    densitate:"4472 kg/m3",
    descriere:"Primul element al blocul d în a 5-a perioadă, ytriul este un metal de tranziție de culoare metalic-argintie, care prezintă caracteristici chimice similare lantanidelor, fiind astfel des clasificat ca un pământ rar.Ytriul este aproape mereu găsit în combinație cu lantanidele în mineralele pământurilor rare, nefiind niciodată găsit în natură ca element liber. Singurul său izotop stabil (89Y) este și singurul său izotop natural.Cea mai importantă utilitate a ytriului este cea de fabricare a substanțelor luminescente (în particular fluorescente), întrebuințate în tuburile catodice pentru ecranele de televizor (CRT) și a LED-urilor.Ytriul este de asemenea folosit în producerea de electrozi, electroliți, filtre electronice, lasere, supraconductori, aparatură medicală; se adaugă, de-asemenea, în cantități infime în compoziția unor unor materiale, pentru îmbunătățirea unor proprietăți mecanice. Ytriul nu are niciun rol biologic, expunerea la radioizotopii acestuia putând însă cauza cancer pulmonar la oameni."
   },
   {
	nume: "Zirconiu",
	serie: "Metale de tranzitie",
	z:40,
	a:91,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
	grupa: "4/ IV.B",
	perioada:5,
    bloc:"d",
    densitate:"6,511 kg/m3",
    descriere:"Zirconiul este folosit mai nou și în stomatologie sub forma de oxid de zirconiu (zirconia), ca cea mai fizionomică opțiune pentru o coroană dentară. Se pune sub porțelan în loc de metal pentru a nu transpare sub porțelan. Se mai folosește și la implantologie tot din același motiv, dar și pentru că are o biocompatibilitate superioară, înlocuind titanul. Zirconia se mai folosește si la fabricarea bijuteriilor.Hidrura de zirconiu este folosită ca material moderator care ține hidrogenul legat la temperatura de lucru a reactorului de fisiune. Alegerea ca material pentru zona de moderare se datorează absorbției minime de neutroni."
},

{
	nume: "Niobiu",
	serie: "Metale de tranzitie",
	z:41,
	a:93,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
	grupa: "5/ V.B",
	perioada:5,
    bloc:"d",
    densitate:"8570 kg/m3",
    descriere:"Niobiul (cunoscut și sub precedenta denumire de columbiu) este un metal de tranziție moale, de culoare gri, ductil, fiind găsit des în mineralele piroclor și în columbit, de unde și fosta denumire de „columbiu”. Numele metalului provine din mitologia greacă, fiind numit după Niobe, fiica lui Tantal. Numele reflectă similaritatea ridicată ale caracteristicilor fizice și chimice ale celor două elemente, fapt ce le face greu de distins.Niobiul a fost folosit comercial abia la începutul secolului 20. Brazilia este producătorul principal al niobiului și al feroniobiului, (un aliaj al niobiului cu fier ce conține 60-70% niobiu). Niobiul este folosit în special în aliaje, deobicei în oțeluri precum cele utilizate în fabricarea conductelor de gaz.Niobiul este folosit în diverse materiale supraconductibile. Aceste aliaje supraconductibile (care mai conțin și titan și staniu) sunt folosite pe scară largă în magneți supraconductori pentru scannerele IRM. Printre alte utilizări ale niobiului se numără folosirea sa în sudură, industria nucleară, electronică, optică, numismatică și fabricarea de bijuterii. Toxicitatea mică și irizația căpătată prin anodizare a niobiului sunt avantaje particulare."
    },
{
	nume: "Molibden",
	serie: "?",
	z:42,
	a:96,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
	grupa: "6/ VI.B",
	perioada:5,
    bloc:"d",
    densitate:"10,28 kg/m3",
    descriere:"Numele este de origine neo-latină (Molybdaenum) și înseamnă plumb, deoarece minereurile sale au fost confundate cu cele de plumb.În stare liberă, este un metal argintiu. Formează cu ușurință carburi dure și stabile, motiv pentru care este utilizat adesea la obținerea oțelurilor foarte rezistente. Molibdenul nu apare în natură ca metal liber, ci sub formă de combinații în diferite stări de oxidare, în diverse minerale. Deși mineralele de molibden se cunosc de multă vreme, elementul a fost „descoperit” de Carl Wilhelm Scheele (în sensul diferențierii ca entitate din sărurile minerale ale altor metale) în 1778. A fost izolat în formă metalică pură, pentru prima dată de Peter Jacob Hjelm în 1781.Molibdenul este utilizat în cantități mici pentru creșterea durității și elasticității oțelului. În raport de peste 2/3 din producția totală de molibden, este folosit pentru obținerea aliajelor de fero-molibden. În primul război mondial datorită cantităților mici existente de wolfram, acesta va fi înlocuit de molibden în vederea obținerii aliajelor dure. Până în prezent molibdenul este folosit la aliaje cu scopul de a crește duritatea, rezistența termică și la coroziune a metalelor. Molibdenul se mai folosește și pentru obținerea straturilor protectoare si oglinzilor speciale."
},
{
	nume: "Technetiu",
	serie: "Metale de tranzitie",
	z:43,
	a:98,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
	grupa: "7/ VII.B",
	perioada:5,
    bloc:"d",
    densitate:"11,49 kg/m3",
    descriere:"Este un metal de tranziție radioactiv, cel mai ușor element fără izotopi stabili. Pe Pămînt se găsește în cantități extrem de mici, în zăcămintele de uraniu sau molibden; pentru aplicații medicale și științifice technețiul este produs pe cale artificială. Proprietățile technețiului sînt intermediare între cele ale manganului și reniului, și au fost prezise în bună măsură de Dmitri Mendeleev înainte de descoperire.Technețiul a fost descoperit de Carlo Perrier și Emilio Segrè în 1936, în filme de molibden care deveniseră radioactive după utilizarea ca piese într-un ciclotron. A fost primul element chimic produs artificial, motiv pentru care în 1947 i-a fost dat numele technețiu (în greacă τεχνητός înseamnă „artificial”). Majoritatea technețiului produs pe pămînt este un rezultat al fisiunii uraniului-235 în reactoarele nucleare.Anhidrida acidului pertechnetic este heptaoxidul de ditechnețiu, Tc2O7."
    },
{
	nume: "Ruteniu",
	serie: "Metale de tranzitie",
	z:44,
	a:101,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
	grupa: "8/ VIII.B",
	perioada:5,
    bloc:"d",
    densitate:"12450 kg/m3",
    descriere:"Ruteniul este un metal solid sfărămicios de culoare alb cenușie, care se prezintă sub formă de agregate cristaline tetramere.La temperatura camerei își menține suprafața exterioară lucioasă caracteristică metalelor.Încălzit în prezența oxigenului la o formă incandescentă, se formează un oxid de rutil toxic și instabil, care devine în prezența luminii explosiv.Contactele electrice în întrerupătoare prin adăugare de ruteniu în aliajele de platină și paladiu crește rezistența considerabil a acestor contacte la uzură.In aliajele de titan, un adaos de 0,1 % ruteniu mărește considerabil rezistența la coroziune.Ruteniul poate fi folosit în diverse reacții chimice drept catalizator (accelerator al reacției chimice).In ultimul timp ruteniul este folosit tot mai mult ca bijuterie, de asemenea și în industria computerelor."
},
{
	nume: "Rodiu",
	serie: "Metale de tranzitie",
	z:45,
	a:103,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
	grupa: "9/ VIII.B",
	perioada:5,
    bloc:"d",
    densitate:"12450 kg/m3",
    descriere:"Este un metal de tranziție rar, din grupa platinei, de culoare alb-argintie și cu o duritate ridicată. El se găsește în minereurile de platină și se folosește ca element de aliere în aliajele de platină și drept catalizator.Rodiul a fost descoperit în anul 1803 de către chimistul britanic William Hyde Wollaston, în minereu de platină provenit din Columbia, la scurtă vreme după ce descoperise și paladiul.Rodiul este un metal alb-argintiu dur, cu un punct de topire mai ridicat și o densitate mai redusă decât platina. De obicei nu formează oxizi și nu este atacat de cei mai mulți acizi. Este complet insolubil în acid azotic, puțin solubil în aqua regia, dar numai acidul sulfuric poate să-l dizolve complet, atunci când este sub formă de pulbere. În stare topită, rodiul absoarbe oxigen, dar odată începută solidificarea, oxigenul este eliminat.Fiind un metal nobil, rodiul pur este inert din punct de vedere chimic, dar devine foarte reactiv în combinațiile chimice."
    },
 {
	nume: "Paladiu",
	serie: "Metale de tranzitie",
	z:46,
	a:107,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10",
	grupa: "10/ VIII.B",
	perioada:5,
    bloc:"d",
    densitate:"12,023 kg/m3",
    descriere:"Paladiul este un metal rar, strălucitor, de culoare alb-argintiu, descoperit în 1803 de William Hyde Wollaston. Elementul este numit după asteroidul Pallas, care a fost denumit după epitetul zeiței grecești Atena, obținut de aceasta când l-a omorât pe Pallas.Paladiul, împreună cu platina, rodiul, ruteniul, iridiul și osmiul formează un grup de elemente cunoscut ca și grupa platinei (PGM-uri). Metalele din grupa platinei au proprietăți chimice asemănătoare, dar paladiul are cel mai scăzut punct de topire și este cel mai puțin dens metal al grupei.În 2010, cercetători japonezi de la Universitatea Kyoto au creat pentru prima dată, cu ajutorul nanotehnologiei, un aliaj artificial similar cu paladiul.Deoarece elementele rodiu și argint nu pot fi amestecate de obicei, nici măcar prin topire la temperaturi foarte ridicate (ele comportându-se oarecum ca apa față de ulei), cercetătorii au folosit o soluție din cantități egale de rodiu și argint, au vaporizat-o, și au amestecat puțin câte puțin alcool fierbinte, obținând particule cu diametrul de ca. 10 nanometri, atomii celor două metale fiind amestecați în mod egal. Aliajul are aceleași proprietăți ca și paladiul."
},
{

	nume: "Argint",
	serie: "Metale de tranzitie",
	z:47,
	a:108,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s1",
	grupa: "11/ I.B",
	perioada:5,
    bloc:"d",
    densitate:"10490 kg/m3",
    descriere:"Este un metal prețios, care a folosit în cursul istoriei la baterea monedelor și pentru crearea de bijuterii. În prezent, argintul are de asemenea o gamă largă de întrebuințări industriale.Primele mine de argint au aparut mai înainte de perioada 3000 î.Hr. Argintul a fost un metal cunoscut de toate civilizațiile antice, însă spre deosebire de aur, este foarte rar găsit în stare naturală, lucru care explica faptul că dacă ar fi mai abundent, tot nu ar putea fi folosit decât mai târziu. Cu toate acestea, când a apărut prima oară în Egipt, a fost mult mai valoros decât aurul.Este un metal alb, strălucitor, și, după cum îi spune și numele, argintiu. În tăietură proaspătă, are o culoare ușor gălbuie. Face parte, împreună cu aurul, platina, paladiul, iridiul din categoria metalelor prețioase. Este moale, maleabil și ductil, fiind metalul cu cea mai mare conductibilitate electrică și termică.În anul 2009, producția mondială de argint a fost estimată la 688 milioane de uncii, adică circa 21.400 tone.În decembrie 2010 argintul a atins cel mai ridicat preț înregistrat din 1980 încoace, fiind cotat la 30,7 de dolari uncia."
},

{

	nume: "Cadmiu",
	serie: "Metale de tranzitie",
	z:48,
	a:112,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2",
	grupa: "12/ II.B",
	perioada:5,
    bloc:"d",
    densitate:"8,65 kg/m3",
    descriere:" Acest metal alb-strălucitor este asemănător din punct de vedere chimic cu alte două elemente chimice din grupa 12, zincul și mercurul. Concentrația medie a cadmiului în scoarța Pământului este intre 0.1 și 0.5 parți per milion (ppm). A fost descoperit în 1817 simultan de către Stromeyer și Hermann , amândoi din Germania, ca și o impuritate a carbonatului de zinc.Cadmiul este un component minor în majoritatea minereurilor de zinc, astfel fiind un produs secundar în producția de zinc. A fost folosit timp de mulți ani ca și pigment și ca material pentru placarea oțelului, acesta fiind rezistent la coroziune. Utilizarea cadmiului este în general scăzută din cauza toxicitatii."
    },
{

	nume: "Indiu",
	serie: "Metale de post-tranzitie",
	z:49,
	a:115,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p1",
	grupa: "13/ III.A",
	perioada:5,
    bloc:"p",
    densitate:"7,31 kg/m3",
    descriere:"Indiul este un element chimic de culoare gri-argintiu din categoria metalelor, având numărul atomic 49. Simbolul chimic este In.Acest metal este regăsit în:celule solare, celule foto sau analize medicale pentru sânge și rinichi."
},

{

	nume: "Staniu",
	serie: "Metale de post-tranzitie",
	z:50,
	a:119,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p2",
	grupa: "14/ IV.A",
	perioada:5,
    bloc:"p",
    densitate:"7,28 kg/m3",
    descriere:"Prima menționare a acestui metal, care, după cum credeau oamenii înainte, avea chiar și unele proprietăți magice, poate fi găsită în textele biblice. Staniul a jucat un rol decisiv în îmbunătățirea vieții în timpul epocii bronzului. Extracția și utilizarea staniului pot fi datate la începuturile epocii bronzului în jurul anului 3000 î.Hr., când s-a observat că obiectele de cupru formate din minereuri polimetalice cu conținut metalic diferit aveau proprietăți fizice diferite. Cele mai vechi obiecte de bronz aveau un conținut de staniu sau arsenic mai mic de 2% și, prin urmare, se consideră a fi rezultatul alierii neintenționate datorită conținutului de metale din minereul de cupru. Adăugarea unui al doilea metal la cupru îi mărește duritatea, scade temperatura de topire și îmbunătățește procesul de turnare prin producerea unei topituri mai fluide care se răcește la un metal mai dens, mai puțin spongios. Aceasta a fost o inovație importantă care a permis formele mult mai complexe turnate în matrițele închise din epoca bronzului.Aparținând grupei metalelor, cositorul are o temperatură de topire scăzută, motiv pentru care este folosit în industria electrotehnică în aliaje de lipire a altor elemente metalice. Staniul este foarte maleabil, putând fi ușor laminat în foi subțiri (staniol). Se întrebuințează la protejarea altor metale (de ex.: fierul, tablă albă) contra coroziunii; de asemenea, în multe aliaje: fludor, bronz, etc."
},

{

	nume: "Stibiu",
	serie: "Metaloizi",
	z:51,
	a:122,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p3",
	grupa: "15/ V.A",
	perioada:5,
    bloc:"p",
    densitate:"?",
    descriere:"Stibiul (antimoniul) este un metaloid alb-argintiu. Metaloidul este întrebuințat pentru realizarea unor aliaje în poligrafie, în industria cauciucului și în tehnică. Alături de zăcămintele de mercur, în mod frecvent, se găsește stibina din care se extrage stibiul sau antimoniul. Aceasta se folosește în aliajele pentru izolarea cablurilor, la fabricarea unor piese rezistente la acizi etc. Alături de arsen stibiul se remarcă prin toxicitatea deosebită a compușilor săi, și totodata prin utilizarile în medicină: ca vomitiv.Stibiul sub formă de combinații este cunoscut încă din antichitate. Denumirea de stibiu provine de la romani, iar cea de antimoniu provine de la alchimiști. În 1470, Basilius Valentinus descrie pe larg metoda de obținere a antimoniului."
},

{

	nume: "Telur",
	serie: "Metaloizi",
	z:52,
	a:128,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p4",
	grupa: "16/ VI.A",
	perioada:5,
    bloc:"p",
    densitate:"?",
    descriere:"Telurul a fost descoperit în 1782 în minereul de aur de la minele din Zlatna, pe teritoriul actual al României (atunci în Imperiul Habsburgic), de către mineralogul austriac Franz-Joseph Müller von Reichenstein. Telurul a fost studiat însă abia în 1798, de către chimistul german Martin Heinrich Klaproth, același care a descoperit uraniul, zirconiul și ceriul.Telurul este un element relativ rar, iar conținutul din acest nemetal al scoarței terestre este de 1·10−7la sută. Telurul poate fi găsit în minereurile de aur ale Transilvaniei, unde se întâlnește în compuși ca telururi de aur, argint, mercur, nichel, cupru, bismut, platină, etc. În afară de România (Transilvania), telurul se mai găsește în SUA (Colorado), Australia, Canada etc.elurul elementar se folosește la obținerea de aliaje, în industria oțelului, în industria cablurilor de plumb (unde are rolul de a mări rezistența și elasticitatea lor), la vulcanizarea cauciucului, în industria sticlei și în industria ceramică. Combinații de telur se folosesc în fotografie și ca adaosuri la motorină, deoarece accelerează arderea în motoarele cu explozie."
    },

    {

	nume: "Iod",
	serie: "Halogeni",
	z:53,
	a:127,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p5",
	grupa: "17/ VII.A",
	perioada:5,
    bloc:"p",
    densitate:"4940 kg/m3",
    descriere:"Iodul este al patrulea element din grupa halogenilor, posedă o reactivitate slabă și o electronegativitate relativ mare, dar mai mică decât a celorlalți halogeni. Ca substanță elementară, la fel ca toți halogenii, iodul prezintă moleculă diatomică (I2).Datorită proprietăților sale chimice, iodul este un agent bactericid, sporicid, protocid, cisticid și virucid, aspecte care îi conferă aplicabilitate în diverse domenii științifice și tehnice. Iodul și compușii lui sunt folosiți în medicină, fotografie si industria vopselelor.Scopul principal al utilizării iodului în domeniul medical este exploatarea proprietății sale antiseptice. Este un agent bactericid, sporicid, protoacid, cisticid și virucid.Deoarece este foarte puțin solubil în apă, soluțiile sunt preparate sub forma tincturilor în etanol. Iodoformul, iodoclorhidroxichinolina, iodoforul, iodurile de sodiu și potasiu de asemenea exercită efecte bactericide prin eliberarea iodului. Soluția Lugol (5% iod și 10% iodură de potasiu) este utilizată în tratamentul împotriva hipertiroidismului și pentru profilaxia absorbțiilor radiațiilor iodice după accidente nucleare. Medicamentul antiaritmic amiodaron eliberează iod și poate cauza tirotoxicoză după o folosire îndelungată.Iodul poate fi utilizat în testarea unor eșantioane alimentare pentru determinarea existenței amidonului.Soluțiile cu iod pot fi folosite în depistarea bancnotelor contrafăcute, pornind de la premisa că hârtia acestora pot conține amidon. Hârtia ce conține amidon poate fi testată cu o iodură pentru depistarea oxidanților precum peroxizii. Substanțele oxidante transformă iodura în iod, care apare albastru. O soluție de amidon și iodură poate fi preparată în același scop."
},
{

	nume: "Xenon",
	serie: "Gaze Nobile",
	z:54,
	a:131,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6",
	grupa: "18/ VII.A",
	perioada:5,
    bloc:"p",
    densitate:"5.894 g/L",
    descriere:"Este un gaz nobil, incolor, greu, fiind găsit în atmosfera Terrei în cantități mici.Deși, ca toate gazele nobile, xenonul este inert din punct de vedere chimic, între atomii acestuia și atomii altor elemente chimice pot exista reacții chimice, cum ar fi reacția de formare a hexafluoroplatinatul de xenon; acesta a fost primul compus sintetizat al unui gaz nobil.In ciuda faptelor că este un gaz rar, greu și scump de extras din atmosfera terestră, xenonul are un număr larg de aplicații și utilizări în viața omului.Xenonul este utilizat, în primul rând, la dispozitivele emițătoare de lumină sau lămpi numite lămpi de xenon, ce sunt utilizate în blițurile fotografice și în lămpile stroboscopice.[7] Primul laser solid, inventat în 1960, a fost umplut cu lămpi de xenon.Xenonul a fost utilizat ca un anestezic general. În ciuda faptelor că sunt scumpe, dispozitivele de anestezie ce utilizează xenon sunt pe cale să apară pe piața europeană, datorită avantajului său: xenonul din acestea poate fi reciclat și recuperat. Acest fapt face acest aparat economic.Xenonul își găsește aplicații în tratarea leziunilor la creier. Însă, acest receptor agravează dauna creată de privarea de oxigen și este folosit mai degrabă ca un protector neurologic, fiind mai bun decât ketamina sau oxidul nitros N2, care pot surveni cu efecte secundare nedorite."
},

{

	nume: "Cesiu",
	serie: "Metale Alcanine",
	z:55,
	a:133,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s1",
	grupa: "1/ I.A",
	perioada:6,
    bloc:"s",
    densitate:"1,93 kg/m3",
    descriere:"Din punct de vedere fizic, metalul este moale, de culoare argintie-aurie, cu un punct de topire de 28 °C (82 °F), aceasta făcându-l unul dintre singurele cinci metale care se pot afla în stare lichidă sau într-o stare de trecere dintre starea lichidă și cea solidă la temperatura camerei.Cesiul este un metal alcalin și are proprietăți fizico-chimice asemănătoare cu cele ale rubidiului și ale potasiului. Metalul este foarte reactiv și piroforic, reacționând cu apa la o temperatură de cel puțin −116 °C (−177 °F). Este elementul cu cea mai mică electronegativitate având un izotop stabil (Cesiu-133). Cesiul a fost descoperit de către doi chimiști germani, Robert Bunsen și Gustav Kirchhoff în anul 1860 cu ajutorul liniei sale spectroscopice.Din anii 1990, cea mai însemnată utilizare a elementului este aceea de substanță de umplutură pentru lichidele de forat folosite pentru a atenua găurirea din timpul forării. Cesiul mai are o gamă largă de aplicații în producerea electricității, în aparate electronice și în chimie. Radioizotopul cesiu-137 are un timp de înjumătățire de aproximativ 30 de ani și este folosit în medicină, măsurători și hidrologie. Deși elementul nu este foarte toxic, este periculos și exploziv, iar izotopii săi prezintă un risc ridicat în caz de scurgere radioactivă."
    },

{

	nume: "Bariu",
	serie: "Metale alcalino-pamantoase",
	z:56,
	a:137,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2",
	grupa: "2/ II.A",
	perioada:6,
    bloc:"s",
    densitate:"3,6 kg/m3",
    descriere:"A fost identificat pentru prima oară de către Carl Wilhelm Scheele. Bariu este în stare liberă metalic, strălucitor și de culoare alb-argintie. În natură nu se găsește, în stare liberă, din cauza reactivității sale ridicate. Bariul metalic este ușor inflamabil. Combinațiile sale solubile sunt toxice.Bariu este un metal alcalino-pământos solid, paramagnetic, care cristalizează într-o rețea cubică, cu fețe centrate. Culoarea alb-argintie a bariului metalic devine în contact cu aerul gri mat, deoarece oxidează la suprafață.Proprietățile chimice sunt asemănătoare cu cele ale calciului (Ca) și celelalte metale alcalino-pământoase. Bariu (Ba) reacționează mai puternic, decât majoritatea metalelor alcalino-pământoase, cu apa (H2O) și cu oxigenul (O2) și se dizolvă ușor în aproape toți acizii- excepție face acidul sulfuric concentrat (H2SO4), pentru că se formează un strat sulfuric (pasivare) ce oprește reacția.Se mai foloseste aliajul nichel-bariu pentru bujii. În plus în amestecul aliajelor din plumb cu diferite metale, se adaugă bariu pentru creșterea durității.. Bariu în stare pură are puține aplicații, producția este de puține tone pe an. Cea mai importantă aplicație este cea de reproducător în tubul de vid, de exemplu la televizor. "
},

{

	nume: "Lantan",
	serie: "Lantanide",
	z:57,
	a:140,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 5d1",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"6146 kg/m3",
    descriere:"Lantan a dat denumirea seriei lantanidelor, un grup de 15 elemente asemănătoare, între lantan și lutețiu, care fac parte din seria pământurilor rare. Numele său provine din termenul grecesc „lanthanein”, care înseamnă „a ascunde”: lantan a rămas mult timp ascuns în oxidul de ceriu.La temperatura camerei, lantanul este un metal gri argintiu, maleabil, ductil, suficient de moale pentru a fi tăiat. Se oxidează în aer și în apă.Lantanul este ușor electropozitiv și reacționează încet cu apa rece și rapid cu apa fierbinte pentru a forma hidroxidul de lantan.Metalul reacționează cu toate halogenele. Reactia este viguroasă dacă are loc la peste 200 °C.Lantanul se combină cu azotul, carbonul, sulful, fosforul, borul, seleniul, siliciul și arsenul la temperaturi ridicate, formând compuși binari."
    },

{

	nume: "Ceriu",
	serie: "Lantanide",
	z:58,
	a:140,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 5d1 4f1",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"6,689 kg/m3",
    descriere:"Ceriul este un element metalic argintiu, aparținând grupului lantanidelor. Se folosește în aliaje de pământuri rare. Seamănă cu fierul la culoare, dar este moale, precum și maleabil și ductil. La contactul cu aerul își pierde luciul. Doar europiul este mai reactiv decât ceriul, dintre pământurile rare. Soluțiile alcaline și acizii diluați și concentrați ataca rapid metalul. În stare pură prezintă o probabilitate ridicată de a lua foc dacă este frecat cu un cuțit. Ceriul se oxidează lent în apă rece și foarte rapid în apă caldă.Chiar dacă ceriul aparține unui grup de metale numite pământuri rare, nu este rar deloc. El se găsește în cantități relativ mari (68 ppm în crusta terestră); defapt, este mai răspândit decât plumbul.Sărurile ceriu(IV) sunt portocalii, roșii sau gălbui, în timp ce sărurile ceriu(III) sunt, de obicei, albe.Ceriul este folosit în aliajele de aluminiu.Adăugând ceriu în cast irons produce opunerea grafitizării și produce un fier maleabil."
    },

    {

	nume: "Praseodim",
	serie: "Lantanide",
	z:59,
	a:141,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f3",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"6,48 kg/m3",
    descriere:"Praseodim (simbol Pr) este elementul chimic, din familia pământurilor rare, cu numărul atomic 59. A fost descoperit de Carl Auer von Welsbach în 1895 . Cei mai răspândiți compuși sunt sulfatul și clorura de praseodim."
},
{

	nume: "Neodim",
	serie: "Lantanide",
	z:60,
	a:144,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f4",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"7,01 kg/m3",
    descriere:" A fost descoperit de chimistul austriac Carl Auer von Welsbach in 1895.Este un metal gri-argintiu, din grupa pământurilor rare. Face parte din familia lantanidelor. La temperatura ambiantă, este ductil, maleabil și se oxidează rapid în aer."
},
{

	nume: "Prometiu",
	serie: "Lantanide",
	z:61,
	a:145,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f5",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"7,26 kg/m3",
    descriere:" A fost descoperit de Marinsky și Glendenin în 1945 . Are punctul de topire 1080 °C, iar punctul de fierbere 2730 °C."
},
{

	nume: "Samariu",
	serie: "Lantanide",
	z:62,
	a:150,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f6",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"7,52 kg/m3",
    descriere:" Este un metal destul de tare și argintiu care se oxidează rapid în aer. Fiind un membru obișnuit al seriei lantanidelor, samariul are de obicei starea de oxidare +3. Sunt cunoscuți, de asemenea, și compuși de samariu divalent, cei mai notabili dintre ei fiind monoxidul de samariu SmO, monocalcogenii de samariu SmS, SmSe și SmTe, precum și iodura de samariu (II).Cea mai mare aplicație comercială a samariului este în magnetul samariu-cobalt, dar care este inferior ca magnetizare permanentă doar magnetului cu neodim; totuși, compușii samariului pot rezista în mod semnificativ temperaturilor înalte (mai mari de 700 °C) fără să își piardă proprietățile lor magnetice. Izotopul radioactiv samariu-153 este componentul activ al compusului radiofarmaceutic samariu (153Sm) lexidronam (numit și Quadramet)[3], care ucide celulele canceroase în cazul cancerului pulmonar, cancerului de prostată, cancerului mamar și în cazul osteosarcomului. Alt izotop, samariu-149, este prezintă o secțiune ridicată de captură eficace a neutronilor, motiv pentru este utilizat drept otravă neutronică în barele de siguranță și control ale reactorilor nucleari. De asemenea, el se formează ca produs de dezintegrare din timpul funcționării reactorului și este unul dintre factorii importanți luați în considerare în planul și în activitatea reactorului. Alte aplicații ale samariului includ cataliza reacțiilor chimice, datarea radioactivă și laserele cu raze X."
},
{

	nume: "Europiu",
	serie: "Lantanide",
	z:63,
	a:152,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f7",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"5,264 kg/m3",
    descriere:" A fost descoperit de Eugène-Anatole Demarçay în 1901. Are punctul de topire 822 °C, iar punctul de fierbere 1597 °C."
},
{

	nume: "Gadoliniu",
	serie: "Lantanide",
	z:64,
	a:157,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 5d1 4f7",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"7,89 kg/m3",
    descriere:"A fost descoperit de Marignac în 1880 .Nitratul de gadoliniu este folosit ca absorbant de neutroni la sistemele de oprire rapidă ale reactoarelor de tip Candu.Are punctul de topire 1311 °C, iar punctul de fierbere 3233 °C."
},
{

	nume: "Terbiu",
	serie: "Lantanide",
	z:65,
	a:159,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f9",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"8,219 kg/m3",
    descriere:"A fost descoperit de Mosander în 1843. Are punctul de topire 1360 °C, iar punctul de fierbere 3041 °C."
},
{

	nume: "Disprosiu",
	serie: "Lantanide",
	z:66,
	a:"162,5",
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f10",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"8,56 kg/m3",
    descriere:"A fost descoperit de Paul Emile Lecoq de Boisbaudran în 1886. Are punctul de topire 1409 °C, iar punctul de fierbere 2335 °C. Electronegativitatea sa este 1,72. Stuctura cristalina este hexagonala."
},
{

	nume: "Holmiu",
	serie: "Lantanide",
	z:67,
	a:165,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f11",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"8,79 kg/m3",
    descriere:"A fost descoperit de Soret în 1878. Denumirea de holmiu provine din denumirea latină a orașului Stockholm.Elementul chimic holmiu a fost descoperit de către Jacques-Louis Soret și Marc Delafontaine în anul 1878.Ca și toate metalele, holmiul este un colorat în alb-argintiu, ce este ușor, ductil (poate fi tras în fire cu diametru foarte mic) și maleabil (poate fi tras în foi subțiri). Amândouă proprietățile sunt valabile pentru metale. Totodată, holmiul are câteva proprietăți magnetice și electrice; O caracteristică foarte interesantă poate fi observată la oxidul de holmiu. Acestuia i se schimbă culorile în funcție de condițiile de iluminare la care a fost supus; la lumina zilei, culoarea sa este galbenă. Sub lumina tricromatică, culoarea sa este portocalie spre roșie. Acest fenomen mai este prezent la elementul chimic numit fosfor. Când este combinat cu ytriul, acesta formează un compus foarte puternic magnetic. "
},
{

	nume: "Erbiu",
	serie: "Lantanide",
	z:68,
	a:168,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f12",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"6,770 kg/m3",
    descriere:"A fost descoperit de Mosander în 1842. Când a fost izolat pentru prima dată, erbiul părea a fi un metal solid de culoare alb-argintie; el apare în combinații chimice cu alte elemente de pe Pământ. Însă, el este un element chimic rar, ce poate fi găsit în asociație cu alte elemente în mineralul numit gadolinit, mai ales din cel care provine din zona Ytterby, din Suedia.În principial, erbiul este utilizat datorită ionlor pe care îi formează (anume Er3+), care au proprietăți fluorescente ce pot fi utilizate în diferite lasere și aplicații."
},
{

	nume: "Tuliu",
	serie: "Lantanide",
	z:69,
	a:169,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f13",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"9,321 kg/m3",
    descriere:"A fost descoperit de Per Teodor Cleve în 1879. Are punctul de topire 1545 °C, iar punctul de fierbere 1727 °C."
},
{

	nume: "Yterbiu",
	serie: "Lantanide",
	z:70,
	a:173,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"f",
    densitate:"9,321 kg/m3",
    descriere:"Din punct de vedere fizic este o substață metalică moale, de culoare argintie; yterbiul este un pământ rar din seria lantanidelor și în natură este răspândit sub forma unor compuși în compoziția unor minerale ca: gadolinit, monazit și xenotim. Elementul este asociat uneori cu ytriul sau cu alte elemente asemănătoare și este utilizat în tehnologie la elaborarea oțelurilor speciale. Yterbiul natural este un amestec de șapte izotopi stabili.Yterbiul este un element moale, maleabil și relativ ductil care are un luciu argintiu deschis. Rareori găsit în pământ, el este atacat ușor și dizolvat de acizi minerali, încet de reacții chimice împreună cu apa, și se oxidează în aer.Un izotop de yterbiu a fost folosit ca substitut pentru o sursă de radiație la un aparat portabil de raze X pe când electricitatea nu era disponibilă. Acest metal ar putea fi de asemenea folosit pentru a ajuta la îmbunătățirea granulației, durității și a altor proprietăți mecanice ale oțelului inoxidabil. Unele aliaje de yterbiu au fost folosite chiar și în stomatologie. De asemenea, se mai utilizează sub formă de ioni în active laser media."
},
{

	nume: "Lutetiu",
	serie: "Metale de tranzitie",
	z:71,
	a:175,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d1",
	grupa: "3/ III.B",
	perioada:6,
    bloc:"d",
    densitate:"?",
    descriere:"Lutețiul este rar și scump; în consecință, are puține utilizări specifice. De exemplu, izotopul radioactiv lutețiu-176 este folosit în tehnica nucleară pentru determinarea vârstei meteoriților. Lutețiul este întâlnit deseori în combinație cu ytriul și este utilizat uneori în aliaje și pe post de catalizator în unele reacții chimice. 177Lu-DOTA-TATE este utilizat terapia cu radionuclide a tumorilor neuroendocrine.Din cauza rarității și a prețului mare, lutețiul are puține utilizări comerciale. Lutețiul stabil poate fi utilizat pe post de catalizator în cracarea petrolului în rafinării și mai poate fi utilizat și în aplicații de alchilare, hidrogenare și polimerizare.Ca și celelalte pământuri rare, lutețiul este privit ca un metal cu toxicitate scăzută, însă compușii săi trebuie tratați cu grijă: de exemplu, inhalarea de flourură de lutețiu este periculoasă, fiind un compus care irita pielea."
},
{

	nume: "Hafniu",
	serie: "Metale de tranzitie",
	z:72,
	a:179,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d2",
	grupa: "4/ IV.B",
	perioada:6,
    bloc:"d",
    densitate:"13,310 kg/m3",
    descriere:"Este un metal alb-argintiu similar titaniului, cu o mare capacitate de a absorbi neutroni. A fost descoperit de George de Hevesy și Dirk Coster în 1922.Are punctul de topire 2233 °C, iar punctul de fierbere 4603 °C."
},
{

	nume: "Tantal",
	serie: "Metale de tranzitie",
	z:73,
	a:181,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d3",
	grupa: "5/ V.B",
	perioada:6,
    bloc:"d",
    densitate:"?",
    descriere:"A fost descoperit de către Anders Gustaf Ekeberg în 1802 în două minerale diferite, respectiv tantalitul din Kimito (Finlanda) și ytrotantalitul din Ytterby (Suedia). Este folosit la separarea bornelor (+), respectiv (-) ale unor pile, avand ca scop producerea de curent continuu. Proprietăți similare au peliculele de aluminiu sau acid sulfuric, dar acestea ocupă suprafețe mult mai mari, devenind ineficiente.Tantalul este unul dintre puținele metale care nu este respins de corpul uman, motiv pentru care este folosit la confecționarea de plăcuțe, sârme, șuruburi și cuie utilizate în chirurgie.Fiind și un metal puternic antiacid, tantalul este folosit în industria chimică pentru construirea de schimbătoare de căldură, în special în industria acidului sulfuric, la realizarea de piese pentru pompe, centrifuge și ventile care lucrează în medii foarte corosive. Fiind rezistent la coroziune este întrebuințat la placarea altor metale și la confecționarea recipientelor pentru transportul acizilor.Tantalul este folosit ca înlocuitor pentru platină în fabricația unor instrumente sau ustensile de laborator, cum ar fi nacele și creuzete. Se întrebuințează și la confecționarea greutăților fracționare pentru balanțele analitice, penițelor pentru stilouri, resorturilor pentru ceasuri. Din tantal se mai confecționează duzele de la mașinile de filat mătase artificială, cu diametrul de ordinul sutimilor de milimetru."
},
{

	nume: "Wolfram",
	serie: "Metale de tranzitie",
	z:74,
	a:181,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d4",
	grupa: "6/ VI.B",
	perioada:6,
    bloc:"d",
    densitate:"19,250 kg/m3",
    descriere:"Wolframul (numit și tungsten) este un metal cu luciu alb-argintiu, ce cristalizează în sistemul cubic cu volum centrat fără a mai avea și alte forme alotropice. Foarte dur, wolframul nu este casant ci devine ductil în stare pură păstrându-și în același timp rezistența. Wolframul este un metal maleabil, ductil și în stare pură extrem de rezistent.Datorită punctului de fuziune ridicat (peste 3000  °C) este întrebuințat pentru construirea filamentelor de la lămpile cu incandescență, filamentele tuburilor electronice, anozii tuburilor radiogene și a tuburilor electronice de putere mare. Wolframul are o densitate și o duritate foarte mare, lucruri care îl fac utilizat la construcția de capete tăietoare la mașini de forat, la burghie."
    },
{

	nume: "Reniu",
	serie: "Metale de tranzitie",
	z:75,
	a:186,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d5",
	grupa: "7/ VII.B",
	perioada:6,
    bloc:"d",
    densitate:"2,120 kg/m3",
    descriere:"Este un metal foarte rar și a fost descoperit de Walter Noddack , Ida Tacke și Otto Berg în 1925.În industria electrotehnică, reniul este folosit la confecționarea filamentelor pentru becuri, iar aliat cu platina este folosit la confecționarea termoelementelor, ca electrozi și catalizatori, la fabricarea vârfurilor de penițe pentru stilou etc."
    },
{

	nume: "Osmiu",
	serie: "Metale de tranzitie",
	z:76,
	a:190,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d6",
	grupa: "8/ VIII.B",
	perioada:6,
    bloc:"d",
    densitate:"22,590 kg/m3",
    descriere:"Este un metal alb-argintiu. În natură se găsește aliat cu iridiul. Prezintă o activitate chimică redusă. Sub forma de pulbere se oxidează lent la aer, la temperatură obișnuită cu formare de OsO4. Nu este atacat de nici un acid (nici chiar de apa regală). Intră în compoziția unor aliaje alături de alte Metale Platinice."
    },
{

	nume: "Iridiu",
	serie: "Metale de tranzitie",
	z:77,
	a:192,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d7",
	grupa: "9/ VIII.B",
	perioada:6,
    bloc:"d",
    densitate:"22,560 kg/m3",
    descriere:"Este un metal alb-argintiu. În natură se găsește împreună cu alte Metale Platinice. Este puțin activ din punct de vedere chimic. Nu este atacat de nici un acid (nici chiar de apă regală). Aliajele iridiu-platină sunt folosite la confecționarea termoelementelor, la fabricarea creuzetelor, iar cele din iridiu-osmiu la fabricarea vârfurilor de penițe pentru tocul rezervor."
    },
{

	nume: "Platina",
	serie: "Metale de tranzitie",
	z:78,
	a:195,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s1 4f14 5d9",
	grupa: "10/ VIII.B",
	perioada:6,
    bloc:"d",
    densitate:"21,447 kg/m3",
    descriere:"Platina este un element ce face parte din grupa metalelor platinice împreună cu paladiu (unul din cele mai scumpe metale, fiind de aproximativ 1,5 ori mai scump decât aurul). Plutoniul este bineînțeles mult mai scump, dar nu poate fi cumpărat pe piața liberă.Este un metal tranzițional, dur, maleabil, ductil și prețios, de culoare gri-alb. Platina este un metal nobil rezistent la coroziune, și se găsește adesea asociat cu unele minereuri de cupru, de argint sau de nichel, și mai rar sub formă de depozite native (de exemplu, în Africa de Sud). Este folosit în confecționarea bijuteriilor, în echipamente de laborator, în medicina dentară și pentru realizarea protezelor dentare în aliaj cu aurul, pentru realizarea unor contacte electrice și mai ales în catalizatoarele autovehiculelor."
    },
{

	nume: "Aur",
	serie: "Metale de tranzitie",
	z:79,
	a:197,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s1 4f14 5d10",
	grupa: "11/ I.B",
	perioada:6,
    bloc:"d",
    densitate:"19,300 kg/m3",
    descriere:"Aurul a luat naștere înaintea formării sistemului nostru solar, în urma unor gigantice explozii stelare, geneza sa necesitând temperaturi de peste 1 bilion grade Celsius. Aceste enorme temperaturi se ating numai la explozia supernovelor sau la fuzionarea a două stele neutronice. Se utilizează aliat cu cuprul sau argintul, pentru fabricarea de podoabe, obiecte de artă, monede etc. Datorită proprietăților sale este considerat (alături de argint) singura formă reală de bani.Aurul este elementul cunoscut din cele mai vechi timpuri. Fiind răspândit în stare nativă în natură, el se putea obține ușor în cantități mici. Se crede că aurul a fost descoperit înaintea cuprului. Cules sub forma unor bucăți strălucitoare din nisipurile râurilor și din depunerile aluvionare, aurul a fost dintotdeauna un metal de ornament, apreciat pentru luciul său galben, dar mai ales pentru stabilitatea sa față de agenții corozivi. Ușor de prelucrat, prin ciocănire, el poate lua forma diverselor obiecte de podoabă sau de cult cunoscute în antichitate. Aurul pur (care este întotdeauna galben) este prea moale pentru folosirea sa ca bijuterie. Metalele care se folosesc în amestec cu aurul, pentru a-l întări, pot modifica culoarea acestuia, rezultând astfel un aur de diferite nuanțe de galben, alb și roșu. Acest amestec determină numărul de carate al aurului. Este unul dintre cele mai dense metale.Muzeul Aurului, unicul din Europa se găsește in orașul Brad, județul Hunedoara. Muzeul înfățișează un istoric al mineritului în România, prezentând totodată minerale provenite din zonă, din Maramureș și de la Ocna de Fier, precum și eșantioane de aur nativ găsite în Munții Apuseni."
    },
{

	nume: "Mercur",
	serie: "Metale de tranzitie",
	z:80,
	a:201,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10",
	grupa: "12/ II.B",
	perioada:6,
    bloc:"d",
    densitate:"13545,9 kg/m3",
    descriere:"Mercurul reprezintă unul din cele 6 elemente care sunt lichide la o presiune și temperatură apropiată de cea a camerei.Mercurul este utilizat în interiorul termometrelor, barometrelor, manometrelor, sfigmomanometrelor, lămpilor fluorescente, precum și în cadrul altor dispozitive. Acțiunea sa toxică a determinat înlocuirea sa din interiorul termometrelor sau manometrelor, în favoarea alternativelor precum alcoolul. În 2005, China era cel mai mare producător de mercur cu aproape două treimi din cantitatea extrasă la nivel mondial.Compușii mercurici au fost utilizați în tratamentele dermatologice; un produs numit Apa lui Soliman, întrebuințată în eliminarea pistruilor și a negilor,era constituită din mercur, iar utilizatorii acestui produs își distrugeau pielea,își diminuau gingiile (parodontoză) și provocau căderea dinților.Mercurul a fost utilizat în scop terapeutic datorită efectelor sale anti-sifilitice și anti-inflamatoare.Mercurul poate fi utilizat ca și component al lămpilor fluorescente, acestea conținând până la 1,4 mg de mercur. Lămpile fluorescente lineare conțin între 1,4–60 mg de mercur."
},
{

	nume: "Taliu",
	serie: "Metale de post-tranzitie",
	z:81,
	a:204,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p1",
	grupa: "13/ III.A",
	perioada:6,
    bloc:"p",
    densitate:"?",
    descriere:"Taliul este un metal moale, alb-albăstrui, cu diferite întrebuințări. Numele vine de la grecescul thallein care însemană verde, pentru că spectrul său are o linie alb-verzuie. A fost descoperit în 1861.Sub formă de sulfat de taliu (fără miros și gust), amestecat cu amidon, zahăr, glicerină și apă și pus la locuri potrivite, este o otravă mortală pentru șobolani. Mai este folosit la confecționarea sticlei optice, care permite razelor infra-roșii sa treacă prin ea, la confecționarea semiconductoarelor și – aliat cu mercurul – pentru a umple termometre de joasă temperatură. Taliul poate fi înghițit foarte ușor și de către oameni, din cauză că nu are nici gust nici miros, putând dăuna foarte grav organismului la câteva zile de la încorporarea sa. La otrăvirea cu taliu apar semne aproximativ asemănătoare cu cele ale gripei; în faza următoare amorțesc mâinile și picioarele, apoi apare o durere insuportabilă. Persoana intoxicată cu această otravă poate fi distrusă atât psihic cât și fizic."
},
{

	nume: "Plumb",
	serie: "Metale de post-tranzitie",
	z:82,
	a:207,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p2",
	grupa: "14/ IV.A",
	perioada:6,
    bloc:"p",
    densitate:"11,34 kg/m3",
    descriere:"Plumbul este un metal greu, de culoare gri-argintie cu densitatea foarte mare. Datorită densității ridicate, plumbul și-a găsit utilizarea la protecția contra radiației ionizante. De asemenea, plumbul este folosit la fabricarea de greutăți cu volum mic dar cu mase mari. Acest metal este toxic pentru organismul uman, intoxicația numindu-se saturnism. Oxizii de plumb (miniu, litargă) se utilizează la fabricarea vopselelor protectoare și a chiturilor de miniu și de litargă. De asemenea, plăcuțele de plumb se utilizează la fabricarea acumulatorilor pentru autoturisme. În trecut, plumbul era folosit la tuburi pentru alimentarea cu apă potabilă, lucru grav, din cauza toxicității sale ridicate.Plumbul metalic obținut din cuptoare, proaspăt tăiat, are o culoare albăstruie, dar se pătează imediat cum este expus la aer, căpătând o culoare griulie, mată. Când este topit capătă un luciu strălucitor, cromargintiu."
    },
{

	nume: "Bismut",
	serie: "Metale de post-tranzitie",
	z:83,
	a:209,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p3",
	grupa: "15/ V.A",
	perioada:6,
    bloc:"p",
    densitate:"9,87 kg/m3",
    descriere:"Punctul de topire este de 554,7 K. Punctul de fierbere este de 1873 K."
    },
{

	nume: "Poloniu",
	serie: "Metale",
	z:84,
	a:209,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p4",
	grupa: "16/ VI.A",
	perioada:6,
    bloc:"p",
    densitate:"9,196 kg/m3",
    descriere:"Este un element radioactiv, emițând radiații alfa.A fost un element important în celebrul experiment al Irenei Joliot-Curie pentru demonstrarea radioactivității artificiale. O foiță de aluminiu expusă la radiație alfa de la poloniu devine un izotop al fosforului cu o masă necunoscută în acele vremuri, și care se dezintegra emițând pozitroni. Marie Curie, mama Irenei Joliot-Curie, este cea care a descoperit poloniul."
    },
    {

	nume: "Astatin",
	serie: "?",
	z:85,
	a:210,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p5",
	grupa: "17/ VII.A",
	perioada:6,
    bloc:"p",
    densitate:"?",
    descriere:"Astatinul este un element chimic radioactiv din grupul halogenilor, produs al unor reacții nucleare. Fiind obținut, până în prezent, numai în cantități foarte mici, proprietățile sale nu sunt încă bine cunoscute. Se știe că se aseamănă mai mult cu iodul. Este cel mai rar element de pe Terra. Acesta se găsește numai în scoarța terestră în cantități foarte mici (69 mg)"
    },
    {

	nume: "Radon",
	serie: "Gaze Nobile",
	z:86,
	a:222,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6",
	grupa: "18/ VIII.A",
	perioada:6,
    bloc:"p",
    densitate:"9,73 kg/m3 - 273 kg/m3 ",
    descriere:"Radonul este un gaz radioactiv provenit din dezintegrarea radiului, cel din urmă provenind din seria de dezintegrare a uraniului. Este prezent în anumite soluri și poate fi transportat prin intermediul mediilor poroase, în special prin fenomenul de convecție.Este al cincilea element chimic radioactiv descoperit. A fost descoperit în anul 1900 de către Friedrich Ernst Dorn. Face parte din grupa gazelor rare. Creșterea concentrației de radon în atmosferă anunță apropierea unui cutremur. Radonul este inodor, incolor, insipidar la temperaturi scăzute sub punctul de îngheț 202 K are o culoare fosforescentă strălucitoare, care se transformă în galben când temperatura scade și devine orange-roșu la temperaturi sub 93 K."
    },
    {

	nume: "Franciu",
	serie: "Metale alcaline",
	z:87,
	a:223,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s1",
	grupa: "1/ I.A",
	perioada:7,
    bloc:"s",
    densitate:"1,78 kg/m3 ",
    descriere:"Franciul în sine nu a fost niciodată văzut. Judecând după aspectul celorlalte elemente din grupa sa, se presupune că franciul are un aspect reflectorizant, dacă s-ar putea aduna destul pentru a fi observat în stare solidă sau lichidă. Obținerea unei astfel de cantități e foarte improbabilă, fiindcă căldură extremă produsă de dezintegrarea franciului (timpul de înjumătățire cel mai lung al oricărui izotop al său e de 22 de minute) ar vaporiza instantaneu orice cantitate vizibilă de element.Franciul a fost descoperit de Marguerite Perey în Franța (de unde elementul își și ia numele) în 1939. A fost ultimul descoperit în natură, și nu prin sinteză.În afara laboratorului, franciul e extrem de rar, cantități infime găsindu-se în minereurile de uraniu și thoriu, unde izotopul franciu-223 se formează și dezintegrează continuu."
    },
    {

	nume: "Radiu",
	serie: "Metale alcalino-pamantoase",
	z:88,
	a:226,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2",
	grupa: "2/ II.A",
	perioada:7,
    bloc:"s",
    densitate:"5500 kg/m3 ",
    descriere:"Radiul în stare pură este alb argintiu, dar datorită reactivității sale ridicate, se oxidează rapid devenind negru cu irizații colorate. Toți izotopii de radiu sunt radioactivi, cel mai stabil fiind 226Ra, acesta având timp de înjumătățire de 1601 ani; în urma dezintegrării sale rezultând radon. Din cauza instabilității sale, radiul este luminiscent.Radiul, sub formă de clorură de radiu RaCl2, a fost descoperit de Marie Curie și Pierre Curie în 1898.n trecut, radiul se folosea la obținerea unor obiecte fosforescente în întuneric (cadrane de ceas, întrerupătoare de curent, diferite indicatoare, vopsele fosforescente, etc,). Întrebuințarea radiului în vopsele este foarte periculoasă din cauza cantității mari de material conținute și, din această cauză, astfel de aplicații nu se mai utilizează. Au fost incidente grave cauzate de acoperirea corpului cu vopsea cu radiu, lucru care a dus la formarea unor arsuri radiologice extinse pe suprafața corpului și la moartea persoanei contaminate radioactiv. Chiar și Marie Curie a murit din cauza anemiei aplastice, boala atribuită radiațiilor.În prezent, compușii radiului nu au nici o utilizare practică iar metalul (grupa a II-a a sistemului periodic, perioada a 7-a) este foarte reactiv, oxidându-se în aer și reacționând violent cu apa formând hidroxid de radiu, Ra(OH)2."
    },
    {

	nume: "Actiniu",
	serie: "Actinide",
	z:89,
	a:227,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"5500 kg/m3 ",
    descriere:"A fost primul element radioactiv care a fost izolat, deși poloniul, radiul și radonul erau observate înainte, însă neizolate până în anul 1902.Actiniul este un metal foarte rar, fiind prezent în scoarța Pământului ca urme reziduale în minereurile de uraniu, cantitățile de actiniu din minereu fiind de ordinul miligramelor la o tonă de minereu brut.Datorită intensității radioactivității sale, are puține domenii de utilizare, precum radioimunoterapia sau folosirea neutronilor emiși ca sursă energetică. În tehnologia chimică sau metalurgia clasică nu se cunosc aplicații industriale ale actiniului.Actiniul are un caracter chimic similar lantanului. Datorită acestei similitudini, separarea actiniului de lantan și celelalte elemente din categoria pământurilor rare, care sunt prezente și în minereurile de uraniu, este dificilă. Extracția prin solvenți și cromatografia schimbului electronic au fost metodele folosite la separare. Actiniul formează fluoruri, hidroxizi, oxalați și fosfați insolubili în apă."
},
{

	nume: "Toriu",
	serie: "Actinide",
	z:90,
	a:232,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"11,710 kg/m3 ",
    descriere:"A fost descoperit de minerologul norvegian Morten Thrane Esmark (1801 - 1882) în 1828, în Norvegia, lângă Brevig și identificat de chimistul suedez Jöns Jacob Berzelius. Numele de toriu este o referință la Thor, zeul războiului în mitologia scandinavă. Toriul este considerat a fi combustibilul nuclear al viitorului. Mai puțin radioactiv decât uraniul, toriul poate fi exploatat în cariere de suprafață, iar acest lucru are un impact minim asupra mediului și costuri relativ reduse de valorificare. Cantitatea estimată de toriu din scoarța terestră este de trei până la patru ori mai mare decât cea a uraniului. Principalul minereu din care se extrage toriul este monazitul.Toriul pur este un metal alb argintiu, care este stabil în aer uscat și își păstrează luciul metalic pentru mai multe luni. Atunci când este adus în mediu umed și bogat în oxigen, începe să se oxideze, devenind treptat cenușiu, apoi negru. Proprietățile fizice se alterează în funcție de gradul de oxidare al metalului. Toriul pur este moale, foarte ductil, putând fi laminat la rece. Pulberile metalice de thoriu sunt piroforice."
},
{

	nume: "Protactiniu",
	serie: "Actinide",
	z:91,
	a:231,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f2",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"15,370 kg/m3 ",
    descriere:"Protactiniul este un element chimic al grupului actinidelor. Este metalic, de culoare argintie strălucitoare, care, în timp, datorită oxidării, devine cenușie. Are proprietăți de superconductivitate. Protactiniul reacționează cu ușurință cu oxigenul, cu vaporii de apă și cu acizii. Nu reacționează cu oxizii alcalini.Fiindcă este abraziv, foarte radioactiv și toxic, nu există momentan nici o întrebuințare pentru protactiniu în afara cercetărilor științifice.Protactiniu-231, care e format din descompunerea alfa a Uraniului-235, poate să susțină o reacție nucleară și poate, în principiu, să fie folosit la arme nucleare."
},
{

	nume: "Uraniu",
	serie: "Actinide",
	z:92,
	a:238,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f3",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"19,050 kg/m3 ",
    descriere:"Uraniul are cea mai mare masă atomică dintre toate elementele naturale.Uraniul este aproximativ cu 70% mai dens decât plumbul și este ușor radioactiv. Distribuția sa naturală este de circa câteva părți per milion în sol și roci și de circa 1000 de ori mai scazută in apă. Uraniul este extras industrial din minerale relativ bogate în concentrație față de cea naturală prin procedee mecanice, fizice și chimice. Uraniul este un metal care face parte dintre elementele chimice care au jucat un rol deosebit la dezvoltarea energeticii nucleare prin proprietatea acestuia de a fi fisionabil și a elibera energie. Uraniul este destul de răspândit în natură sub forma diferitelor tipuri de minereuri (pehblendă, uraninit, torbernit, carnotit, etc.). Uraniul este folosit, actualmente, drept combustibil nuclear sub forma uraniului metalic sau a unor compuși chimici. În reactorul nuclear este produsă, de fapt, o explozie atomică controlată prin intermediul unor bare absorbante de neutroni (conținând bor sau cadmiu) care au rolul de a absorbi neutronii în exces. În toate cazurile se pune problema obținerii, fie a uraniului, fie a unor săruri ale acestuia de puritate nucleară. Impuritățile (chiar urme, de exemplu, bor, element cu secțiune de captură foarte mare) pot duce la deranjamente grave, din cauza unor secțiuni de captură mari. Datorită acestui lucru apare necesitatea utilizării unei tehnologii de purificare a substanțelor."
},
{

	nume: "Neptuniu",
	serie: "Actinide",
	z:93,
	a:237,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f4",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"20,450 kg/m3 ",
    descriere:"Element cu caracter metalic radioactiv, neptuniul este primul element transuranian și aparține seriei actinidelor. Cel mai stabil izotop al său, 237Np, este un produs secundar în reactoarele nucleare, iar acesta împreună cu Plutoniul pot fi folosite la echipamentele de detecție a neutronilor. Neptuniul este de asemenea găsit în urme fine pe minereurile de uraniu în urma reacțiilor de transmutație."
},
{

	nume: "Plutoniu",
	serie: "Actinide",
	z:94,
	a:244,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"19,820 kg/m3 ",
    descriere:"A fost descoperit în 1940 în urma reacției de bombardare a 238U cu deuteroni, dar – din cauza războiului – descoperirea sa a fost comunicată abia în 1948.Chiar dacă urme de plutoniu sunt prezente în mod natural pe Pământ (fiind cel mai greu element prezent în natură anterior erei atomice), el este considerat ca fiind un produs antropogen.Este unul din puținele elemente metalice a cărui densitate crește prin topire; în plus, metalul topit suferă o descreștere a densității odată cu creșterea temperaturii. Plutoniul a fost produs în cantități semnificative tehnologic în timpul Proiectului Manhattan. Bombele Fat Man utilizate în cadrul testului nuclear Trinity și la bombardarea orașului japonez Nagasaki (în august 1945) au utilizat plutoniu drept material exploziv. Testele nucleare efectuate în anii 1950-1960 au utilizat la scară extinsă plutoniu. Plutoniul produs în scopuri militare și cel format în reactori nucleari prin procese de activare ridică în prezent probleme majore de proliferare nucleară."
},
{

	nume: "Americiu",
	serie: "Actinide",
	z:95,
	a:243,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"12,000 kg/m3 ",
    descriere:"Este un metal radioactiv din seria actinidelor. El a fost cel de-al patrulea element transuranian descoperit, fiind obținut prin bombardarea plutoniului cu neutroni și numit după continentul America, prin analogie cu europiul (acestea două fiind și singurele denumite după continente.Americiul pur este alb-argintiu, lucius, dar în aer uscat, la temperatura camerei, se întunecă și își pierde luciul. Este mai deschis la culoare decât plutoniul sau neptuniul. Americiul este mai maleabil decât neptuniul sau uraniul. Intensitatea emisiei alfa a americiului 241 este de cca. trei ori mai mare decât cea a radiului. Americiul poate fi produs în cantități de câteva kilograme, având și unele aplicații practice. Astfel, o mică (0,2 mg) cantitate de americiu 241 este folosită într-un tip de detector de fum ca sursă de radiație ionizantă. De asemenea, americiul 241 este utilizat ca sursă portabilă de raze gama pentru aparate radiologice. Cea mai mare parte a americiului 241 produs în lume este însă folosită pentru obținerea de 242Cm ca etapă intermediară pentru obținerea de 238Pu."
},
{

	nume: "Curiu",
	serie: "Actinide",
	z:96,
	a:247,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f7",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"13,510 kg/m3 ",
    descriere:"Este un metal radioactiv transuranian din seria actinidelor ce a fost obținut prin bombardarea unor atomi de plutoniu cu particule alfa (ioni de heliu). Numele a fost dat în onoarea savanților Marie și Pierre Curie.Metalul are o culoare alb-argintie și este mai electropozitiv decât aluminiul. Cei mai mulți compuși trivalenți ai curiului au o culoare gălbuie. Din punct de vedere chimic, curiul este asemănător cu gadoliniul, omologul său din seria lantanidelor, dar are o structură cristalină mai complexă.În corpul uman, curiul se acumulează în țesutul osos, radiația sa distrugând măduva și blocând producerea de globule roșii.Cantitatea maximă admisibilă de 244Cm în corpul uman este de 0,3 microcurie. Curiul are puține aplicații în practică, el fiind luat în considerare ca și combustibil pentru generatoare termoelectrice cu radioizotopi. Un gram de 242Cm poate genera aproximativ 122 W de energie termică"
},
{

	nume: "Berkeliu",
	serie: "Actinide",
	z:97,
	a:247,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"13,510 kg/m3 ",
    descriere:"Este un metal radioactiv transuranian din seria actinidelor ce a fost obținut prin bombardarea unor atomi de plutoniu cu particule alfa (ioni de heliu). Numele a fost dat în onoarea savanților Marie și Pierre Curie.Metalul are o culoare alb-argintie și este mai electropozitiv decât aluminiul. Cei mai mulți compuși trivalenți ai curiului au o culoare gălbuie. Din punct de vedere chimic, curiul este asemănător cu gadoliniul, omologul său din seria lantanidelor, dar are o structură cristalină mai complexă.În corpul uman, curiul se acumulează în țesutul osos, radiația sa distrugând măduva și blocând producerea de globule roșii.Cantitatea maximă admisibilă de 244Cm în corpul uman este de 0,3 microcurie. Curiul are puține aplicații în practică, el fiind luat în considerare ca și combustibil pentru generatoare termoelectrice cu radioizotopi. Un gram de 242Cm poate genera aproximativ 122 W de energie termică"
},
{

	nume: "Californiu",
	serie: "Actinide",
	z:98,
	a:251,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"15,100 kg/m3 ",
    descriere:"Este un metal radioactiv din seria actinidelor care a fost obținut în 1950 prin bombardarea unor atomi de curiu cu particule alfa (ioni de heliu). Numele provine de la statul american California în care se află laboratorul în care a fost descoperit.Californiul este solubil în acizii minerali și este antrenat de fluoruri și oxalați insolubili.Californiul nu are nici un rol biologic.Californiul nu se găsește în stare naturală pe Pământ, însă este posibil ca acest element să existe în alte zone din univers, existând ipoteza (controversată) a existenței de californiu 254 în supernove. În general, californiul este prea dificil de produs pentru a avea utilizări practice pe scară largă, însă există câteva arii de aplicare datorate radioactivității sale (fiind folosit aproape exclusiv californiul 252): sursă de neutroni pentru reactori nucleari, surse portabile de neutroni pentru prospectarea zonelor aurifere/ argintifere sau a zăcămintelor de petrol, tratamentul unor tumori pe creier, în cazurile în care alte surse de radiație sunt ineficiente."
},
{

	nume: "Einsteiniu",
	serie: "Actinide",
	z:99,
	a:252,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"8,840 kg/m3 ",
    descriere:"Einsteiniu, un element transuranian, metallic și extrem de radioactiv (al-7-lea in seria actinidelor) , este obținut prin bombardarea plutoniului cu neutroni și a fost descoperit în deșeurile primului test al unei bombe cu hidrogen . A fost numit după Albert Einstein și nu are nici un folos cunoscut."
},
{

	nume: "Fermiu",
	serie: "Actinide",
	z:100,
	a:257,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"?",
    descriere:' Este cel mai greu element ce se poate obține prin bombardarea cu neutroni ai elementelor ușoare și ultimul element ce se poate obține în cantități macroscopice, dar nu s-a reușit încă obținerea de fermiu metalic pur.A fost descoperit prima dată în resturile rămase de la explozia primei bombe cu hidrogen ("Ivi Mike") din 1 noiembrie 1952, fiind și primul test de succes al bombei cu hidrogen.'
},
{

	nume: "Mendeleviu",
	serie: "Actinide",
	z:101,
	a:258,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"?",
    descriere:' A fost sintetizat pentru prima dată, la începutul anului 1955, de Albert Ghiorso, din echipa savanților Glenn T. Seaborg, Bernard Harvey și Greg Choppin. S-a reușit numai sintetizarea unui singur atom de Md-256. Elementul 101 a fost cel de-al 9-lea element transuranian sintetizat; i s-a dat numele de mendeleviu în semn de apreciere pentru munca de pionierat a lui Dimitri Mendeleev.'
},
{

	nume: "Nobeliu",
	serie: "Actinide",
	z:102,
	a:259,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"?",
    descriere:'Un element metalic radioactiv transuranian în seria actinidelor, nobeliul este sintetizat prin bombardarea curiului cu ioni de carbon. A fost descoperit pentru prima dată, de o echipă condusă de către Albert Ghiorso și Glenn T. Seaborg în anul 1958. Este ultimul element care poate fi produs prin fuziune nucleară în nucleele stelelor (dar doar în cele cu masă mai mare de 5 mase solare), și deci cel mai greu element a cărui formare nu necesită un eveniment cataclismic de tipul unei supernove. Se cunosc puține detalii despre nobeliu și a fost produs în catități mici. Nu are o utilizare cunoscută în afara laboratoarelor.Cel mai stabil izotop este No259 cu o durată de înjumătățire de 58 de minute și se transformă în Fm255 prin înjumătățirea alfa sau în Md259 prin captură de electroni.'
},
{

	nume: "Lawrenciu",
	serie: "Actinide",
	z:103,
	a:262,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
	grupa: "3/ III.B",
	perioada:7,
    bloc:"f",
    densitate:"?",
    descriere:'Lawrenciu este un element chimic artificial și radioactiv, aparținând actinidelor, și având ca simbol chimic Lr. Lawrenciul a fost sintetizat pentru prima dată la 14 februarie 1961, de o echipă de fizicieni, condusă de Albert Ghiorso, experți în fizică nucleară de la Laboratorul Național Lawrence Berkeley, din cadrul Universității California.Elementul este denumit după numele fizicianului american Ernest Orlando Lawrence, care este inventatorul ciclotronului (un accelerator circular de particule elementare) care descoperire a deschis posibilitatea unor descoperiri ulterioare de elemente grele transuraniene (elemente cu un număr de ordine superior uraniului în tabelul elementelor) ca de exemplu: neptuniu (93), plutoniu (94), americiu (95), curiu (96), berkeliu (97), californiu (98), einsteiniu (99), fermiu (100), mendeleviu (101), nobeliu (102), lawrenciu (103). Lawrenciul este metal radioactiv cu un timp de înjumătățire foarte scurt, adică un element cu un nucleu atomic instabil care emite radiați ionizante cu emisiuni energie (razele Gamma) și de particule elementare (radiațiile Beta și Alfa) care duce la transformarea materiei, forma finală fiind plumbul'
},
{

	nume: "Rutherfordiu",
	serie: "Metale de tranzitie",
	z:104,
	a:263,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
	grupa: "4/ IV.B",
	perioada:7,
    bloc:"d",
    densitate:"23 kg/m3",
    descriere:'Prima oară rutherfordiul a fost obținut la Institutul Unificat pentru Cercetări Nucleare de la Dubna, U.R.S.S.. Inițial, a fost numit kurceatoviu, în cinstea savantului rus Igor Kurceatov (1903-1960).Ulterior a fost obținut și la Universitatea Berkeley alți doi izotopi de rutherfordiu prin bombardarea atomilor de Cf cu ioni de C. Americanii au propus numele de rutherfordium în cinstea fizicianului englez, născut în Noua Zeelandă, Ernest Rutherford (1871-1937). Denumirea de rutherfordiu a fost adoptat de IUPAC în 1997.Rutherfordiul este un element radioactiv și sintetic; cel mai stabil izotop este 267Rf, ce are timp de înjumătățire de 1,3 ore.'
},
{

	nume: "Dubniu",
	serie: "Metale de tranzitie",
	z:105,
	a:268,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
	grupa: "5/ V.B",
	perioada:7,
    bloc:"d",
    densitate:"29 kg/m3",
    descriere:'Acest element chimic a fost denumit după orașul Dubna, Rusia, locul unde a fost produs prima oară. Este un element chimic sintetic și radioactiv; cel mai stabil izotop al său (268Db) are timp de înjumătățire de aproximativ 28 ore.'
},
{

	nume: "Seaborgiu",
	serie: "Metale de tranzitie",
	z:106,
	a:271,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
	grupa: "6/ VI.B",
	perioada:7,
    bloc:"d",
    densitate:"21,99 kg/m3",
    descriere:'Este un metal radioactiv și artificial. Cel mai stabil izotop (269Sg) al său are timp de înjumătățire de 2,1 minute. Este elementul omolog wolframului, molibdenului și cromului și aparținând astfel grupei a 6-a a sistemului periodic al elementelor.'
},
{

	nume: "Bohriu",
	serie: "Metale de tranzitie",
	z:107,
	a:270,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
	grupa: "7/ VII.B",
	perioada:7,
    bloc:"d",
    densitate:"37 kg/m3",
    descriere:'Este un element chimic radioactiv și este artificial. A fost descoperit de o echipă de cercetători din Germania, condusă de Peter Armbruster și Gottfried Münzenberg în 1981. El a fost denumit în cinstea fizicianului danez Niels Bohr.'
},
{

	nume: "Hassiu",
	serie: "Metale de tranzitie",
	z:108,
	a:269,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
	grupa: "8/ VIII.B",
	perioada:7,
    bloc:"d",
    densitate:"21 kg/m3",
    descriere:'Hassiu este un element chimic cu numărul atomic 108 și simbol chimic Hs. Numele de hassiu provine de la landul german Hessa. A fost descoperit în Germania la ”Societatea pentru Cercetarea Ionilor Grei” (Gesellschaft für Schwerionenforschung sau GSI) în 1984.'
},
{

	nume: "Meitneriu",
	serie: "Metale de tranzitie",
	z:109,
	a:278,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
	grupa: "9/ VIII.B",
	perioada:7,
    bloc:"d",
    densitate:"37,4 kg/m3",
    descriere:'Meitneriu este element chimic cu numărul atomic 109 și simbol Mt. Este un metal tranzițional artificial, puternic radioactiv. A fost descoperit de cercetătorii de la GSI Helmholtz Centre for Heavy Ion Research din apropierea orașului german Darmstadt în 1982. Acest element chimic a fost denumit în onoarea fizicienei austriece Lise Meitner.'
},
{

	nume: "Darmstadtiu",
	serie: "Metale de tranzitie",
	z:110,
	a:281,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s1 5f14 6d9",
	grupa: "10/ VIII.B",
	perioada:7,
    bloc:"d",
    densitate:"?",
    descriere:'Este unul dintre așa-numiții atomi super-grei. Acest element sintetic se dezintegrează repede: izotopii săi de masă 267 până la 273 au timpi de înjumătățire care se măsoară în microsecunde. Izotopi mai grei ai darmstadtiului, de masă 279 și 281, au fost sintetizați ulterior și sunt mai stabili, cu timpi de înjumătățire de 0,18 secunde și 11,1 secunde respectiv.'
},
{

	nume: "Roentgeniu",
	serie: "Metale de tranzitie",
	z:111,
	a:281,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s1 5f14 6d10",
	grupa: "11/ I.B",
	perioada:7,
    bloc:"d",
    densitate:"?",
    descriere:'Roentgeniul (Röntgenium) a fost creat în laborator în 1994 de către Gesellschaft für Schwerionenforschung (GSI) în Darmstadt, Germania, când a bombardat bismut-209 cu nichel-60 si a fost numit dupa savantul care a descoperit radiatia X.'
},
{

	nume: "Coperniciu",
	serie: "Metale de tranzitie",
	z:112,
	a:285,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
	grupa: "12/ II.B",
	perioada:7,
    bloc:"d",
    densitate:"?",
    descriere:'Coperniciu este un element chimic cu simbolul Cn și numărul atomic 112. Este un element chimic sintetic și extrem de radioactiv, ce poate fi creat doar în laboratoare specializate în reacții nucleare. Cel mai stabil izotop, coperniciu-285, are un timp de injumatatire de doar 29 sec., dar este posibil ca acest izotop de coperniciu să aibă un izomer cu timp de înjumătățire mai lung, 8,9 min. În timpul reacției cu aurul s-a demonstrat că are proprietăți de metal volatil și caracteristicile unui element din grupa a 12-a. Coperniciului i s-au estimat că ar avea proprietăți ce-l diferențiază de omologii săi mai ușori din grupa, zinc, cadmiu și mercur.'
},
{

	nume: "Nihoniu",
	serie: "Metale de post-tranzitie",
	z:113,
	a:284,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
	grupa: "13/ III.A",
	perioada:7,
    bloc:"p",
    densitate:"14,5 kg/m3",
    descriere:'Acesta a fost detectat pentru prima dată în anul 2003 prin dezintegrarea atomului de moscoviu și a fost sintetizat în anul 2006. Nihoniul constă dintr-un atom cu 113 protoni în nucleul său - un tip de materie care nu există în mod natural pe Pământ.După 9 ani de încercări, cercetători de la „RIKEN Nishina Center for Accelerator-Based Science” din Japonia au anunțat la data de 26 septembrie 2012 că au reușit pentru prima dată să-l sintetizeze. Sintetizarea a avut loc prin bombardarea unui strat de bismut cu ioni de zinc cu viteza de o zecime a vitezei luminii.'
},
{

	nume: "Fleroviu",
	serie: "Metale de post-tranzitie",
	z:114,
	a:289,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
	grupa: "14/ IV.A",
	perioada:7,
    bloc:"p",
    densitate:"22 kg/m3",
    descriere:'Fleroviul este un element chimic radioactiv cu numărul atomic 114, și având simbolul chimic Fl. În ianuarie 1999, cercetătorii de la Laboratorul Național Lawrence Berkeley, din cadrul Universității California, SUA, și de la Institutul Unificat de Cercetări Nucleare din Dubna, Rusia au anunțat crearea elementului 114. Acesta conține 114 protoni, pare a fi mult mai stabil decât oricare alt atom supergreu și a rezultat prin bombardarea unui izotop de plutoniu îmbogățit cu neutroni, cu un izotop de calciu. Elementul 114 a primit denumirea de fleroviu la data 30 mai 2012, nume acordat în cinstea lui G.N. Flerov (1913 - 1990), fondatorul institutului din Dubna.'
},
{

	nume: "Moscoviu",
	serie: "Metale de post-tranzitie",
	z:115,
	a:288,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
	grupa: "15/ V.A",
	perioada:7,
    bloc:"p",
    densitate:"13,5 kg/m3",
    descriere:'Moscoviu este numele elementului chimic, sintetic și supergreu, cu numărul atomic 115. Este un element chimic radioactiv. Cel mai stabil izotop al acestui element este 289Mc, având timp de înjumătățire de 220 milisecunde. A fost sintetizat pentru prima dată în 2003 de o echipă de cercetători ruși și americani de la Institutul Unificat de Cercetări Nucleare (JINR) din Dubna, Rusia. Pe 8 iunie 2016, IUPAC a redenumit ununpentiu în moscoviu (simbol: Mc).'
},
{

	nume: "Livermoriu",
	serie: "Metale de post-tranzitie",
	z:116,
	a:293,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
	grupa: "16/ VI.A",
	perioada:7,
    bloc:"p",
    densitate:"27 kg/m3",
    descriere:'Livermoriu este numele dat elementului cu număr atomic 116. Existența acestui element a fost demonstrată în 1999 în Berkeley, California.'
},
{

	nume: "Tennessin",
	serie: "?",
	z:117,
	a:294,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
	grupa: "17/ VII.A",
	perioada:7,
    bloc:"p",
    densitate:"?",
    descriere:'Tennessine (numele anterior, provizoriu, fiind Ununseptiu) este numele dat elementului cu număr atomic 117. Un grup de fizicieni din Rusia și Statele Unite, condus de academicianul Iuri Oganesian de la Institutul Unificat de Cercetări Nucleare din Dubna, a sintetizat pentru prima dată în istorie cel de-al 117-lea element al Sistemului periodic al elementelor chimice – tabelul lui Mendeleev. Elementul numit – neoficial – Ununseptium, și care acoperă golul din tabelul lui Mendeleev, a fost constituit din elementele cu numerele atomice 116 și 118, obținute anterior la Dubna. Experimentul de sintetizare a celui de-al 117-lea element a început pe 27 iulie 2009. Pe 8 iunie 2016, IUPAC a redenumit ununseptiu în tennessine (simbol: Ts).Un lot de 22 miligrame de berkeliu-249 a fost preparat în urma unei iradieri ce a durat 250 de zile și apoi purificat timp de 90 de zile la Oak Ridge în 2009. Această operațiune a fost urmată de obținerea primilor 6 atomi de ununseptiu la Institutul Unificat de Cercetări Nucleare (JINR) din Dubna, Rusia, după ce acesta a fost bombardat cu ioni de calciu în ciclotron pentru 150 de zile. Această operațiune de sinteză a fost un punct culminant al colaborării dintre Rusia (JINR) și Laboratorul Național Lawrence Livermore.'
},

{

	nume: "Oganesson",
	serie: "?",
	z:118,
	a:294,
	config: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10 5s2 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
	grupa: "18/ VIII.A",
	perioada:7,
    bloc:"p",
    densitate:"?",
    descriere:'Oganessonul este numele definitiv al elementului supergreu sintetic cu numărul atomic 118; simbolul chimic corespunzător este Og și a fost numit în onoarea savantului rus Iuri Țolacovici Oganesian. Numărul foarte mic de atomi de Uuo obținuți până acum (3 sau 4) nu permit studierea proprietăților fizice și chimice ale elementului, dar predicțiile teoretice arată că acesta ar fi un solid radioactiv.Pe 8 iunie 2016, IUPAC a redenumit ununoctiu în oganesson (simbol: Og).'
},
]

let tabel = document.getElementById('tabel');
let descEl = document.getElementById("desc-element");

let numeEl = document.getElementById("nume-element");
let serieEl = document.getElementById("serie");
let zEl = document.getElementById("z-element");
let aEl = document.getElementById("a-element");
let configuratieEl = document.getElementById("configuratie");
let grupaEl = document.getElementById("grupa");
let perioadaEl = document.getElementById("perioada");
let blocEl = document.getElementById("bloc");
let densitateEl = document.getElementById("densitate");
let descriereEl = document.getElementById("descriere");

function showElement(numarEl){
	tabel.style.opacity="0.2";
	descEl.style.display="flex";
	numeEl.innerHTML = "Nume: " + elemente[numarEl-1].nume;
	serieEl.innerHTML = "Serie: " + elemente[numarEl-1].serie;
	zEl.innerHTML = "Numar Atomic Z: " + elemente[numarEl-1].z;
	aEl.innerHTML ="Numar de Masa A: " +  elemente[numarEl-1].a;
	configuratieEl.innerHTML = "Configuratie Electronica: " +  elemente[numarEl-1].config;
	grupaEl.innerHTML = "Gupa: " +  elemente[numarEl-1].grupa;
	perioadaEl.innerHTML = "Perioada: " +  elemente[numarEl-1].perioada;
    blocEl.innerHTML = "Bloc: " +  elemente[numarEl-1].bloc;
	densitateEl.innerHTML = "Densitate: " +  elemente[numarEl-1].densitate;
	descriereEl.innerHTML = "Descriere: " + elemente[numarEl-1].descriere;
	document.getElementById("footer").style.display="none";

}

function closeRes() {

      descEl.style.display="none";
      tabel.style.opacity="1";
      document.getElementById("footer").style.display="block";
}
