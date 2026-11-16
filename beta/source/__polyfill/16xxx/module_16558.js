// Module ID: 16558
// Function ID: 16559
// Dependencies: [16547]

// Module 16558
import _mod16547 from "module_16547" /* 16547 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16547(arg0, arg2);
  const tmp = new _mod16547(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
