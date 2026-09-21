// Module ID: 14293
// Function ID: 14294
// Dependencies: [14285]

// Module 14293
import _mod14285 from "module_14285" /* 14285 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14285) {
      version = version.version;
    }
    const tmp72 = new _mod14285(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
