//Taller 1 TypeScript Alejandro Gomez Colorado
import { series } from './data.js';
const seriesTbody = document.getElementById('series');
const mainBody = document.getElementById('body');
//Funcion para disponer las series y su informacion en la tabla
function renderSeriesInTable(series) {
    series.forEach(s => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td id="idCol">${s.id}</td>
                            <td>${s.name}</td>
                            <td>${s.channel}</td>
                            <td>${s.seasons}</td>`;
        seriesTbody.appendChild(fila);
    });
}
//Funcion para calcular el promedio de temporadas de las series
function getAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach(s => totalSeasons = totalSeasons + s.seasons);
    return totalSeasons / series.length;
}
renderSeriesInTable(series);
var title = document.getElementById("principalTitle");
title.innerText = "TV Series ";
var averageSeasons = getAverageSeasons(series);
let averageSeasonsString = document.createElement("p");
averageSeasonsString.innerHTML = `<p>Seasons Average: ${averageSeasons}  </p>`;
mainBody.appendChild(averageSeasonsString);
