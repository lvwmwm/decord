// Module ID: 9094
// Function ID: 9095
// Name: shared/colors
// Dependencies: [676, 2]
// Exports: flattenColorOverOpaqueBackground

// Module 9094 (shared/colors)
import _modDef676 from "module_676" /* 676 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/utils/shared/colors.tsx");

export const flattenColorOverOpaqueBackground = function flattenColorOverOpaqueBackground(arg0, context) {
  const obj = _modDef676(arg0);
  const rgbaResult = obj.rgba();
  const rgbaResult1 = _modDef676(context).rgba();
  if (1 !== rgbaResult1[3]) {
    const _Error = Error;
    const error = new Error("Expected solid cutout background color to be opaque");
    throw error;
  } else {
    const diff = 1 - tmp10;
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(rgbaResult[0] * tmp10 + rgbaResult1[0] * diff);
    const _Math3 = Math;
    const rounded1 = Math.round(rgbaResult[1] * tmp10 + rgbaResult1[1] * diff);
    const rounded2 = Math.round(rgbaResult[2] * tmp10 + rgbaResult1[2] * diff);
    const tmpResult = _modDef676;
    return _modDef676.rgb(rounded, rounded1, rounded2).hex();
  }
  const obj2 = _modDef676(context);
};
