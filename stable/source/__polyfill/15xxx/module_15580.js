// Module ID: 15580
// Function ID: 15581
// Dependencies: [15579]

// Module 15580
import _mod15579 from "module_15579" /* 15579 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15579, arg0, obj);
  } catch (err) {
    _mod15579[arg0] = value;
  }
  return value;
};
