// Module ID: 13355
// Function ID: 13356
// Dependencies: [13356, 13421]

// Module 13355
import module_13356 from "module_13356";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13356(obj, obj);
