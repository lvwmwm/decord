// Module ID: 15040
// Function ID: 15041
// Dependencies: [15036, 15037, 15034, 15038, 15035, 15039]

// Module 15040
import _mod15034 from "module_15034" /* 15034 */;
import _mod15035 from "module_15035" /* 15035 */;
import _mod15036 from "module_15036" /* 15036 */;
import _mod15037 from "module_15037" /* 15037 */;
import _mod15038 from "module_15038" /* 15038 */;
import _mod15039 from "module_15039" /* 15039 */;


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
      tmp13 = _mod15036;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15036;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15036;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15037(version, version2, arg3);
    }
    case ">":
    {
      return _mod15034(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15038(version, version2, arg3);
    }
    case "<":
    {
      return _mod15035(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15039(version, version2, arg3);
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
