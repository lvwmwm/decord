// Module ID: 13673
// Function ID: 13674
// Name: getFavoritesAddButtonLabel
// Dependencies: [1128, 3402, 2]
// Exports: getFavoritesAddButtonLabel

// Module 13673 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1128 */;
import _modDef3402 from "module_3402" /* 3402 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3402.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3402.xKXcSu);
  }
  return formatToPlainStringResult;
};
