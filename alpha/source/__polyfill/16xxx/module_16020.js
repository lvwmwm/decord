// Module ID: 16020
// Function ID: 16021
// Dependencies: [16021, 16022, 16030, 16034]

// Module 16020
import _mod16034 from "module_16034" /* 16034 */;
import assign_mod from "module_16021" /* 16021 */;
import Deflate from "Deflate" /* 16022 */;
import Inflate from "Inflate" /* 16030 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod16034);

export default obj;
