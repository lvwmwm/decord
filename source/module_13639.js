// Module ID: 13639
// Function ID: 13640
// Dependencies: [13640, 13705]

// Module 13639
import module_13640 from "module_13640";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13640(obj, obj);
