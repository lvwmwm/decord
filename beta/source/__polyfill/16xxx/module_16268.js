// Module ID: 16268
// Function ID: 16269
// Dependencies: [16264, 16265, 16262, 16266, 16263, 16267]

// Module 16268
import _mod16262 from "module_16262" /* 16262 */;
import _mod16263 from "module_16263" /* 16263 */;
import _mod16264 from "module_16264" /* 16264 */;
import _mod16265 from "module_16265" /* 16265 */;
import _mod16266 from "module_16266" /* 16266 */;
import _mod16267 from "module_16267" /* 16267 */;


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
      tmp13 = _mod16264;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod16264;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod16264;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod16265(version, version2, arg3);
    }
    case ">":
    {
      return _mod16262(version, version2, arg3);
    }
    case ">=":
    {
      return _mod16266(version, version2, arg3);
    }
    case "<":
    {
      return _mod16263(version, version2, arg3);
    }
    case "<=":
    {
      return _mod16267(version, version2, arg3);
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
