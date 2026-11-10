// Module ID: 16247
// Function ID: 16248
// Dependencies: [16239]

// Module 16247
import _mod16239 from "module_16239" /* 16239 */;


export default function(version, pre, major2, arg3, arg4) {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    const tmp7 = _mod16239;
    if (version instanceof _mod16239) {
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
