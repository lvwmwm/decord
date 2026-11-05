// Module ID: 16387
// Function ID: 16388
// Dependencies: [16386]

// Module 16387
import _mod16386 from "module_16386" /* 16386 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16386, arg0, obj);
  } catch (err) {
    _mod16386[arg0] = value;
  }
  return value;
};
