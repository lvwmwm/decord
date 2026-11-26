// Module ID: 15551
// Function ID: 15552
// Dependencies: [15550]

// Module 15551
import _mod15550 from "module_15550" /* 15550 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15550, arg0, obj);
  } catch (err) {
    _mod15550[arg0] = value;
  }
  return value;
};
