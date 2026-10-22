// Module ID: 15487
// Function ID: 15488
// Dependencies: [15486]

// Module 15487
import _mod15486 from "module_15486" /* 15486 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15486, arg0, obj);
  } catch (err) {
    _mod15486[arg0] = value;
  }
  return value;
};
