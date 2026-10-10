// Module ID: 14316
// Function ID: 14317
// Dependencies: [14302]

// Module 14316
import _mod14302 from "module_14302" /* 14302 */;


export default (arg0, arg1) => {
  const tmp = _mod14302(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
