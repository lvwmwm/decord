// Module ID: 16084
// Function ID: 16085
// Dependencies: [16083]

// Module 16084
import _mod16083 from "module_16083" /* 16083 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16083, arg0, obj);
  } catch (err) {
    _mod16083[arg0] = value;
  }
  return value;
};
