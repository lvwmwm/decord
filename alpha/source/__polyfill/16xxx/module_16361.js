// Module ID: 16361
// Function ID: 16362
// Dependencies: [16360]

// Module 16361
import _mod16360 from "module_16360" /* 16360 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16360, arg0, obj);
  } catch (err) {
    _mod16360[arg0] = value;
  }
  return value;
};
