// Module ID: 16783
// Function ID: 16784
// Dependencies: [16782]

// Module 16783
import _mod16782 from "module_16782" /* 16782 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16782, arg0, obj);
  } catch (err) {
    _mod16782[arg0] = value;
  }
  return value;
};
