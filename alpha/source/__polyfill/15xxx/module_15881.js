// Module ID: 15881
// Function ID: 15882
// Dependencies: [15877, 15878, 15875, 15879, 15876, 15880]

// Module 15881
import _mod15875 from "module_15875" /* 15875 */;
import _mod15876 from "module_15876" /* 15876 */;
import _mod15877 from "module_15877" /* 15877 */;
import _mod15878 from "module_15878" /* 15878 */;
import _mod15879 from "module_15879" /* 15879 */;
import _mod15880 from "module_15880" /* 15880 */;


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
      tmp13 = _mod15877;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15877;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15877;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15878(version, version2, arg3);
    }
    case ">":
    {
      return _mod15875(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15879(version, version2, arg3);
    }
    case "<":
    {
      return _mod15876(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15880(version, version2, arg3);
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
