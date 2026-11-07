// Module ID: 16208
// Function ID: 16209
// Dependencies: [16201]

// Module 16208
import _mod16201 from "module_16201" /* 16201 */;


export default (arg0, arg1) => {
  const tmp = _mod16201(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
