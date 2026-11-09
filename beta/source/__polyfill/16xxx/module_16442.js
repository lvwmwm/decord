// Module ID: 16442
// Function ID: 16443
// Dependencies: [16441]

// Module 16442
import _mod16441 from "module_16441" /* 16441 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16441, arg0, obj);
  } catch (err) {
    _mod16441[arg0] = value;
  }
  return value;
};
