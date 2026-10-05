// Module ID: 13839
// Function ID: 13840
// Dependencies: [13831]

// Module 13839
import _mod13831 from "module_13831" /* 13831 */;


export default function(version, pre, major2, arg3, arg4) {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    const tmp7 = _mod13831;
    if (version instanceof _mod13831) {
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
