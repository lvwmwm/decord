// Module ID: 13582
// Function ID: 13583
// Dependencies: [13571]

// Module 13582
import _mod13571 from "module_13571" /* 13571 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13571(arg0, arg2);
  return obj.intersects(new _mod13571(arg1, arg2), arg2);
};
