// Module ID: 15358
// Function ID: 15359
// Dependencies: [15347]

// Module 15358
import _mod15347 from "module_15347" /* 15347 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15347(arg0, arg2);
  const tmp = new _mod15347(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
