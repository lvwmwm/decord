// Module ID: 16242
// Function ID: 16243
// Dependencies: [16231]

// Module 16242
import _mod16231 from "module_16231" /* 16231 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16231(arg0, arg2);
  const tmp = new _mod16231(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
