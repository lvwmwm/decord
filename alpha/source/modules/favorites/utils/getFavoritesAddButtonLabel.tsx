// Module ID: 13764
// Function ID: 13765
// Name: getFavoritesAddButtonLabel
// Dependencies: [1112, 3703, 2]
// Exports: getFavoritesAddButtonLabel

// Module 13764 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3703.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3703.xKXcSu);
  }
  return formatToPlainStringResult;
}
