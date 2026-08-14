// Module ID: 9515
// Function ID: 9516
// Name: map
// Dependencies: [9516, 4338, 4783, 2]
// Exports: scaleLineHeight, scaleTextLineHeight, useScaledTextLineHeight

// Module 9515 (map)
const map = new Map();
let result = require("getFontScale").fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0, arg1) {
  let value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = importDefault(9516).getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = importDefault(9516);
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c10, fontScale) {
  const lineHeight = require(4338) /* Text */.TextStyleSheet[c10].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(9516).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj2 = importDefault(9516);
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(c3) {
  const fontScale = require(4783) /* getFontScale */.useFontScale();
  const lineHeight = require(4338) /* Text */.TextStyleSheet[c3].lineHeight;
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(9516).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj3 = importDefault(9516);
  }
  return value;
};
