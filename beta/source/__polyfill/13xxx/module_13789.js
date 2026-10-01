// Module ID: 13789
// Function ID: 13790
// Dependencies: [13788]

// Module 13789
import _mod13788 from "module_13788" /* 13788 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod13788, arg0, obj);
  } catch (err) {
    _mod13788[arg0] = value;
  }
  return value;
};
