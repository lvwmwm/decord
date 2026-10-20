// Module ID: 15371
// Function ID: 15372
// Dependencies: [15370]

// Module 15371
import _mod15370 from "module_15370" /* 15370 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15370, arg0, obj);
  } catch (err) {
    _mod15370[arg0] = value;
  }
  return value;
};
