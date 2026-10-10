// Module ID: 12694
// Function ID: 12695
// Name: getFavoritesAddButtonLabel
// Dependencies: [1126, 3442, 2]
// Exports: getFavoritesAddButtonLabel

// Module 12694 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1126 */;
import _modDef3442 from "module_3442" /* 3442 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3442.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3442.xKXcSu);
  }
  return formatToPlainStringResult;
};
