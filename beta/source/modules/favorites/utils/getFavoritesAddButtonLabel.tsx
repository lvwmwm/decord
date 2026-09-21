// Module ID: 11295
// Function ID: 11296
// Name: getFavoritesAddButtonLabel
// Dependencies: [1119, 3328, 2]
// Exports: getFavoritesAddButtonLabel

// Module 11295 (getFavoritesAddButtonLabel)
import util from "util" /* 1119 */;
import _modDef3328 from "module_3328" /* 3328 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3328.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3328.xKXcSu);
  }
  return formatToPlainStringResult;
};
