// Module ID: 16158
// Function ID: 16159
// Dependencies: [16154, 16155, 16152, 16156, 16153, 16157]

// Module 16158
import _mod16152 from "module_16152" /* 16152 */;
import _mod16153 from "module_16153" /* 16153 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16155 from "module_16155" /* 16155 */;
import _mod16156 from "module_16156" /* 16156 */;
import _mod16157 from "module_16157" /* 16157 */;


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
      tmp13 = _mod16154;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod16154;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod16154;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod16155(version, version2, arg3);
    }
    case ">":
    {
      return _mod16152(version, version2, arg3);
    }
    case ">=":
    {
      return _mod16156(version, version2, arg3);
    }
    case "<":
    {
      return _mod16153(version, version2, arg3);
    }
    case "<=":
    {
      return _mod16157(version, version2, arg3);
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
