// Module ID: 14371
// Function ID: 14372
// Dependencies: [14360]

// Module 14371
import _mod14360 from "module_14360" /* 14360 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14360(arg0, arg2);
  const tmp = new _mod14360(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
