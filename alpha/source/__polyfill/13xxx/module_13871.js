// Module ID: 13871
// Function ID: 13872
// Dependencies: [13860]

// Module 13871
import _mod13860 from "module_13860" /* 13860 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod13860(arg0, arg2);
  const tmp = new _mod13860(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
