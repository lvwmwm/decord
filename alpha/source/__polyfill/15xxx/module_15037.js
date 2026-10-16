// Module ID: 15037
// Function ID: 15038
// Dependencies: [15023]

// Module 15037
import _mod15023 from "module_15023" /* 15023 */;


export default (arg0, arg1) => {
  const tmp = _mod15023(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
