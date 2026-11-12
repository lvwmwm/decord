// Module ID: 16270
// Function ID: 16271
// Dependencies: [16266, 16267, 16264, 16268, 16265, 16269]

// Module 16270
import _mod16264 from "module_16264" /* 16264 */;
import _mod16265 from "module_16265" /* 16265 */;
import _mod16266 from "module_16266" /* 16266 */;
import _mod16267 from "module_16267" /* 16267 */;
import _mod16268 from "module_16268" /* 16268 */;
import _mod16269 from "module_16269" /* 16269 */;


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
      tmp13 = _mod16266;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod16266;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod16266;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod16267(version, version2, arg3);
    }
    case ">":
    {
      return _mod16264(version, version2, arg3);
    }
    case ">=":
    {
      return _mod16268(version, version2, arg3);
    }
    case "<":
    {
      return _mod16265(version, version2, arg3);
    }
    case "<=":
    {
      return _mod16269(version, version2, arg3);
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
