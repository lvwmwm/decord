// Module ID: 14296
// Function ID: 14297
// Dependencies: [14288]

// Module 14296
import _mod14288 from "module_14288" /* 14288 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14288) {
      version = version.version;
    }
    const tmp72 = new _mod14288(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
