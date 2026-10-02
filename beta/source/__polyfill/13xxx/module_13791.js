// Module ID: 13791
// Function ID: 13792
// Dependencies: [13790]

// Module 13791
import _mod13790 from "module_13790" /* 13790 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod13790, arg0, obj);
  } catch (err) {
    _mod13790[arg0] = value;
  }
  return value;
};
