---
layout: post
title:  "Internettets og dens fremtid"
date:   2022-10-17 01:18:01
tag: API, Internettet, Twitter
intro: "En fortælling om hvordan internettet fungerer: om hvilken information du efterlader og om hvordan man kan bruge teknologi til at undersøge dette"
beskrivelse: "Formålet med Imargin er at få og give en større forståelse af hvordan teknologi fungerer. Hvilken bedre måde at starte dette på end en undersøgelse ind i hvordan internetter fungerer. Denne fortælling starter for to år siden og kommer vi rundt om: APIer, web/dataskrabning, Python, Twitter, datamanipulering, visualisering samt andre spændende områder"
coverphoto: "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?w=640"
d3chartPlaceholder: "observablehq-BubbleChartName-b5329101"
d3chartType: "Bubblechart"
---

{% newthought 'Min far skulle rejse halvvejs rundt om jorden,' %}for at få sin første emailadresse. Det var 1994 og vi var rejst med ham til New Zealand, hvor han skulle undervise. Det var lidt før internettet gjorde sit indtog hos den brede offentlighed. Nu er det svært at forestille sig en hverdag uden internettet, men i sin spæde start var det forbeholdt forsknings og militæret. Det på det tidspunkt slet ikke i kortene at internettet ville blive så stor en succes. Det var en universalt kendt at at internettet ikke var noget som *normale* mennesker ville komme til at bruge {Andreesen sam harris. Speaking about the time between 1992-1994: "It wwas so universally known that the internet was not something that normal people were going to use}. Folk som Bill Gates var stadig meget skeptiske og han på daværende tidspunkt ikke se den store kommercielle potentiale i teknologien. {"I see little commercial potential for the internet for the next 10 years" https://www.businessinsider.com/the-dumbest-things-bill-gates-ever-said-2016-4 sagde han i 1994 i 1995 udsender han i 1996 "the internet tidalwave memo"}. 
Der var der dog andre der fra starten så dets kæmpe potentiale og som havde en stor andel i hvordan det hele begyndt. Marc Andreesen var en af disse. Han var med til at udvikle Mosaic {den første webbrowser https://en.wikipedia.org/wiki/Marc_Andreessen} og den første store kommercielle browser Netscape Navigator der var den mest brugte browser i da i 1990'erne {source}. Marc Andreesen og hans folk bøvlede dog med en stor udfordring som de aldrig fik løst. De ønskede at lave en betalingsløsning i browseren. Et plug-in til bank industrien således at man kunne tjene penge på at lave indhold på internettet. Det lykkedes aldrig {MA 21 min: microsoft og aol prøvede også uden held } og den eneste anden løsning var at reklamer blev måden hvorpå man kunne 'betale' for brug af internettet. 

{% epigraph 'If you can´t charge people for things you gotta run adds. And that´s what happened' 'Marc Andreesen' ' "What went wrong? Making Sense Podcast (22 min)" ' %}

Marc Andreesen - Sam Harris Hvordan man skulle tjene penge
Ikke muligt med betalingsløsning og derfor blev det reklamer

For at reklamer kan være effektive, skal man have data. 

Data blev det nye olie 

Og det er der vi er i dag. Dem som har mange brugere, får meget data og kan dermed sælge deres data videre og tjene penge på reklamer. 
Det er essentielt forretningsmodellen bag alle de store some (facebook, instagram..)

Det er også derfor startups ikke behøver tjene penge (og også store orgs som instagram heller ikke behøver - de har endnu ikke haft et overskud). (Det skyldes at de har så meget potentiel værdi i deres data- goodwill)
DHH - facebook kan ikke tjene penge

Udover de konsekvenserne er at der er nogle få store spillere der styrer det hele 
monopolhandlinger { sidenote },
 ytringsfrihed { sidenote } 
 og deling af personfølsomme oplysninger { sidenote } 
 
 Så er forretningsmodellen baseret på at du skal være på sitet så meget som muligt. Gøre dig afhængig. Mest kendt er nok Instagram rapport om at dette er meget kendt {links til rapporter om } 

Denne centralisering er nu blevet grundsstrukturen indgangene til internettet. De styrer hvordan vi bruger internettet. 

Så spørgsmålet dette nogensinde vil ændrer sig?

Svaret mener jeg er ja, og jeg mener faktisk allerede det er på vej. Der er en revolution i gang hvis mål er at skabe et decentralt netværk til at tage over for de nyeste. 

Før vi når frem til det skal vi dog kigge lidt nærmere på hvordan vi kom her til. 




Men internettet har siden sin undfangelse gennemgået en række ændringer og er ikke det samme som ved dets oprindelse. I sin nuværende form er internettet drevet af brugerdata som er betalingsmidlet der bruges for de ellers frie services. Jo flere brugere, des mere data som kan bruges til at sælge videre til tredjeparter til målrettede reklamer. Det har samtidig skabt få SoMe platforme som Twitter, YouTube, Facebook, Instagram. De fleste ejet af få de fem største techvirksomheder i verdenen - de såkaldte MAMAA {% marginnote 'mn-id-1' 'Meta (tidligere Facebook), Amazon, Microsoft, Amazon, Alphabet (tidligere Google). Før navneændringerne var disse også kaldet FAANG, hvor Netflix figurerede i stedet for Microsoft. **[What is MAMAA](https://mountaintimes.info/what-is-mamaa/)**' %}. Dette har skabt yderligere problemer da det har skabt en centralisering af magt hos få privatejede virksomheder. Diskussioner om monopolhandlinger { sidenote }, ytringsfrihed { sidenote } og deling af personfølsomme oplysninger { sidenote } har i særdeleshed sat fokus på problemstillingerne ved den struktur som internettet er opbygget på. Mindre forskel 

Denne fortælling vil kigge på hvordan internettet er blevet som det er. .. og om hvorvidt en ny version af internettet kan løse de problemer som vi står overfor. 

For at forstå hvordan det hele startede, skal vi tilbage til 1969 hvor to bogstaver spillede en central rolle i starten på internettet.

## To bogstaver der startede det hele

I starten af Werner Herzog's dokumentar **[Lo and behold](https://www.imdb.com/title/tt5275828/)** {% sidenote 'sn-id-3' 'Werner Herzog, *Lo and Behold: Reveries of the Connected World*, 2016.' %} genskaber han, hvordan den første besked blev sendt mellem to computere. Professor **[Leonard Kleinrock](https://da.wikipedia.org/wiki/Leonard_Kleinrock)** husker tilbage til da han første gang prøvede at logge på computeren på Stanford University som de havde tilknyttet en computer på hans eget fakultet på UCLA. For at logge ind skulle man skrive sende beskeden L-O-G. De nåede bare ikke så langt, for den tilknyttede computer *crashede* efter at have modtaget de første to bogstaver: L-O. "*Lo* and Behold" som i "*Se* og beskue" - meget poetisk og profetisk. Sådan blev den første besked sendt mellem to computere og lagde grundstenen for internettet {% marginnote 'mn-id-4' 'Første gang *internettet* bruges som begreb var i 1974, som en forkortelse for **[internetwork](https://datatracker.ietf.org/doc/html/rfc675)**' %}   

## Internettes første generation Web1.0
I starten var det hovedsagligt offentlige institutioner og universiteter som brugte sig af internettet. Der var derfor før 1990erne var der ingen rigtig kommerciel brug af internettet for virksomheder. 

I starten af 1990s begynder internetbrugere at tage fart {% sidenote 'sn-id-4' 'Our World in Data, *Share of the population using the internet*, 1990-2020. (https://ourworldindata.org/internet)' %}. 

<p>
<iframe src="https://ourworldindata.org/grapher/share-of-individuals-using-the-internet?country=South+Asia~North+America~Sub-Saharan+Africa~East+Asia+and+Pacific~Middle+East+and+North+Africa~Europe+and+Central+Asia~Latin+America+and+Caribbean~DNK" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
</p>

Omkring 2005 ændrede internettet sig til Web02{% marginnote 'mn-id-2' 'Udtrykket blev opfundet af *Darcy DiNucci* allerede i 1999, som beskrev hvad der var på vej **[Fragmented Future](http://darcyd.com/fragmented_future.pdf)**' %}.

Facebook, YouTube, Google gjorde sit indtog og internettet blev det format som vi kender nu {% marginnote 'mn-id-3' 'Udtrykket blev gjort popoulært af *Tim O´Reily* i 2004, som med artiklen **[What Is Web 2.0](https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html)** sammenlignede de tidligere *spillere* i Web01 med de nye' %}

Siden da er det kun gået en vej - alt skal nu være digitalt. Og ikke nok med det. Det skal også være smart og lækkert. De enheder vi bruger til at tilgå internettet er designobjekter i sig selv og dets brugergrænseflader bliver simplificeret i en sådan grad at vi forventer at det kun kræver et klik for at få en pizza leveret til vores hoveddør. Vi er blevet forvænt. 

Men vi skal passe på at vi ikke stirrer os blinde på de blanke overflader så vi overgiver al initiativ og visdom til de få og glemmer at internettet skal være et demokratisk sted for os alle. 

For ikke nok med at vi betaler med vores personlige data, vi prisen i fremtiden kan blive endnu højere hvis vi fortsat *fremmedgøre* os over for hvordan det teknologiske fundament der driver vores verden fungerer. 

For at forstå hvor internettet er på vej hen har vi brug for at vide hvor det kommer fra og hvordan det er struktureret. 


Det er derfor vigtigt at vi undersøger hvordan internettet fungerer og presser os selv til at lærer mere om hvordan den underliggende teknologi fungerer. 

I denne fortælling undersøger jeg dette ved at kigge på:

* Hvordan startede internettet og hvad er dens fundamentalle byggeblokke?
* Hvad er problematikkerne ved hvordan internettet er struktureret nu? 
* Hvordan kan fremtiden for internettet se ud?
* Hvad kan jeg selv gøre for at forstå det bedre?


<!-- 
Vi forventer at alt er gratis, men det er det ikke. Vi betaler bare med en anden valuta, nemlig vores personlig data. Og ikke nok med det. Hvis vi ikke tager aktivt del i internettet og forstår hvordan det fungerer, så mister vi det demokratiske aspekt af den virtuelle verden. 



I vores dagligdag tager vi det givet. Internettet. Fri kommunikation gennem Smartphones. At vi kan trykke på en knap og få leveret mad direkte til døren. Flotte designede enheder med lækker brugergrænseflade har forvænt os: Al information *bør* kun være et klik væk.   -->



### Hvordan fungerer internettet egentlig?!

Okay, så jeg trykker på en knap  og så sender jeg noget information over til en anden person, som så kan trykke på en knap og sende noget andet information af sted. Og så kan vi kommunikere over internettet ik?!

Johh, sådan nogenlunde da...

Da jeg som nyuddannet startede i it-branchen snart 10 år siden,{% marginnote 'mn-id-3' 'Tænk sig, det føltes som i går, men tiden flyver jo når man er i godt selskab og nyder hvad man laver.' %} var meningen at jeg skulle være projektleder eller *it-finansgut*. Med en uddannelse fra CBS i *business and politics* var tanken med mit traineeship at jeg skulle styre it-projekter. Jeg blev dog bidt af den mere tekniske del af it og endte med at blive bindeled mellem forretning og udviklerne. Siden da har jeg gravet mig dybere ned i hvordan den software som vi bruger egentlig fungerer. Så for ca. to år siden satte jeg mig for at undersøge hvordan internettet fungerer eller rettere, hvordan det egentlig går til når vi kommunikerer over internettet. Fortællingen starter som altid med en god gang Googling

### APIer og dataskrabning
Så hvad sker der rent faktisk når man trykker på en knap på internettet. Hvad sker der når du trykker her: 


<iframe width="100%" height="144" frameborder="0"
  src="https://observablehq.com/embed/4b64ea95f8abf6ad?cells=viewof+clicks%2Cklik"></iframe>


Når du trykker på knappen interagerer den med den nedestående kode, som lægger 1 til det tidligere antal. Et *kald* bliver lavet via et API (Application Programming Interface). Det er rygraden af **[internettet](https://hackernoon.com/apis-how-the-internet-works-behind-the-scenes-690288634c32)**


<p>
<iframe width="100%" height="676" frameborder="0"
  src="https://observablehq.com/embed/d4029bfa31ba86b8?cells=heatmap"></iframe>
</p>

Hvad sker der her hvis jeg laver en margin note {% marginnote 'mn-id-2' 'Tænk sig, det føltes som i går, men tiden flyver jo når man er i godt selskab og nyder hvad man laver.' %} hjælper det

<p>
<iframe width="100%" height="676" frameborder="0"
  src="https://observablehq.com/embed/35ee031adc45ac47?cells=plottweets"></iframe>


</p>