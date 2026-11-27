// Module ID: 15551
// Function ID: 15552
// Dependencies: [15540]

// Module 15551
import _mod15540 from "module_15540" /* 15540 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15540(arg0, arg2);
  const tmp = new _mod15540(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
