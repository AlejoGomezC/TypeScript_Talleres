//Taller 2 TypeScript Alejandro Gomez Colorado

//Import de la clase Serie y los datos de las series.
import {series} from './data.js';
import { Serie } from './serie.js';

//Se obtiene el body general y el body de la tabla de series.
const seriesTbody : HTMLElement = document.getElementById('series')!;
const mainBody : HTMLElement = document.getElementById('body')!;

//Se obtiene el titulo principal.
const title : HTMLElement | null = document.getElementById("mainTitle")!;

//Se obtiene el parrafo donde se dispone el promedio de temporadas de las series.
const avgParagraph : HTMLElement | null = document.getElementById("averageSeasons")!;

//Se obtiene el lugar donde se disponen las cards.
const card : HTMLElement = document.getElementById('cards')!;



//Funcion para crear la card de una serie
function renderCardSerie(s: Serie) : void{
    console.log("Renderizando Card de la serie...");
    card.innerHTML = "";
    let fila = document.createElement("div");   
    fila.innerHTML = `<div class="card text-white bg-primary mb-3"  id="card">
                        <img class="card-img-top" src=${s.image} alt="Card image cap">
                        
                        <div class="card-body">
                        <h4 class="card-title">${s.name}</h4>
                        <p1 class="card-text">${s.description}</p1>
                        <br>
                        <br>
                        <a id= "idLink"
                        href=${s.link}
                        target="_blank"
                        >Go to main page</a>
                        </div>
                        </div>`;
    card.appendChild(fila);   

}


//Funcion para disponer las series y su informacion en la tabla
function renderSeriesInTable(series: Serie[]) : void{

    series.forEach( s => {

        let fila = document.createElement("tr");  
        fila.setAttribute("class", "clickable");
        fila.onclick = function(){renderCardSerie(s)};
         
        fila.innerHTML = `<td>${s.id}</td>
                            <td>${s.name}</td>
                            <td>${s.channel}</td>
                            <td>${s.seasons}</td>`;
        seriesTbody.appendChild(fila);   
    });
}

//Funcion para calcular el promedio de temporadas de las series
function getAverageSeasons(series: Serie[]) : number{

    let totalSeasons : number = 0;
    series.forEach( s => totalSeasons =  totalSeasons + s.seasons);
    
    return totalSeasons / series.length;
}


renderSeriesInTable(series);
let averageSeasons: number = getAverageSeasons(series);

title.innerText = "TV Series ";
avgParagraph.innerText = "Seasons Average: " + averageSeasons;

