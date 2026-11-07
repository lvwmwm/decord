// Module ID: 16432
// Function ID: 16433
// Dependencies: [16431]

// Module 16432
import _mod16431 from "module_16431" /* 16431 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16431, arg0, obj);
  } catch (err) {
    _mod16431[arg0] = value;
  }
  return value;
};
