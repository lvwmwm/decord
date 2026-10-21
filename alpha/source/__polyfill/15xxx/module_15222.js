// Module ID: 15222
// Function ID: 15223
// Dependencies: [15215]

// Module 15222
import _mod15215 from "module_15215" /* 15215 */;


export default (arg0, arg1) => {
  const tmp = _mod15215(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
