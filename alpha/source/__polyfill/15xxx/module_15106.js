// Module ID: 15106
// Function ID: 15107
// Dependencies: [15092]

// Module 15106
import _mod15092 from "module_15092" /* 15092 */;


export default (arg0, arg1) => {
  const tmp = _mod15092(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
