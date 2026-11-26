// Module ID: 15348
// Function ID: 15349
// Dependencies: [15344, 15345, 15342, 15346, 15343, 15347]

// Module 15348
import _mod15342 from "module_15342" /* 15342 */;
import _mod15343 from "module_15343" /* 15343 */;
import _mod15344 from "module_15344" /* 15344 */;
import _mod15345 from "module_15345" /* 15345 */;
import _mod15346 from "module_15346" /* 15346 */;
import _mod15347 from "module_15347" /* 15347 */;


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
      tmp13 = _mod15344;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15344;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15344;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15345(version, version2, arg3);
    }
    case ">":
    {
      return _mod15342(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15346(version, version2, arg3);
    }
    case "<":
    {
      return _mod15343(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15347(version, version2, arg3);
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
