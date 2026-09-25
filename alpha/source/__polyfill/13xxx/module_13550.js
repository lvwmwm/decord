// Module ID: 13550
// Function ID: 13551
// Dependencies: [13542]

// Module 13550
import _mod13542 from "module_13542" /* 13542 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13542) {
      version = version.version;
    }
    const tmp72 = new _mod13542(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
