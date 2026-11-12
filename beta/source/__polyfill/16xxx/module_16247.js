// Module ID: 16247
// Function ID: 16248
// Dependencies: [16240]

// Module 16247
import _mod16240 from "module_16240" /* 16240 */;


export default (arg0, arg1) => {
  const tmp = _mod16240(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
