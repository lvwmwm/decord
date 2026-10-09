// Module ID: 14475
// Function ID: 14476
// Dependencies: [14474]

// Module 14475
import _mod14474 from "module_14474" /* 14474 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14474, arg0, obj);
  } catch (err) {
    _mod14474[arg0] = value;
  }
  return value;
};
