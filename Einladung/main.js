let parameters = new URLSearchParams(window.location.search);
let name = parameters.get("name");
let page = 0;
function nextPage(){
    if (page < 4){
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
          Lange ist’s her, doch 
          endlich ist es wieder so weit.
          Eine neue Ära der unnötigen Formalitäten und Anstrengungen beginnt und
          Sie sind natürlich ganz herzlich eingeladen, uns bei dieser Reise zu
          geleiten...
        </p>
        `;
        document.getElementById("left").style.opacity = 0;

    } else if (page === 1){
        document.getElementById("textfield").innerHTML = `
        Mir dünket, es sei erst
        Gestern gewesen, als der junge CookyGaming und der noch jüngere Hekates einen
        Minecraft Server gründeten.
        Das Ziel: die Bestie, den
        Ender Drache in einer
        Windes Eile zu besiegen,
        doch da stiessen sie auf ein Dorf. Es war so wunderschön, dass die beiden sich 
        niederliessen und dort 1 
        Jahr verweilten, bis sie zum letzte Mal diesen schönen 
        Ort verliessen…
        `
    } else if (page === 2){
        document.getElementById("textfield").innerHTML = `

        Doch nun war es wieder so weit. Die Beiden brachen wieder auf und da, eine wunderbare Niederlassung. Doch dieses Mal mit dem Gedanken da zu bleiben. So wurde es ihnen eines Tages langweilig, so beschlossen sie, das Dorf auch mit echten Menschen zu bevölkern.
        `
    } else if (page === 3){
        document.getElementById("textfield").innerHTML = `
        Deshalb werden Sie nun aufgerufen, mit ihnen ein, zwei oder auch viele Abenteuer zu erleben und eine grosse Stadt aufzubauen. Das erste Abenteuer, die Reise zum Dorf, wird diesen Samstag, der 26.3.2022 stattfinden. Genauere Informationen werden Ihnen am genannten Tage in der Früh überbracht.
        `
    } else if (page === 4){
        document.getElementById("textfield").innerHTML = `
        Mit vollstem Respekt,<br />
        Bürgermeister Cooky und Generalsekretär Hekates. <br />
        <img class="signatures" src="http://hekates.github.io/Einladung/img/signatures.png" />

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
