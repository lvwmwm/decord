// Module ID: 13498
// Function ID: 13499
// Dependencies: [13499, 13564]

// Module 13498
import module_13499 from "module_13499";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13499(obj, obj);
