// Module ID: 16469
// Function ID: 16470
// Dependencies: [16468]

// Module 16469
import _mod16468 from "module_16468" /* 16468 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16468, arg0, obj);
  } catch (err) {
    _mod16468[arg0] = value;
  }
  return value;
};
