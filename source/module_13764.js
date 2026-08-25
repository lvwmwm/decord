// Module ID: 13764
// Function ID: 13765
// Dependencies: [13765, 13830]

// Module 13764
import assign from "assign" /* 13830 */;
import module_13765 from "module_13765" /* 13765 */;

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== assign;
obj = { assign };
module_13765(obj, obj);
