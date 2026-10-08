// Module ID: 14379
// Function ID: 14380
// Dependencies: [14378]

// Module 14379
import _mod14378 from "module_14378" /* 14378 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14378, arg0, obj);
  } catch (err) {
    _mod14378[arg0] = value;
  }
  return value;
};
