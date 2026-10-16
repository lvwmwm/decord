// Module ID: 15242
// Function ID: 15243
// Dependencies: [15241]

// Module 15242
import _mod15241 from "module_15241" /* 15241 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15241, arg0, obj);
  } catch (err) {
    _mod15241[arg0] = value;
  }
  return value;
};
