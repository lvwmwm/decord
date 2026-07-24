// Module ID: 14948
// Function ID: 113935
// Name: flattenColorOverOpaqueBackground
// Dependencies: [666, 2]
// Exports: flattenColorOverOpaqueBackground

// Module 14948 (flattenColorOverOpaqueBackground)
const result = require("set").fileFinishedImporting("design/utils/shared/colors.tsx");

export const flattenColorOverOpaqueBackground = function flattenColorOverOpaqueBackground(backgroundColor, backgroundColor2) {
  const obj = importDefault(666)(backgroundColor);
  const rgbaResult = obj.rgba();
  const rgbaResult1 = importDefault(666)(backgroundColor2).rgba();
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
    const obj3 = importDefault(666);
    return importDefault(666).rgb(rounded, rounded1, rounded2).hex();
  }
  const obj2 = importDefault(666)(backgroundColor2);
};
