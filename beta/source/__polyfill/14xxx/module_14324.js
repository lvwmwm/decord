// Module ID: 14324
// Function ID: 14325
// Dependencies: [14316]

// Module 14324
import _mod14316 from "module_14316" /* 14316 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14316) {
      version = version.version;
    }
    const tmp72 = new _mod14316(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
