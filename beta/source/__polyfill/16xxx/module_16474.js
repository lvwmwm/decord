// Module ID: 16474
// Function ID: 16475
// Dependencies: [16473]

// Module 16474
import _mod16473 from "module_16473" /* 16473 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16473, arg0, obj);
  } catch (err) {
    _mod16473[arg0] = value;
  }
  return value;
};
