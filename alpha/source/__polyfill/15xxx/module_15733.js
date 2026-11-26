// Module ID: 15733
// Function ID: 15734
// Dependencies: [15732]

// Module 15733
import _mod15732 from "module_15732" /* 15732 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15732, arg0, obj);
  } catch (err) {
    _mod15732[arg0] = value;
  }
  return value;
};
