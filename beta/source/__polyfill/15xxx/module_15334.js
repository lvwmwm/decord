// Module ID: 15334
// Function ID: 15335
// Dependencies: [15330, 15331, 15328, 15332, 15329, 15333]

// Module 15334
import _mod15328 from "module_15328" /* 15328 */;
import _mod15329 from "module_15329" /* 15329 */;
import _mod15330 from "module_15330" /* 15330 */;
import _mod15331 from "module_15331" /* 15331 */;
import _mod15332 from "module_15332" /* 15332 */;
import _mod15333 from "module_15333" /* 15333 */;


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
      tmp13 = _mod15330;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15330;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15330;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15331(version, version2, arg3);
    }
    case ">":
    {
      return _mod15328(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15332(version, version2, arg3);
    }
    case "<":
    {
      return _mod15329(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15333(version, version2, arg3);
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
