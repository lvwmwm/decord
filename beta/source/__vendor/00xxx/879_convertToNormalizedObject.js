// Module ID: 879
// Function ID: 880
// Name: convertToNormalizedObject
// Dependencies: [682]
// Exports: convertToNormalizedObject

// Module 879 (convertToNormalizedObject)
import _mod682 from "module_682" /* 682 */;

const value_str = "value";

export const convertToNormalizedObject = function convertToNormalizedObject(data) {
  const normalizer = _mod682;
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
