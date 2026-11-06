// Module ID: 15903
// Function ID: 15904
// Dependencies: [15895]

// Module 15903
import _mod15895 from "module_15895" /* 15895 */;


export default function(version, pre, major2, arg3, arg4) {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    const tmp7 = _mod15895;
    if (version instanceof _mod15895) {
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
