// Module ID: 14189
// Function ID: 14190
// Dependencies: [14190, 14255]

// Module 14189
import assign from "assign" /* 14255 */;
import module_14190 from "module_14190" /* 14190 */;

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== assign;
obj = { assign };
module_14190(obj, obj);
