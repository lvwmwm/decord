// Module ID: 15054
// Function ID: 15055
// Dependencies: [15043]

// Module 15054
import _mod15043 from "module_15043" /* 15043 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15043(arg0, arg2);
  const tmp = new _mod15043(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
