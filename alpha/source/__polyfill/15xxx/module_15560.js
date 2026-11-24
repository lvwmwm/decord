// Module ID: 15560
// Function ID: 15561
// Dependencies: [15559]

// Module 15560
import _mod15559 from "module_15559" /* 15559 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15559, arg0, obj);
  } catch (err) {
    _mod15559[arg0] = value;
  }
  return value;
};
