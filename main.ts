/** This file only imports the others. 
 * Your problems can be found in p1.ts, p2.ts, p3.ts, p4.ts */

import * as p1 from "./p1.js";
import * as p2 from "./p2.js";
import * as p3 from "./p3.js";
import * as p4 from "./p4.js";

let p1_button = <HTMLButtonElement>document.getElementById("p1_button");
p1_button.onclick = p1.go;

let p2_button = <HTMLButtonElement>document.getElementById("p2_button");
p2_button.onclick = p2.go;

let p3_button = <HTMLButtonElement>document.getElementById("p3_button");
p3_button.onclick = p3.go;

let p4_button = <HTMLButtonElement>document.getElementById("p4_button");
p4_button.onclick = p4.go; 