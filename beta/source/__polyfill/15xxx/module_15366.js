// Module ID: 15366
// Function ID: 15367
// Dependencies: [15352]

// Module 15366
import _mod15352 from "module_15352" /* 15352 */;


export default (arg0, arg1) => {
  const tmp = _mod15352(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
