// Module ID: 14299
// Function ID: 14300
// Dependencies: [14291]

// Module 14299
import _mod14291 from "module_14291" /* 14291 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14291) {
      version = version.version;
    }
    const tmp72 = new _mod14291(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
