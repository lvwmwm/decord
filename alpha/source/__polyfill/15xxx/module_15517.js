// Module ID: 15517
// Function ID: 15518
// Dependencies: [15503]

// Module 15517
import _mod15503 from "module_15503" /* 15503 */;


export default (arg0, arg1) => {
  const tmp = _mod15503(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
