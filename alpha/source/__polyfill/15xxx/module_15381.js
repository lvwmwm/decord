// Module ID: 15381
// Function ID: 15382
// Dependencies: [15377, 15378, 15375, 15379, 15376, 15380]

// Module 15381
import _mod15375 from "module_15375" /* 15375 */;
import _mod15376 from "module_15376" /* 15376 */;
import _mod15377 from "module_15377" /* 15377 */;
import _mod15378 from "module_15378" /* 15378 */;
import _mod15379 from "module_15379" /* 15379 */;
import _mod15380 from "module_15380" /* 15380 */;


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
      tmp13 = _mod15377;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15377;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15377;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15378(version, version2, arg3);
    }
    case ">":
    {
      return _mod15375(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15379(version, version2, arg3);
    }
    case "<":
    {
      return _mod15376(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15380(version, version2, arg3);
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
