// Module ID: 14557
// Function ID: 14558
// Dependencies: [14556]

// Module 14557
import _mod14556 from "module_14556" /* 14556 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14556, arg0, obj);
  } catch (err) {
    _mod14556[arg0] = value;
  }
  return value;
};
