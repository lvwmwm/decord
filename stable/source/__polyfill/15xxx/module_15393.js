// Module ID: 15393
// Function ID: 15394
// Dependencies: [15382]

// Module 15393
import _mod15382 from "module_15382" /* 15382 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15382(arg0, arg2);
  const tmp = new _mod15382(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
