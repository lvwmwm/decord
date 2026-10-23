// Module ID: 15300
// Function ID: 15301
// Dependencies: [15293]

// Module 15300
import _mod15293 from "module_15293" /* 15293 */;


export default (arg0, arg1) => {
  const tmp = _mod15293(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
