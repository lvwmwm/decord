// Module ID: 15350
// Function ID: 15351
// Dependencies: [15339]

// Module 15350
import _mod15339 from "module_15339" /* 15339 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15339(arg0, arg2);
  const tmp = new _mod15339(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
