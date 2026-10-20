// Module ID: 15353
// Function ID: 15354
// Dependencies: [15352]

// Module 15353
import _mod15352 from "module_15352" /* 15352 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15352, arg0, obj);
  } catch (err) {
    _mod15352[arg0] = value;
  }
  return value;
};
