// Module ID: 10493
// Function ID: 10494
// Name: getFavoritesAddButtonLabel
// Dependencies: [1127, 3364, 2]
// Exports: getFavoritesAddButtonLabel

// Module 10493 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1127 */;
import _modDef3364 from "module_3364" /* 3364 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3364.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3364.xKXcSu);
  }
  return formatToPlainStringResult;
};
