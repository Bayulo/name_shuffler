const names = [
    "JICK GILDDY CLINTON 	UBa23E0243",
    "MAIMO HARRIS SHAALANYUY NDZE 	UBa23E0258 ",
    "NGWA JUTHEL 	UBa23E0281",
    "ABANDA GLORY ASAKWA	UBa23E0201",
    "NYANGA PIETHRAS EKWENDI 	UBa23E0288",
    "NEH PRAISE NDE TIKUM	UBa23E0277",
    "MBUH BLAISE KHAN 	UBa23E0263",
    "NFORTABU LAWRENCE JUDE SUH	UBa23E0279",
    "NKWAIN BLAISE NGAM 	UBa23E0284",
    "HELGA NCHEFEE FUAMBU 	UBa23E0242",
    "VERLA NOEL HELEN	UBa23E0308",
    "ARREY FRANK JR 	UBa22E0265",
    "ASANJI KARL NSOH	UBa23E0214",
    "KONGNUH LARRY NCHOTIDOH 	UBA23E0248",
    "NDONG JOSEPH SCRIPTURE FANG	UBa23E0275",
    "BOH DZOMO BOB PETER 	UBa23E0222",
    "DJUIKUI TCHAMDJIEU STEVE VANELLE	UBa23E0228",
    "NDANGSA DANIEL NANJO 	UBa23E0270",
    "AKWANWI PRECIOUS ADE	UBa23E0207",
    "ACHUCHO NOEL MOKUM 	UBa23E0203",
    "MAZWEWOH JOHN BRINDI N.	UBa23E0260",
    "NURU MOHAMMED GAMBO	UBa23E0287",
    "BONGSENYUY PRESCIOUS SHOKAH 	UBa23E0223",
    "CHE RODRICK	UBa23E0224",
    "ALIYU ARUNA NJAIRE	UBa23E0210",
    "FONGONG EMMANUEL NKWANWI	UBa23E0238",
    "KUMA MISTERY KUMA	UBa23E0252",
    "KONSEH BELEFEYIN SILAS	UBa23E0249",
    "FOMBANG SHNEIDER NAHNYONGA 	UBa23E0236",
    "NGWA FRANK NEBA	UBa23E0280",
    "KOUAMOU HONKEP SEM VALDES	UBa23E0251",
    "YUFONYUY SERGE NYUYTIFO	UBA23E0312",
    "TAMOKEM NOPOYE RONIS 	UBa23E0297",
    "MUKEM MAXCEL MBAWEI	UBa23E0266",
    "FOPAH PRINCELY TEKWA	UBa23E0240",
    "FONYUY RANDY TARDZENYUY	UBa23E0239",
    "LEINYUY-YEFON WILL VERDZE 	UBa23E0256",
    "KEMLOUNG LOIC CABREL	UBa23E0244",
    "TIANYI ALPHONSE	UBa23E0304",
    "ALAISAMBOM ZEPHO CHIA	UBa23E0208",
    "ASHE JOHN TUMBAN 	UBa23E0215",
    "MBEFOU LUONJO DELSONG	UBa23E0261",
    "NGWOMEH PRAISE FORHNUI 	UBa23E0282",
    "MBUNGAI MARIE JOSETTE LEINYUY 	UBa23E0264",
    "TALLA JONES MUCHUO 	UBa23E0295",
    "AFUNGCHWI EMME-RITA ATENUI	UBa23E0205",
    "MAINIMO PERCY BIY	UBa23E0259",
    "NUBIA JUSTICE MUBANG	UBa23E0286",
    "FETEH MIREILLE LAREINE	Uba23E0235",
    "WATTAD BRANDON NYE	UBa23E0309",
    "DOH LANDRINE LEBGA	UBa23E0230",
    "DARAEL ERI GADDIEL 	Uba23E0226",
    "ROBERTA MUSI-SAMBAT NKWETI 	UBa23E0292",
    "RINGNYU  BLESSING 	UBa23E0291",
    "AFUH FAITHNALICE 	UBa23E0204",
    "KOUAMO NOUBIENGANG BETTY 	UBa23E0250",
    "KFUH BRIYAN YOW 	UBa23E0245",
    "NDASI JOSEPH NOAHYE	UBa23E0271",
    "NSAH AGNES MBONG	UBa23E0285",
    "TIZIH MARK-PRINCE	UBa23E0303",
    "TAKAM FOSSAP BRYAN DENILSON 	Uba23E0294 ",
    "DJOU KENNE BELVIANE MANUELLE	UBa23E0227",
    "BAYUGA LORDLEY NJOMBOMBO	UBa23E0217",
    "BINYI OBED MBIFORNYI 	UBa23E0221",
    "NDI FAVOUR NGWANG	UBa23E0272",
    "LAFEN LOUISA CARRL-MAX	UBa23E0253",
    "ABONGWA BENEDICT	UBa23E0202",
    "PHANUEL GWAIN KUHNJONG	UBa23E0289",
    "NJITA NJITA RUSSEL 	Uba23E0283",
    "TCHOUAMO DJOMATCHOUA JOEL BRYAN 	UBa23E0301",
    "DOBGIMA BABILA DANIEL 	UBa23E0229",
    "NDIFON MELVIN KONTENG	UBa23E0273",
    "AWAMBENG CARLSON TANWIEH 	UBa23E0216",
    "SHUMANJAH MARVELLOUS	UBa23E0293",
    "YAKUM BROWNTON KWAMBE	UBa23E0310",
    "KHAN PENN PROMISE 	UBa23E0246",
    "YOSIMBI SHALOM BONJEH	UBa23E0311",
    "PRINCELY NYANYOH OSSAI 	UBa23E0290",
    "FONCHAM HARRISON BENYELA 	UBa23E0237",
    "ANGOBE WILLIAM NFORBA JR	UBa23E0212",
    "ZUNISHIE GODWILL AZEH	UBa23E0314",
    "MBIGHONYI TRACY NYIMBIGWEH	UBa23E0262",
    "MFONFU WESLEY BIKOMA 	Uba23E0265",
    "TIKUM HARRISON TENGEN	UBa23E0305",
    "ACHEMBOM FRIDALYNN KOKUE 	UBA22E0254",
    "TALLA MICHAEL TOHMUNTAIN	UBa25E3058",
    "TAKU IMMACULATE EYAH	UBa25E3057",
    "KEWIR JEWEL DZESINYUY	UBa25E3055",
    "VALEUGA KELSEY LONGCHI 	UBa25E3060",
    "DOUANLA TSIEUMO JOEL CEDARD 	UBa25E3053",
    "SOGNA NYA LYVAN DUNEL	UBa25E3056",
    "TENGHI FAVOUR MUMA 	UBa23E0303",
    "TAMANJONG JOSEPH FONDANUI	UBa25E3059",
    "KUDI GILET BACHE	UBa22E0293",
    "Billa Frank Kiga Waishu	UBa23E0220",
    "TASHA MAXWELL NTENGKEH	UBa23E0300",
    "Ndikum Ntcho Flavien Aime	UBa22E0304",
];


