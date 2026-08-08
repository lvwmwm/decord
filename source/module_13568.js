// Module ID: 13568
// Function ID: 13569
// Dependencies: [13569, 13634]

// Module 13568
import module_13569 from "module_13569";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13569(obj, obj);
