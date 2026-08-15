// Module ID: 13671
// Function ID: 13672
// Dependencies: [13672, 13737]

// Module 13671
import module_13672 from "module_13672";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13672(obj, obj);
