// Module ID: 15546
// Function ID: 15547
// Dependencies: [15545]

// Module 15546
import _mod15545 from "module_15545" /* 15545 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15545, arg0, obj);
  } catch (err) {
    _mod15545[arg0] = value;
  }
  return value;
};
