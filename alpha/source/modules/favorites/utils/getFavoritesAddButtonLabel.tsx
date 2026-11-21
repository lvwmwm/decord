// Module ID: 13886
// Function ID: 13887
// Name: getFavoritesAddButtonLabel
// Dependencies: [1112, 3802, 2]
// Exports: getFavoritesAddButtonLabel

// Module 13886 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3802.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3802.xKXcSu);
  }
  return formatToPlainStringResult;
}
