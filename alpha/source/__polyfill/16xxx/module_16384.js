// Module ID: 16384
// Function ID: 16385
// Dependencies: [16383]

// Module 16384
import _mod16383 from "module_16383" /* 16383 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16383, arg0, obj);
  } catch (err) {
    _mod16383[arg0] = value;
  }
  return value;
};
