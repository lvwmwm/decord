// Module ID: 10068
// Function ID: 10069
// Name: map
// Dependencies: [10069, 4251, 4672, 2]
// Exports: scaleLineHeight, scaleTextLineHeight, useScaledTextLineHeight

// Module 10068 (map)
const map = new Map();
let result = require("getFontScale").fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0, arg1) {
  let value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = importDefault(10069).getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = importDefault(10069);
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c7, fontScale) {
  const lineHeight = require(4251) /* Text */.TextStyleSheet[c7].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(10069).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = importDefault(10069);
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(c3) {
  const fontScale = require(4672) /* getFontScale */.useFontScale();
  const lineHeight = require(4251) /* Text */.TextStyleSheet[c3].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(10069).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj3 = importDefault(10069);
  }
  return value;
};
