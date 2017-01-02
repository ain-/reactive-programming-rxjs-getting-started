import { Observable } from 'rxjs';
import {load, loadWithFetch} from "./loader";

let source = Observable.merge(
    Observable.of(1),
    Observable.from([2, 3, 4]),
    Observable.throw(new Error("Stop!")),
    Observable.of(5)
).catch(e => {
    console.log(`caught: ${e}`);
    return Observable.of(10);
})

// let source = Observable.create(observer => {
//     observer.next(1);
//     observer.next(2);
//     observer.error("Stop!");
//     observer.next(3);
//     observer.complete();
// });

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);

// let output = document.getElementById("output");
// let button = document.getElementById("button");

// let click = Observable.fromEvent(document, "click");

// function renderMovies(movies) {
//     movies.forEach(m => {
//         let div = document.createElement("div");
//         div.innerText = m.title;
//         output.appendChild(div);
//     });
// }

// loadWithFetch("movies.json").subscribe(renderMovies);

// click.flatMap(e => loadWithFetch("movies.json"))
//     .subscribe(
//     renderMovies,
//     e => console.log(`error: ${e}`),
//     () => console.log("complete")
// );
