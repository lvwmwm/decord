// Module ID: 13447
// Function ID: 13448
// Dependencies: [13448, 13513]

// Module 13447
import module_13448 from "module_13448";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13448(obj, obj);
