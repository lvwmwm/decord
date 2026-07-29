// Module ID: 13360
// Function ID: 13361
// Dependencies: [13361, 13426]

// Module 13360
import module_13361 from "module_13361";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13361(obj, obj);
