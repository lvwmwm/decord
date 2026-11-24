// Module ID: 11393
// Function ID: 11394
// Name: getFavoritesAddButtonLabel
// Dependencies: [1112, 3804, 2]
// Exports: getFavoritesAddButtonLabel

// Module 11393 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1112 */;
import _modDef3804 from "module_3804" /* 3804 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3804.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3804.xKXcSu);
  }
  return formatToPlainStringResult;
}
