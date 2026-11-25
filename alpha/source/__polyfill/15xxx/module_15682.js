// Module ID: 15682
// Function ID: 15683
// Dependencies: [15681]

// Module 15682
import _mod15681 from "module_15681" /* 15681 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15681, arg0, obj);
  } catch (err) {
    _mod15681[arg0] = value;
  }
  return value;
};
