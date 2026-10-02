// Module ID: 8275
// Function ID: 8276
// Name: colors
// Dependencies: [684, 2]
// Exports: flattenColorOverOpaqueBackground

// Module 8275 (colors)
import _modDef684 from "module_684" /* 684 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/utils/shared/colors.tsx");

export const flattenColorOverOpaqueBackground = function flattenColorOverOpaqueBackground(arg0, context) {
  const obj = _modDef684(arg0);
  const obj2 = _modDef684(context);
  const rgbaResult = obj.rgba();
  const rgbaResult1 = obj2.rgba();
  if (1 !== rgbaResult1[3]) {
    const _Error = Error;
    const self = this;
    const self2 = this;
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
    const tmpResult = _modDef684;
    const rgbResult = tmpResult.rgb(rounded, rounded1, rounded2);
    return rgbResult.hex();
  }
};
