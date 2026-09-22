// Module ID: 14111
// Function ID: 14112
// Dependencies: [14103]

// Module 14111
import _mod14103 from "module_14103" /* 14103 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14103) {
      version = version.version;
    }
    const tmp72 = new _mod14103(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
