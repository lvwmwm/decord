// Module ID: 16124
// Function ID: 16125
// Dependencies: [16123]

// Module 16124
import _mod16123 from "module_16123" /* 16123 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16123, arg0, obj);
  } catch (err) {
    _mod16123[arg0] = value;
  }
  return value;
};
