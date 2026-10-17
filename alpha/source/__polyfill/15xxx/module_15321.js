// Module ID: 15321
// Function ID: 15322
// Dependencies: [15320]

// Module 15321
import _mod15320 from "module_15320" /* 15320 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15320, arg0, obj);
  } catch (err) {
    _mod15320[arg0] = value;
  }
  return value;
};
