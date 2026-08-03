// Module ID: 13442
// Function ID: 13443
// Dependencies: [13443, 13508]

// Module 13442
import module_13443 from "module_13443";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13443(obj, obj);
