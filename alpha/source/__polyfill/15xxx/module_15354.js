// Module ID: 15354
// Function ID: 15355
// Dependencies: [15343]

// Module 15354
import _mod15343 from "module_15343" /* 15343 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15343(arg0, arg2);
  const tmp = new _mod15343(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
