// Module ID: 15940
// Function ID: 15941
// Dependencies: [15929]

// Module 15940
import _mod15929 from "module_15929" /* 15929 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15929(arg0, arg2);
  const tmp = new _mod15929(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
