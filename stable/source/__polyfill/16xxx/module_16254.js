// Module ID: 16254
// Function ID: 16255
// Dependencies: [16240]

// Module 16254
import _mod16240 from "module_16240" /* 16240 */;


export default (arg0, arg1) => {
  const tmp = _mod16240(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
