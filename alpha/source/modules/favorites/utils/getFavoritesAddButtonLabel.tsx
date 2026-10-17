// Module ID: 13635
// Function ID: 13636
// Name: getFavoritesAddButtonLabel
// Dependencies: [1128, 3465, 2]
// Exports: getFavoritesAddButtonLabel

// Module 13635 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1128 */;
import _modDef3465 from "module_3465" /* 3465 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3465.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3465.xKXcSu);
  }
  return formatToPlainStringResult;
};
