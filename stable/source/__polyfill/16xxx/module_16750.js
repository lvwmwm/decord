// Module ID: 16750
// Function ID: 16751
// Dependencies: [16749]

// Module 16750
import _mod16749 from "module_16749" /* 16749 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16749, arg0, obj);
  } catch (err) {
    _mod16749[arg0] = value;
  }
  return value;
};
