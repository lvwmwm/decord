// Module ID: 9511
// Function ID: 9512
// Name: colors
// Dependencies: [671, 2]
// Exports: flattenColorOverOpaqueBackground

// Module 9511 (colors)
import _modDef671 from "module_671" /* 671 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/utils/shared/colors.tsx");

export function flattenColorOverOpaqueBackground(token, context) {
  const obj = _modDef671(token);
  const obj2 = _modDef671(context);
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
    const tmpResult = _modDef671;
    const rgbResult = tmpResult.rgb(rounded, rounded1, rounded2);
    return rgbResult.hex();
  }
}
