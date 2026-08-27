// Module ID: 13864
// Function ID: 13865
// Dependencies: [13865, 13930]

// Module 13864
import assign from "assign" /* 13930 */;
import module_13865 from "module_13865" /* 13865 */;

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== assign;
obj = { assign };
module_13865(obj, obj);
