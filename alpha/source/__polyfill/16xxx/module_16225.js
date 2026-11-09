// Module ID: 16225
// Function ID: 16226
// Dependencies: [16211]

// Module 16225
import _mod16211 from "module_16211" /* 16211 */;


export default (arg0, arg1) => {
  const tmp = _mod16211(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
