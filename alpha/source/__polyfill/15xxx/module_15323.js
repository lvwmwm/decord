// Module ID: 15323
// Function ID: 15324
// Dependencies: [15309]

// Module 15323
import _mod15309 from "module_15309" /* 15309 */;


export default (arg0, arg1) => {
  const tmp = _mod15309(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
