// Module ID: 15229
// Function ID: 15230
// Dependencies: [15222]

// Module 15229
import _mod15222 from "module_15222" /* 15222 */;


export default (arg0, arg1) => {
  const tmp = _mod15222(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
