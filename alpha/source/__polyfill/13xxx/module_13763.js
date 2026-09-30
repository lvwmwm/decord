// Module ID: 13763
// Function ID: 13764
// Dependencies: [13755]

// Module 13763
import _mod13755 from "module_13755" /* 13755 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13755) {
      version = version.version;
    }
    const tmp72 = new _mod13755(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
