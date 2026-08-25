// Module ID: 13326
// Function ID: 13327
// Name: SemVer
// Dependencies: [13318]

// Module 13326 (SemVer)
import SemVer from "SemVer" /* 13318 */;


export default (version, pre, major2) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    let tmp7 = SemVer;
    if (version instanceof SemVer) {
      version = version.version;
    }
    tmp7 = new tmp7(version, tmp3);
    return tmp7.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
