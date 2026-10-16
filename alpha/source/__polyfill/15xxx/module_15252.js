// Module ID: 15252
// Function ID: 15253
// Dependencies: [15251]

// Module 15252
import _mod15251 from "module_15251" /* 15251 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15251, arg0, obj);
  } catch (err) {
    _mod15251[arg0] = value;
  }
  return value;
};
