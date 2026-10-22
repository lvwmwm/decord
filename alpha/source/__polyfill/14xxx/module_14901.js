// Module ID: 14901
// Function ID: 14902
// Dependencies: [14902, 14903, 14911, 14915]

// Module 14901
import _mod14915 from "module_14915" /* 14915 */;
import assign_mod from "module_14902" /* 14902 */;
import Deflate from "Deflate" /* 14903 */;
import Inflate from "Inflate" /* 14911 */;

const obj = {};
let assign = assign_mod;
assign = assign.assign;
assign(obj, Deflate, Inflate, _mod14915);

export default obj;
