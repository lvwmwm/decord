// Module ID: 15119
// Function ID: 15120
// Dependencies: [15115, 15116, 15113, 15117, 15114, 15118]

// Module 15119
import _mod15113 from "module_15113" /* 15113 */;
import _mod15114 from "module_15114" /* 15114 */;
import _mod15115 from "module_15115" /* 15115 */;
import _mod15116 from "module_15116" /* 15116 */;
import _mod15117 from "module_15117" /* 15117 */;
import _mod15118 from "module_15118" /* 15118 */;


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
      tmp13 = _mod15115;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15115;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15115;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15116(version, version2, arg3);
    }
    case ">":
    {
      return _mod15113(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15117(version, version2, arg3);
    }
    case "<":
    {
      return _mod15114(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15118(version, version2, arg3);
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
