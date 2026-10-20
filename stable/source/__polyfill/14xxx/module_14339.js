// Module ID: 14339
// Function ID: 14340
// Dependencies: [14331]

// Module 14339
import _mod14331 from "module_14331" /* 14331 */;


export default function(version, pre, major2, arg3, arg4) {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    const tmp7 = _mod14331;
    if (version instanceof _mod14331) {
      version = version.version;
    }
    const self = this;
    const self2 = this;
    const tmp72 = new tmp7(version, major2);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
