// Module ID: 15123
// Function ID: 15124
// Dependencies: [15119, 15120, 15117, 15121, 15118, 15122]

// Module 15123
import _mod15117 from "module_15117" /* 15117 */;
import _mod15118 from "module_15118" /* 15118 */;
import _mod15119 from "module_15119" /* 15119 */;
import _mod15120 from "module_15120" /* 15120 */;
import _mod15121 from "module_15121" /* 15121 */;
import _mod15122 from "module_15122" /* 15122 */;


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
      tmp13 = _mod15119;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15119;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15119;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15120(version, version2, arg3);
    }
    case ">":
    {
      return _mod15117(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15121(version, version2, arg3);
    }
    case "<":
    {
      return _mod15118(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15122(version, version2, arg3);
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
