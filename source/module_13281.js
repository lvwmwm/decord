// Module ID: 13281
// Function ID: 101977
// Dependencies: [13282, 13347]

// Module 13281
import module_13282 from "module_13282";

let obj = { target: "Object", stat: true, arity: 2 };
obj.forced = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13282(obj, obj);
