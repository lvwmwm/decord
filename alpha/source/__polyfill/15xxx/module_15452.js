// Module ID: 15452
// Function ID: 15453
// Dependencies: [15451]

// Module 15452
import _mod15451 from "module_15451" /* 15451 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15451, arg0, obj);
  } catch (err) {
    _mod15451[arg0] = value;
  }
  return value;
};
