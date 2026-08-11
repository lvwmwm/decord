// Module ID: 12142
// Function ID: 12143
// Name: getFavoritesAddButtonLabel
// Dependencies: [1236, 3049, 2]
// Exports: getFavoritesAddButtonLabel

// Module 12142 (getFavoritesAddButtonLabel)
const result = require("set").fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = length;
    let formatToPlainStringResult = intl2.formatToPlainString(importDefault(3049).LbCa8x, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(importDefault(3049).xKXcSu);
  }
  return formatToPlainStringResult;
};
