// Module ID: 14911
// Function ID: 14912
// Dependencies: [14910]

// Module 14911
import _mod14910 from "module_14910" /* 14910 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14910, arg0, obj);
  } catch (err) {
    _mod14910[arg0] = value;
  }
  return value;
};
