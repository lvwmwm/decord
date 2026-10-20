// Module ID: 15131
// Function ID: 15132
// Dependencies: [15124]

// Module 15131
import _mod15124 from "module_15124" /* 15124 */;


export default (arg0, arg1) => {
  const tmp = _mod15124(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
