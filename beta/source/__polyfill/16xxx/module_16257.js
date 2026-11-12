// Module ID: 16257
// Function ID: 16258
// Dependencies: [16243]

// Module 16257
import _mod16243 from "module_16243" /* 16243 */;


export default (arg0, arg1) => {
  const tmp = _mod16243(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
