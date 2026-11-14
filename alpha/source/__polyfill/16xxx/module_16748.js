// Module ID: 16748
// Function ID: 16749
// Dependencies: [16747]

// Module 16748
import _mod16747 from "module_16747" /* 16747 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16747, arg0, obj);
  } catch (err) {
    _mod16747[arg0] = value;
  }
  return value;
};
