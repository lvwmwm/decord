// Module ID: 15053
// Function ID: 114687
// Name: getFavoritesAddButtonLabel
// Dependencies: [1212, 2945, 2]
// Exports: getFavoritesAddButtonLabel

// Module 15053 (getFavoritesAddButtonLabel)
const result = require("set").fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(importDefault(2945).LbCa8x, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(importDefault(2945).xKXcSu);
  }
  return formatToPlainStringResult;
};
