// Module ID: 13293
// Function ID: 102109
// Dependencies: [13294, 13359]

// Module 13293
import module_13294 from "module_13294";

let obj = { target: "Object", stat: true, arity: 2 };
obj.forced = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13294(obj, obj);
