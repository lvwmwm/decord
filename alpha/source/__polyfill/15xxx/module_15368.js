// Module ID: 15368
// Function ID: 15369
// Dependencies: [15354]

// Module 15368
import _mod15354 from "module_15354" /* 15354 */;


export default (arg0, arg1) => {
  const tmp = _mod15354(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
