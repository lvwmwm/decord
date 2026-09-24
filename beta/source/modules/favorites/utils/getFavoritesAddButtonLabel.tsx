// Module ID: 11331
// Function ID: 11332
// Name: getFavoritesAddButtonLabel
// Dependencies: [1119, 3360, 2]
// Exports: getFavoritesAddButtonLabel

// Module 11331 (getFavoritesAddButtonLabel)
import util from "util" /* 1119 */;
import _modDef3360 from "module_3360" /* 3360 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3360.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3360.xKXcSu);
  }
  return formatToPlainStringResult;
};
