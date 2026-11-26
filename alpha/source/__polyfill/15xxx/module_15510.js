// Module ID: 15510
// Function ID: 15511
// Dependencies: [15503]

// Module 15510
import _mod15503 from "module_15503" /* 15503 */;


export default (arg0, arg1) => {
  const tmp = _mod15503(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
