//Taller 2 TypeScript Alejandro Gomez Colorado

import {series} from './data.js';
import { Serie } from './serie.js';


const seriesTbody : HTMLElement = document.getElementById('series')!;
const mainBody : HTMLElement = document.getElementById('body')!;
const functions : HTMLElement = document.getElementById('functions')!;


function renderCardSerie(s: Serie) : void{
    console.log(s);
    let fila = document.createElement("div");   
    fila.innerHTML = `<div class="card" id="card">
                        <img class="card-img-top" src=${s.image} alt="Card image cap">
                        <div class="card-body">
                        <h4 class="card-title">${s.name}</h4>
                        <p class="card-text">${s.description}</p>
                        <a
                        href=${s.link}
                        target="_blank"
                        >Go to main page</a>
                        </div>
                        </div>`;
        mainBody.appendChild(fila);   

}


//Funcion para disponer las series y su informacion en la tabla
function renderSeriesInTable(series: Serie[]) : void{

    series.forEach( s => {

        let fila = document.createElement("tr");   
        fila.innerHTML = `<td id="idCol">${s.id}</td>
                            <td onclick="renderCardSerie(s)">
                            ${s.name}
                   
                            </td>
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



var title : HTMLElement | null = document.getElementById("principalTitle")!;
title.innerText = "TV Series ";

var averageSeasons: number = getAverageSeasons(series);
let averageSeasonsString = document.createElement("p");
averageSeasonsString.innerHTML = `<p>Seasons Average: ${averageSeasons}  </p>`
mainBody.appendChild(averageSeasonsString);
