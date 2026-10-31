// Module ID: 16125
// Function ID: 16126
// Dependencies: [16124]

// Module 16125
import _mod16124 from "module_16124" /* 16124 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16124, arg0, obj);
  } catch (err) {
    _mod16124[arg0] = value;
  }
  return value;
};
