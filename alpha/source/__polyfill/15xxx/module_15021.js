// Module ID: 15021
// Function ID: 15022
// Dependencies: [15010]

// Module 15021
import _mod15010 from "module_15010" /* 15010 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15010(arg0, arg2);
  const tmp = new _mod15010(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
