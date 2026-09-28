// Module ID: 13567
// Function ID: 13568
// Dependencies: [13559]

// Module 13567
import _mod13559 from "module_13559" /* 13559 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13559) {
      version = version.version;
    }
    const tmp72 = new _mod13559(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
