// Module ID: 15332
// Function ID: 15333
// Dependencies: [15318]

// Module 15332
import _mod15318 from "module_15318" /* 15318 */;


export default (arg0, arg1) => {
  const tmp = _mod15318(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
