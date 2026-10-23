// Module ID: 15521
// Function ID: 15522
// Dependencies: [15520]

// Module 15521
import _mod15520 from "module_15520" /* 15520 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15520, arg0, obj);
  } catch (err) {
    _mod15520[arg0] = value;
  }
  return value;
};
