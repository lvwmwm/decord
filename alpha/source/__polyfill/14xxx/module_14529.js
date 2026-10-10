// Module ID: 14529
// Function ID: 14530
// Dependencies: [14528]

// Module 14529
import _mod14528 from "module_14528" /* 14528 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14528, arg0, obj);
  } catch (err) {
    _mod14528[arg0] = value;
  }
  return value;
};
