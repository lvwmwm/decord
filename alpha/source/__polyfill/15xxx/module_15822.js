// Module ID: 15822
// Function ID: 15823
// Dependencies: [15815]

// Module 15822
import _mod15815 from "module_15815" /* 15815 */;

let version;


export default (arg0, arg1) => {
  const tmp = _mod15815(arg0, arg1);
  version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
