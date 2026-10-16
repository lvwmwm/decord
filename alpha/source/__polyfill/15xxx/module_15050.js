// Module ID: 15050
// Function ID: 15051
// Dependencies: [15046, 15047, 15044, 15048, 15045, 15049]

// Module 15050
import _mod15044 from "module_15044" /* 15044 */;
import _mod15045 from "module_15045" /* 15045 */;
import _mod15046 from "module_15046" /* 15046 */;
import _mod15047 from "module_15047" /* 15047 */;
import _mod15048 from "module_15048" /* 15048 */;
import _mod15049 from "module_15049" /* 15049 */;


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
      tmp13 = _mod15046;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15046;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15046;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15047(version, version2, arg3);
    }
    case ">":
    {
      return _mod15044(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15048(version, version2, arg3);
    }
    case "<":
    {
      return _mod15045(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15049(version, version2, arg3);
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
