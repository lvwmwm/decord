// Module ID: 14380
// Function ID: 14381
// Dependencies: [14372]

// Module 14380
import _mod14372 from "module_14372" /* 14372 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14372) {
      version = version.version;
    }
    const tmp72 = new _mod14372(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
