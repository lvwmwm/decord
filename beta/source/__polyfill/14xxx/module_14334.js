// Module ID: 14334
// Function ID: 14335
// Dependencies: [14326]

// Module 14334
import _mod14326 from "module_14326" /* 14326 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14326) {
      version = version.version;
    }
    const tmp72 = new _mod14326(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
