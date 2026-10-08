// Module ID: 14158
// Function ID: 14159
// Dependencies: [14151]

// Module 14158
import _mod14151 from "module_14151" /* 14151 */;

let version;


export default (arg0, arg1) => {
  const tmp = _mod14151(arg0, arg1);
  version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
