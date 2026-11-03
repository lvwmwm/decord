// Module ID: 16083
// Function ID: 16084
// Dependencies: [16072]

// Module 16083
import _mod16072 from "module_16072" /* 16072 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16072(arg0, arg2);
  const tmp = new _mod16072(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
