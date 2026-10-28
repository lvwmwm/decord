// Module ID: 14090
// Function ID: 14091
// Name: getFavoritesAddButtonLabel
// Dependencies: [1125, 3445, 2]
// Exports: getFavoritesAddButtonLabel

// Module 14090 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1125 */;
import _modDef3445 from "module_3445" /* 3445 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3445.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3445.xKXcSu);
  }
  return formatToPlainStringResult;
};
