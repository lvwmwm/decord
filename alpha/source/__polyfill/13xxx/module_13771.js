// Module ID: 13771
// Function ID: 13772
// Dependencies: [13763]

// Module 13771
import _mod13763 from "module_13763" /* 13763 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13763) {
      version = version.version;
    }
    const tmp72 = new _mod13763(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
