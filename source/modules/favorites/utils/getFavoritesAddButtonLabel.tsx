// Module ID: 12139
// Function ID: 12140
// Name: getFavoritesAddButtonLabel
// Dependencies: [1236, 3030, 2]
// Exports: getFavoritesAddButtonLabel

// Module 12139 (getFavoritesAddButtonLabel)
const result = require("set").fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = length;
    let formatToPlainStringResult = intl2.formatToPlainString(importDefault(3030).LbCa8x, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(importDefault(3030).xKXcSu);
  }
  return formatToPlainStringResult;
};
