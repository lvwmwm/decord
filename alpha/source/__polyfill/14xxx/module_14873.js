// Module ID: 14873
// Function ID: 14874
// Dependencies: [14872]

// Module 14873
import _mod14872 from "module_14872" /* 14872 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14872, arg0, obj);
  } catch (err) {
    _mod14872[arg0] = value;
  }
  return value;
};
