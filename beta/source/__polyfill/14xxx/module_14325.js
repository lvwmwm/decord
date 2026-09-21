// Module ID: 14325
// Function ID: 14326
// Dependencies: [14314]

// Module 14325
import _mod14314 from "module_14314" /* 14314 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14314(arg0, arg2);
  return obj.intersects(new _mod14314(arg1, arg2), arg2);
};
