// Module ID: 15325
// Function ID: 15326
// Dependencies: [15324]

// Module 15325
import _mod15324 from "module_15324" /* 15324 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15324, arg0, obj);
  } catch (err) {
    _mod15324[arg0] = value;
  }
  return value;
};
