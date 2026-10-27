// Module ID: 15103
// Function ID: 15104
// Dependencies: [15096]

// Module 15103
import _mod15096 from "module_15096" /* 15096 */;


export default (arg0, arg1) => {
  const tmp = _mod15096(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
