// Module ID: 16129
// Function ID: 16130
// Dependencies: [16128]

// Module 16129
import _mod16128 from "module_16128" /* 16128 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16128, arg0, obj);
  } catch (err) {
    _mod16128[arg0] = value;
  }
  return value;
};
