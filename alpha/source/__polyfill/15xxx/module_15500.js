// Module ID: 15500
// Function ID: 15501
// Dependencies: [15499]

// Module 15500
import _mod15499 from "module_15499" /* 15499 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15499, arg0, obj);
  } catch (err) {
    _mod15499[arg0] = value;
  }
  return value;
};
