let parameters = new URLSearchParams(window.location.search);
let name = parameters.get("name");
let page = 0;
function nextPage(){
    if (page < 3){
    page ++;
    displayPage(page);
    }
}
function lastPage(){
    if (page > 0){
    page --;
    displayPage(page);
}
}
function displayPage(page){
    document.getElementById("left").attributeStyleMap.clear();
    document.getElementById("right").attributeStyleMap.clear();
    document.getElementById("stamp").attributeStyleMap.clear();


    if (page === 0){

        document.getElementById("textfield").innerHTML =`
        Sehr geehrter <br />Herr ` + " " + name
        + `<p>
        Wir freuen uns, Ihnen mitteilen zu dürfen, dass Sie herzlich eingeladen sind, uns am Samstag, 26.3.2022 ab 10:00 Uhr zu geleiten.
        </p>
        `;
        document.getElementById("left").style.opacity = 0;

    } else if (page === 1){
        document.getElementById("textfield").innerHTML = `
        Wir können Ihnen zwar nicht versprechen, dass auch wir, der Bürgermeister und der Generalsekretär nach 12:00 Uhr uns auf dem Server befinden, doch sie sind auch bei einer Verspätung herzlich eingeladen, alleine auf die Reise zu unserer Niederlassung bei den Koordinaten 12 63-1462 auf zu brechen.
        `
    } else if (page === 2){
        document.getElementById("textfield").innerHTML = `
        Wichtige Informationen, die Sie zu beacheten haben:
        <br/><br/>Server IP: 5.83.164.75:45400
        <br/><br/>Version: Java 1.18.2
        <br/><br/><br/>Bei weiteren Fragen, wenden Sie sich an Hekates oder Cooky per Discord.`
    } else if (page === 3){
        document.getElementById("textfield").innerHTML = `
        Mit vollstem Respekt,<br />
        Bürgermeister Cooky und Generalsekretär Hekates. <br />
        <img class="signatures" src="https://hekates.github.io/Einladung/img/signatures.png" />

        <br/>Überbracht von Bote Klaus.
`
                
        document.getElementById("stamp").style.opacity = 0.5;
        document.getElementById("stamp").style.width = "10rem";
        document.getElementById("stamp").style.bottom = "25rem";
        document.getElementById("stamp").style.right = "7rem";

        document.getElementById("stamp").style.top = "16rem";

        document.getElementById("right").style.opacity = 0;



    }
}