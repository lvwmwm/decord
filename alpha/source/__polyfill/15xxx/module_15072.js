// Module ID: 15072
// Function ID: 15073
// Dependencies: [15073, 15074, 15082, 15086]

// Module 15072
import _mod15086 from "module_15086" /* 15086 */;
import assign_mod from "assign" /* 15073 */;
import Deflate from "Deflate" /* 15074 */;
import Inflate from "Inflate" /* 15082 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod15086);

export default obj;
