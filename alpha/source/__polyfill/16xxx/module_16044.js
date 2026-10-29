// Module ID: 16044
// Function ID: 16045
// Dependencies: [16043]

// Module 16044
import _mod16043 from "module_16043" /* 16043 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16043, arg0, obj);
  } catch (err) {
    _mod16043[arg0] = value;
  }
  return value;
};
