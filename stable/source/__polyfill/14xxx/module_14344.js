// Module ID: 14344
// Function ID: 14345
// Dependencies: [14330]

// Module 14344
import _mod14330 from "module_14330" /* 14330 */;


export default (arg0, arg1) => {
  const tmp = _mod14330(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
