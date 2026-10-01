// Module ID: 10460
// Function ID: 10461
// Name: getFavoritesAddButtonLabel
// Dependencies: [1115, 3361, 2]
// Exports: getFavoritesAddButtonLabel

// Module 10460 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1115 */;
import _modDef3361 from "module_3361" /* 3361 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3361.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3361.xKXcSu);
  }
  return formatToPlainStringResult;
};
