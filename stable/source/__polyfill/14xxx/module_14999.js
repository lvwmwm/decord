// Module ID: 14999
// Function ID: 15000
// Dependencies: [15000, 15001, 15009, 15013]

// Module 14999
import _mod15013 from "module_15013" /* 15013 */;
import assign_mod from "module_15000" /* 15000 */;
import Deflate from "Deflate" /* 15001 */;
import Inflate from "Inflate" /* 15009 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod15013);

export default obj;
