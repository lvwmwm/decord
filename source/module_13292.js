// Module ID: 13292
// Function ID: 102104
// Dependencies: [13293, 13358]

// Module 13292
import module_13293 from "module_13293";

let obj = { target: "Object", stat: true, arity: 2 };
obj.forced = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13293(obj, obj);
