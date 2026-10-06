// Module ID: 13601
// Function ID: 13602
// Dependencies: [13590]

// Module 13601
import _mod13590 from "module_13590" /* 13590 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13590(arg0, arg2);
  const tmp = new _mod13590(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
