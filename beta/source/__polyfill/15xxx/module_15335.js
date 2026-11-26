// Module ID: 15335
// Function ID: 15336
// Dependencies: [15321]

// Module 15335
import _mod15321 from "module_15321" /* 15321 */;


export default (arg0, arg1) => {
  const tmp = _mod15321(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
