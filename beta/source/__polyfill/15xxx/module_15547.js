// Module ID: 15547
// Function ID: 15548
// Dependencies: [15546]

// Module 15547
import _mod15546 from "module_15546" /* 15546 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15546, arg0, obj);
  } catch (err) {
    _mod15546[arg0] = value;
  }
  return value;
};
