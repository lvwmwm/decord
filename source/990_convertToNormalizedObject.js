// Module ID: 990
// Function ID: 10642
// Name: convertToNormalizedObject
// Dependencies: [77, 794]
// Exports: convertToNormalizedObject

// Module 990 (convertToNormalizedObject)
import _defineProperty from "_defineProperty";

const require = arg1;

export const convertToNormalizedObject = function convertToNormalizedObject(data) {
  const normalizeResult = require(794) /* registerSpanErrorInstrumentation */.normalize(data);
  if (null !== normalizeResult) {
    if ("object" === typeof normalizeResult) {
      const _Array = Array;
      if (!Array.isArray(normalizeResult)) {
        const _Object = Object;
        let tmp3 = normalizeResult;
      }
      return tmp3;
    }
  }
  tmp3 = callback({}, "value", normalizeResult);
};
