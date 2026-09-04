// Module ID: 14221
// Function ID: 14222
// Dependencies: [14222, 14287]

// Module 14221
import assign from "assign" /* 14287 */;
import module_14222 from "module_14222" /* 14222 */;

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== assign;
obj = { assign };
module_14222(obj, obj);