const totalNames = names.length;
function shuffle(){
    const genNumbers=[];
    while(genNumbers.length < totalNames){
        //generate random numbers from 0 to the max number of elements on the names list.
        const num = Math.floor(Math.random() * totalNames);
        //add the unique numbers to the array genNumbers.
        if (!genNumbers.includes(num)){
            genNumbers.push(num);
        }
    }
    return genNumbers;
}


function display(){
    let personsPerGroup = parseInt(document.getElementById("persons").value);
    let desiredGroups = parseInt(document.getElementById("groups").value);

    //logic for number of desired groups
    if (isNaN(personsPerGroup) && !isNaN(desiredGroups)) {
        personsPerGroup = Math.ceil(totalNames / desiredGroups);
    }

    const namesOutput = document.getElementById("theNames");
    let group_number = 1;
    let random_nums = shuffle();
    namesOutput.innerHTML = `<div class="group_set">Group ${group_number}</div><br>`
    for(let i = 1; i <= totalNames; i++){ 
         //display the names
            namesOutput.innerHTML += `${i}. ${names[random_nums[i-1]]} <br><br>`;
            if( i % personsPerGroup == 0 && (i < totalNames)){
                group_number++;
                namesOutput.innerHTML += `<br><div class="group_set">Group ${group_number}<br><br>`
            }
        }
    }


document.getElementById("shuffle_button").onclick = function (e){
    e.preventDefault();
    display();
}
display();



//pdf download logic with jspdf
document.getElementById("download_button").onclick = function() {
  const { jsPDF } = window.jspdf; // get jsPDF from the loaded script
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  // Get content from the display div
  const elementHTML = document.getElementById("theNames").innerHTML;

  // Clean HTML: convert <br> to newlines, remove tags
  const text = elementHTML
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, ""); // remove remaining HTML tags

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const textWidth = pageWidth - margin * 2;
  const lines = doc.splitTextToSize(text, textWidth);
  const pageHeight = doc.internal.pageSize.height;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  
  //add new page
  let y = 60;

    lines.forEach(line => {
        if (y > pageHeight - 40) { // near bottom of page
            doc.addPage();
            y = 60;
        }
        doc.text(line, margin, y);
        y += 15;
    });


  doc.save("grouped_names.pdf");
};