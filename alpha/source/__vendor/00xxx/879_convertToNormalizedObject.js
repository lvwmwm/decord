// Module ID: 879
// Function ID: 880
// Name: convertToNormalizedObject
// Dependencies: [681]
// Exports: convertToNormalizedObject

// Module 879 (convertToNormalizedObject)
import _mod681 from "module_681" /* 681 */;

const value_str = "value";

export function convertToNormalizedObject(data) {
  const normalizer = _mod681;
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
}
