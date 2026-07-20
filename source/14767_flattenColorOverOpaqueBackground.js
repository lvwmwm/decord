// Module ID: 14767
// Function ID: 111345
// Name: flattenColorOverOpaqueBackground
// Dependencies: []
// Exports: flattenColorOverOpaqueBackground

// Module 14767 (flattenColorOverOpaqueBackground)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/utils/shared/colors.tsx");

export const flattenColorOverOpaqueBackground = function flattenColorOverOpaqueBackground(backgroundColor, backgroundColor2) {
  const obj = importDefault(dependencyMap[0])(backgroundColor);
  const rgbaResult = obj.rgba();
  const rgbaResult1 = importDefault(dependencyMap[0])(backgroundColor2).rgba();
  if (1 !== rgbaResult1[3]) {
    const _Error = Error;
    const error = new Error("Expected solid cutout background color to be opaque");
    throw error;
  } else {
    const diff = 1 - tmp8;
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(rgbaResult[0] * tmp8 + rgbaResult1[0] * diff);
    const _Math3 = Math;
    const rounded1 = Math.round(rgbaResult[1] * tmp8 + rgbaResult1[1] * diff);
    const rounded2 = Math.round(rgbaResult[2] * tmp8 + rgbaResult1[2] * diff);
    const obj3 = importDefault(dependencyMap[0]);
    return importDefault(dependencyMap[0]).rgb(rounded, rounded1, rounded2).hex();
  }
  const obj2 = importDefault(dependencyMap[0])(backgroundColor2);
};
