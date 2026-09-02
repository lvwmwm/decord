// Module ID: 14173
// Function ID: 14174
// Dependencies: [14174, 14239]

// Module 14173
import assign from "assign" /* 14239 */;
import module_14174 from "module_14174" /* 14174 */;

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== assign;
obj = { assign };
module_14174(obj, obj);
