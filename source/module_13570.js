// Module ID: 13570
// Function ID: 13571
// Dependencies: [13571, 13636]

// Module 13570
import module_13571 from "module_13571";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13571(obj, obj);
