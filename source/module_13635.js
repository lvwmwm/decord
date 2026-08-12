// Module ID: 13635
// Function ID: 13636
// Dependencies: [13636, 13701]

// Module 13635
import module_13636 from "module_13636";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13636(obj, obj);
