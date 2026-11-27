// Module ID: 11548
// Function ID: 11549
// Name: getFavoritesAddButtonLabel
// Dependencies: [1112, 3857, 2]
// Exports: getFavoritesAddButtonLabel

// Module 11548 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3857.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3857.xKXcSu);
  }
  return formatToPlainStringResult;
}
