// Module ID: 16255
// Function ID: 16256
// Dependencies: [16241]

// Module 16255
import _mod16241 from "module_16241" /* 16241 */;


export default (arg0, arg1) => {
  const tmp = _mod16241(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
