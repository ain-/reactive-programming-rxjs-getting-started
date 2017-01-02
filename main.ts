import { Observable } from 'rxjs';
import {load, loadWithFetch} from "./loader";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(document, "click");

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

loadWithFetch("movies.json")
    .subscribe(renderMovies,
        e => console.log(`error: ${e}`),
        () => console.log("complete!"));

click.flatMap(e => loadWithFetch("moviess.json"))
    .subscribe(
    renderMovies,
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
