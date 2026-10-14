// Module ID: 890
// Function ID: 891
// Name: convertToNormalizedObject
// Dependencies: [693]
// Exports: convertToNormalizedObject

// Module 890 (convertToNormalizedObject)
import _mod693 from "module_693" /* 693 */;

const value_str = "value";

export const convertToNormalizedObject = function convertToNormalizedObject(data) {
  const normalizer = _mod693;
  const normalizeResult = normalizer.normalize(data);
  if (null !== normalizeResult) {
    if (typeof normalizeResult === "object") {
      let obj;
      const _Array = Array;
      if (!Array.isArray(normalizeResult)) {
        const _Object = Object;
        obj = normalizeResult;
      }
      return obj;
    }
  }
  obj = { [closure_1_2]: normalizeResult };
};
