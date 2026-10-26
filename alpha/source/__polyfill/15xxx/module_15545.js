// Module ID: 15545
// Function ID: 15546
// Dependencies: [15544]

// Module 15545
import _mod15544 from "module_15544" /* 15544 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15544, arg0, obj);
  } catch (err) {
    _mod15544[arg0] = value;
  }
  return value;
};
