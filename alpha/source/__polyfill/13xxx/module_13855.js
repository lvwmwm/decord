// Module ID: 13855
// Function ID: 13856
// Dependencies: [13851, 13852, 13849, 13853, 13850, 13854]

// Module 13855
import _mod13849 from "module_13849" /* 13849 */;
import _mod13850 from "module_13850" /* 13850 */;
import _mod13851 from "module_13851" /* 13851 */;
import _mod13852 from "module_13852" /* 13852 */;
import _mod13853 from "module_13853" /* 13853 */;
import _mod13854 from "module_13854" /* 13854 */;


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
      tmp13 = _mod13851;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod13851;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod13851;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod13852(version, version2, arg3);
    }
    case ">":
    {
      return _mod13849(version, version2, arg3);
    }
    case ">=":
    {
      return _mod13853(version, version2, arg3);
    }
    case "<":
    {
      return _mod13850(version, version2, arg3);
    }
    case "<=":
    {
      return _mod13854(version, version2, arg3);
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
