// Module ID: 990
// Function ID: 10637
// Name: convertToNormalizedObject
// Dependencies: []
// Exports: convertToNormalizedObject

// Module 990 (convertToNormalizedObject)
let closure_2 = importDefault(dependencyMap[0]);

export const convertToNormalizedObject = function convertToNormalizedObject(data) {
  const normalizeResult = arg1(dependencyMap[1]).normalize(data);
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
