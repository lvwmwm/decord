// Module ID: 12647
// Function ID: 12648
// Name: getFavoritesAddButtonLabel
// Dependencies: [1126, 3439, 2]
// Exports: getFavoritesAddButtonLabel

// Module 12647 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1126 */;
import _modDef3439 from "module_3439" /* 3439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3439.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3439.xKXcSu);
  }
  return formatToPlainStringResult;
};
