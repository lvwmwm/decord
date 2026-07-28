// Module ID: 13337
// Function ID: 102282
// Dependencies: [13338, 13403]

// Module 13337
import module_13338 from "module_13338";

let obj = { target: "Object", stat: true, arity: 2 };
obj.forced = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13338(obj, obj);
