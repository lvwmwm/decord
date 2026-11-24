// Module ID: 15537
// Function ID: 15538
// Dependencies: [15536]

// Module 15537
import _mod15536 from "module_15536" /* 15536 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15536, arg0, obj);
  } catch (err) {
    _mod15536[arg0] = value;
  }
  return value;
};
