// Module ID: 15226
// Function ID: 15227
// Dependencies: [15227, 15228, 15236, 15240]

// Module 15226
import _mod15240 from "module_15240" /* 15240 */;
import assign_mod from "module_15227" /* 15227 */;
import Deflate from "Deflate" /* 15228 */;
import Inflate from "Inflate" /* 15236 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod15240);

export default obj;
