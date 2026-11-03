// Module ID: 16056
// Function ID: 16057
// Dependencies: [16042]

// Module 16056
import _mod16042 from "module_16042" /* 16042 */;


export default (arg0, arg1) => {
  const tmp = _mod16042(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
