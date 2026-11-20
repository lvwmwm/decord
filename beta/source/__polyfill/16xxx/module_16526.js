// Module ID: 16526
// Function ID: 16527
// Dependencies: [16519]

// Module 16526
import _mod16519 from "module_16519" /* 16519 */;


export default (arg0, arg1) => {
  const tmp = _mod16519(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
