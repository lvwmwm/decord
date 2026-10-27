// Module ID: 15582
// Function ID: 15583
// Dependencies: [15581]

// Module 15582
import _mod15581 from "module_15581" /* 15581 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15581, arg0, obj);
  } catch (err) {
    _mod15581[arg0] = value;
  }
  return value;
};
