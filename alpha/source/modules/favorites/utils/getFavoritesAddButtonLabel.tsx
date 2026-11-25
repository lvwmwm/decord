// Module ID: 11492
// Function ID: 11493
// Name: getFavoritesAddButtonLabel
// Dependencies: [1112, 3856, 2]
// Exports: getFavoritesAddButtonLabel

// Module 11492 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1112 */;
import _modDef3856 from "module_3856" /* 3856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3856.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3856.xKXcSu);
  }
  return formatToPlainStringResult;
}
