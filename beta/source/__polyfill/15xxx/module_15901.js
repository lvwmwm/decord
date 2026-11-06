// Module ID: 15901
// Function ID: 15902
// Dependencies: [15894]

// Module 15901
import _mod15894 from "module_15894" /* 15894 */;


export default (arg0, arg1) => {
  const tmp = _mod15894(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
