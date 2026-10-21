// Module ID: 15443
// Function ID: 15444
// Dependencies: [15442]

// Module 15443
import _mod15442 from "module_15442" /* 15442 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15442, arg0, obj);
  } catch (err) {
    _mod15442[arg0] = value;
  }
  return value;
};
