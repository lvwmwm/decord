// Module ID: 14309
// Function ID: 14310
// Dependencies: [14302]

// Module 14309
import _mod14302 from "module_14302" /* 14302 */;


export default (arg0, arg1) => {
  const tmp = _mod14302(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
