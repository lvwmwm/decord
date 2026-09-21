// Module ID: 883
// Function ID: 884
// Name: convertToNormalizedObject
// Dependencies: [686]
// Exports: convertToNormalizedObject

// Module 883 (convertToNormalizedObject)
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;
const value = "value";

export const convertToNormalizedObject = function convertToNormalizedObject(data) {
  const normalizer = _mod686;
  const normalizeResult = normalizer.normalize(data);
  if (null !== normalizeResult) {
    if (typeof normalizeResult === "object") {
      const _Array = Array;
      if (!Array.isArray(normalizeResult)) {
        const _Object = Object;
        let obj = normalizeResult;
      }
      return obj;
    }
  }
  obj = { [closure_1_2]: normalizeResult };
};
