// Module ID: 15922
// Function ID: 15923
// Dependencies: [15918, 15919, 15916, 15920, 15917, 15921]

// Module 15922
import _mod15916 from "module_15916" /* 15916 */;
import _mod15917 from "module_15917" /* 15917 */;
import _mod15918 from "module_15918" /* 15918 */;
import _mod15919 from "module_15919" /* 15919 */;
import _mod15920 from "module_15920" /* 15920 */;
import _mod15921 from "module_15921" /* 15921 */;


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
      tmp13 = _mod15918;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod15918;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod15918;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod15919(version, version2, arg3);
    }
    case ">":
    {
      return _mod15916(version, version2, arg3);
    }
    case ">=":
    {
      return _mod15920(version, version2, arg3);
    }
    case "<":
    {
      return _mod15917(version, version2, arg3);
    }
    case "<=":
    {
      return _mod15921(version, version2, arg3);
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
