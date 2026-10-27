// Module ID: 15363
// Function ID: 15364
// Dependencies: [15355]

// Module 15363
import _mod15355 from "module_15355" /* 15355 */;


export default function(version, pre, major2, arg3, arg4) {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    const tmp7 = _mod15355;
    if (version instanceof _mod15355) {
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
