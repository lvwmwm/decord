// Module ID: 16630
// Function ID: 16631
// Dependencies: [16629]

// Module 16630
import _mod16629 from "module_16629" /* 16629 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16629, arg0, obj);
  } catch (err) {
    _mod16629[arg0] = value;
  }
  return value;
};
