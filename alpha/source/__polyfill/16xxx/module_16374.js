// Module ID: 16374
// Function ID: 16375
// Dependencies: [16373]

// Module 16374
import _mod16373 from "module_16373" /* 16373 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16373, arg0, obj);
  } catch (err) {
    _mod16373[arg0] = value;
  }
  return value;
};
