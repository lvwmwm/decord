// Module ID: 14342
// Function ID: 14343
// Dependencies: [14338, 14339, 14336, 14340, 14337, 14341]

// Module 14342
import _mod14336 from "module_14336" /* 14336 */;
import _mod14337 from "module_14337" /* 14337 */;
import _mod14338 from "module_14338" /* 14338 */;
import _mod14339 from "module_14339" /* 14339 */;
import _mod14340 from "module_14340" /* 14340 */;
import _mod14341 from "module_14341" /* 14341 */;


export default (version, arg1, version2, arg3) => {
  switch (arg1) {
    case "===":
      let version3 = version;
      if (typeof version === "object") {
        version3 = version.version;
      }
      let version4 = version2;
      if (typeof version2 === "object") {
        version4 = version2.version;
      }
      return version3 === version4;
    case "!==":
      if (typeof version === "object") {
        version = version.version;
      }
      if (typeof version2 === "object") {
        version2 = version2.version;
      }
      return version !== version2;
    case "":
      let tmp13 = _mod14338;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14338;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14338;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14339(version, version2, arg3);
    case ">":
      return _mod14336(version, version2, arg3);
    case ">=":
      return _mod14340(version, version2, arg3);
    case "<":
      return _mod14337(version, version2, arg3);
    case "<=":
      return _mod14341(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
