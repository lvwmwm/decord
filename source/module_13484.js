// Module ID: 13484
// Function ID: 13485
// Dependencies: [13485, 13550]

// Module 13484
import module_13485 from "module_13485";

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13485(obj, obj);
