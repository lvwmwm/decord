// Module ID: 15003
// Function ID: 15004
// Dependencies: [15004, 15005, 15013, 15017]

// Module 15003
import _mod15017 from "module_15017" /* 15017 */;
import assign_mod from "module_15004" /* 15004 */;
import Deflate from "Deflate" /* 15005 */;
import Inflate from "Inflate" /* 15013 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod15017);

export default obj;
