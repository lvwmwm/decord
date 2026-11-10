// Module ID: 15935
// Function ID: 15936
// Dependencies: [15924]

// Module 15935
import _mod15924 from "module_15924" /* 15924 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15924(arg0, arg2);
  const tmp = new _mod15924(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
