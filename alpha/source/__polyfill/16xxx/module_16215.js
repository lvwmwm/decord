// Module ID: 16215
// Function ID: 16216
// Dependencies: [16201]

// Module 16215
import _mod16201 from "module_16201" /* 16201 */;


export default (arg0, arg1) => {
  const tmp = _mod16201(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
