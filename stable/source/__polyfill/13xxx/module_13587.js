// Module ID: 13587
// Function ID: 13588
// Dependencies: [13583, 13584, 13581, 13585, 13582, 13586]

// Module 13587
import _mod13581 from "module_13581" /* 13581 */;
import _mod13582 from "module_13582" /* 13582 */;
import _mod13583 from "module_13583" /* 13583 */;
import _mod13584 from "module_13584" /* 13584 */;
import _mod13585 from "module_13585" /* 13585 */;
import _mod13586 from "module_13586" /* 13586 */;


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
      tmp13 = _mod13583;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod13583;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod13583;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod13584(version, version2, arg3);
    }
    case ">":
    {
      return _mod13581(version, version2, arg3);
    }
    case ">=":
    {
      return _mod13585(version, version2, arg3);
    }
    case "<":
    {
      return _mod13582(version, version2, arg3);
    }
    case "<=":
    {
      return _mod13586(version, version2, arg3);
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
