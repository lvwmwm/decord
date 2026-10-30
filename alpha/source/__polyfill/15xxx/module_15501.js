// Module ID: 15501
// Function ID: 15502
// Dependencies: [15502, 15503, 15511, 15515]

// Module 15501
import _mod15515 from "module_15515" /* 15515 */;
import assign_mod from "module_15502" /* 15502 */;
import Deflate from "Deflate" /* 15503 */;
import Inflate from "Inflate" /* 15511 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod15515);

export default obj;
