// Module ID: 16625
// Function ID: 16626
// Dependencies: [16624]

// Module 16625
import _mod16624 from "module_16624" /* 16624 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16624, arg0, obj);
  } catch (err) {
    _mod16624[arg0] = value;
  }
  return value;
};
