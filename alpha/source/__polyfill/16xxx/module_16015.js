// Module ID: 16015
// Function ID: 16016
// Dependencies: [16016, 16017, 16025, 16029]

// Module 16015
import _mod16029 from "module_16029" /* 16029 */;
import assign_mod from "module_16016" /* 16016 */;
import Deflate from "Deflate" /* 16017 */;
import Inflate from "Inflate" /* 16025 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod16029);

export default obj;
