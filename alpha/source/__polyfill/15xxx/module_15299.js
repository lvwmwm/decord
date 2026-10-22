// Module ID: 15299
// Function ID: 15300
// Dependencies: [15295, 15296, 15293, 15297, 15294, 15298]

// Module 15299
import _mod15293 from "module_15293" /* 15293 */;
import _mod15294 from "module_15294" /* 15294 */;
import _mod15295 from "module_15295" /* 15295 */;
import _mod15296 from "module_15296" /* 15296 */;
import _mod15297 from "module_15297" /* 15297 */;
import _mod15298 from "module_15298" /* 15298 */;


export default function(version, arg1, version2, arg3) {
  let tmp13;
  let tmp13Result;
  switch (arg1) {
    case "===":
    {
      let version3 = version;
      if (typeof version === "object") {
        version3 = version.version;
      }
      let version4 = version2;
      if (typeof version2 === "object") {
        version4 = version2.version;
      }
      return version3 === version4;
    }
    case "!==":
    {
      if (typeof version === "object") {
        const versionValue = version.version;
      }
      if (typeof version2 === "object") {
        version2 = version2.version;
      }
      return version !== version2;
    }
    case "":
    {
      tmp13 = _mod15295;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15295;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15295;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15296(version, version2, arg3);
    }
    case ">":
    {
      return _mod15293(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15297(version, version2, arg3);
    }
    case "<":
    {
      return _mod15294(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15298(version, version2, arg3);
    }
    default:
    {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
    }
  }
};
