// Module ID: 15539
// Function ID: 15540
// Dependencies: [15538]

// Module 15539
import _mod15538 from "module_15538" /* 15538 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15538, arg0, obj);
  } catch (err) {
    _mod15538[arg0] = value;
  }
  return value;
};
