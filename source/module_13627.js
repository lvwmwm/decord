// Module ID: 13627
// Function ID: 13628
// Dependencies: [13628, 13693]

// Module 13627
import module_13628 from "module_13628";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13628(obj, obj);
