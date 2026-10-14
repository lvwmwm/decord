// Module ID: 14711
// Function ID: 14712
// Dependencies: [14707, 14708, 14705, 14709, 14706, 14710]

// Module 14711
import _mod14705 from "module_14705" /* 14705 */;
import _mod14706 from "module_14706" /* 14706 */;
import _mod14707 from "module_14707" /* 14707 */;
import _mod14708 from "module_14708" /* 14708 */;
import _mod14709 from "module_14709" /* 14709 */;
import _mod14710 from "module_14710" /* 14710 */;


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
      tmp13 = _mod14707;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod14707;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod14707;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod14708(version, version2, arg3);
    }
    case ">":
    {
      return _mod14705(version, version2, arg3);
    }
    case ">=":
    {
      return _mod14709(version, version2, arg3);
    }
    case "<":
    {
      return _mod14706(version, version2, arg3);
    }
    case "<=":
    {
      return _mod14710(version, version2, arg3);
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
