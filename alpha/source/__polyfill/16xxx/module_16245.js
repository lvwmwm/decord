// Module ID: 16245
// Function ID: 16246
// Dependencies: [16238]

// Module 16245
import _mod16238 from "module_16238" /* 16238 */;


export default (arg0, arg1) => {
  const tmp = _mod16238(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
