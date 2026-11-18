// Module ID: 15466
// Function ID: 15467
// Dependencies: [15465]

// Module 15466
import _mod15465 from "module_15465" /* 15465 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15465, arg0, obj);
  } catch (err) {
    _mod15465[arg0] = value;
  }
  return value;
};
