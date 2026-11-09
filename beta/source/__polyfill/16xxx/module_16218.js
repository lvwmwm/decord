// Module ID: 16218
// Function ID: 16219
// Dependencies: [16211]

// Module 16218
import _mod16211 from "module_16211" /* 16211 */;


export default (arg0, arg1) => {
  const tmp = _mod16211(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
