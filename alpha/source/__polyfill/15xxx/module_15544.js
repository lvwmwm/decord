// Module ID: 15544
// Function ID: 15545
// Dependencies: [15533]

// Module 15544
import _mod15533 from "module_15533" /* 15533 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15533(arg0, arg2);
  const tmp = new _mod15533(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
