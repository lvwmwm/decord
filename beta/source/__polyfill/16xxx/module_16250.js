// Module ID: 16250
// Function ID: 16251
// Dependencies: [16243]

// Module 16250
import _mod16243 from "module_16243" /* 16243 */;


export default (arg0, arg1) => {
  const tmp = _mod16243(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
