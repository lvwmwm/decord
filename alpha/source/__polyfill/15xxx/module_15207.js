// Module ID: 15207
// Function ID: 15208
// Dependencies: [15206]

// Module 15207
import _mod15206 from "module_15206" /* 15206 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15206, arg0, obj);
  } catch (err) {
    _mod15206[arg0] = value;
  }
  return value;
};
