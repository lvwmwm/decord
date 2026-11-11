// Module ID: 16413
// Function ID: 16414
// Dependencies: [16399]

// Module 16413
import _mod16399 from "module_16399" /* 16399 */;


export default (arg0, arg1) => {
  const tmp = _mod16399(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
