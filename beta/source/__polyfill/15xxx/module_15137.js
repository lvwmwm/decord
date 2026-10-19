// Module ID: 15137
// Function ID: 15138
// Dependencies: [15126]

// Module 15137
import _mod15126 from "module_15126" /* 15126 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15126(arg0, arg2);
  const tmp = new _mod15126(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
