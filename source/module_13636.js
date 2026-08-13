// Module ID: 13636
// Function ID: 13637
// Dependencies: [13637, 13702]

// Module 13636
import module_13637 from "module_13637";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13637(obj, obj);
