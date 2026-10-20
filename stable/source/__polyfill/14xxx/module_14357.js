// Module ID: 14357
// Function ID: 14358
// Dependencies: [14353, 14354, 14351, 14355, 14352, 14356]

// Module 14357
import _mod14351 from "module_14351" /* 14351 */;
import _mod14352 from "module_14352" /* 14352 */;
import _mod14353 from "module_14353" /* 14353 */;
import _mod14354 from "module_14354" /* 14354 */;
import _mod14355 from "module_14355" /* 14355 */;
import _mod14356 from "module_14356" /* 14356 */;


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
      tmp13 = _mod14353;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod14353;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod14353;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod14354(version, version2, arg3);
    }
    case ">":
    {
      return _mod14351(version, version2, arg3);
    }
    case ">=":
    {
      return _mod14355(version, version2, arg3);
    }
    case "<":
    {
      return _mod14352(version, version2, arg3);
    }
    case "<=":
    {
      return _mod14356(version, version2, arg3);
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
