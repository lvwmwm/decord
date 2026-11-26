// Module ID: 15122
// Function ID: 15123
// Dependencies: [15123, 15124, 15132, 15136]

// Module 15122
import _mod15136 from "module_15136" /* 15136 */;
import assign_mod from "assign" /* 15123 */;
import Deflate from "Deflate" /* 15124 */;
import Inflate from "Inflate" /* 15132 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod15136);

export default obj;
