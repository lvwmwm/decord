// Module ID: 16069
// Function ID: 16070
// Dependencies: [16065, 16066, 16063, 16067, 16064, 16068]

// Module 16069
import _mod16063 from "module_16063" /* 16063 */;
import _mod16064 from "module_16064" /* 16064 */;
import _mod16065 from "module_16065" /* 16065 */;
import _mod16066 from "module_16066" /* 16066 */;
import _mod16067 from "module_16067" /* 16067 */;
import _mod16068 from "module_16068" /* 16068 */;


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
      tmp13 = _mod16065;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod16065;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod16065;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod16066(version, version2, arg3);
    }
    case ">":
    {
      return _mod16063(version, version2, arg3);
    }
    case ">=":
    {
      return _mod16067(version, version2, arg3);
    }
    case "<":
    {
      return _mod16064(version, version2, arg3);
    }
    case "<=":
    {
      return _mod16068(version, version2, arg3);
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
