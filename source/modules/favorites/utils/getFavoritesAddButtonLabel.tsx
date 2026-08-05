// Module ID: 12021
// Function ID: 12022
// Name: getFavoritesAddButtonLabel
// Dependencies: [1236, 3001, 2]
// Exports: getFavoritesAddButtonLabel

// Module 12021 (getFavoritesAddButtonLabel)
const result = require("set").fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = length;
    let formatToPlainStringResult = intl2.formatToPlainString(importDefault(3001).LbCa8x, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(importDefault(3001).xKXcSu);
  }
  return formatToPlainStringResult;
};
