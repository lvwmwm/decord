// Module ID: 14389
// Function ID: 14390
// Dependencies: [14381]

// Module 14389
import _mod14381 from "module_14381" /* 14381 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14381) {
      version = version.version;
    }
    const tmp72 = new _mod14381(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
