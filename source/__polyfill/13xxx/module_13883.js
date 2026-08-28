// Module ID: 13883
// Function ID: 13884
// Dependencies: [13884, 13949]

// Module 13883
import assign from "assign" /* 13949 */;
import module_13884 from "module_13884" /* 13884 */;

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== assign;
obj = { assign };
module_13884(obj, obj);
