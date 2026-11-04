// Module ID: 16138
// Function ID: 16139
// Dependencies: [16131]

// Module 16138
import _mod16131 from "module_16131" /* 16131 */;


export default (arg0, arg1) => {
  const tmp = _mod16131(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
