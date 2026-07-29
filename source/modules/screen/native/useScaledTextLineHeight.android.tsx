// Module ID: 9911
// Function ID: 9912
// Name: map
// Dependencies: [9912, 4185, 4606, 2]
// Exports: scaleLineHeight, scaleTextLineHeight, useScaledTextLineHeight

// Module 9911 (map)
const map = new Map();
let result = require("getFontScale").fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0, arg1) {
  let value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = importDefault(9912).getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = importDefault(9912);
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c7, fontScale) {
  const lineHeight = require(4185) /* Text */.TextStyleSheet[c7].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(9912).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = importDefault(9912);
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(c27) {
  const fontScale = require(4606) /* getFontScale */.useFontScale();
  const lineHeight = require(4185) /* Text */.TextStyleSheet[c27].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(9912).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj3 = importDefault(9912);
  }
  return value;
};
