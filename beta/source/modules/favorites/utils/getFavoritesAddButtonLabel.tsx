// Module ID: 13888
// Function ID: 13889
// Name: getFavoritesAddButtonLabel
// Dependencies: [1128, 3444, 2]
// Exports: getFavoritesAddButtonLabel

// Module 13888 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1128 */;
import _modDef3444 from "module_3444" /* 3444 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3444.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3444.xKXcSu);
  }
  return formatToPlainStringResult;
};
