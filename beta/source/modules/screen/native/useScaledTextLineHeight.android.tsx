// Module ID: 9578
// Function ID: 9579
// Name: useScaledTextLineHeight
// Dependencies: [9579, 4832, 5288, 2]
// Exports: scaleLineHeight, scaleTextLineHeight, useScaledTextLineHeight

// Module 9578 (useScaledTextLineHeight)
import Text_Text from "Text/Text" /* 4832 */;
import useFontScale from "useFontScale" /* 5288 */;
import react_nativeDefault from "react-native" /* 9579 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0) {
  let value = map.get(arg0);
  const obj = map;
  if (null == value) {
    const obj2 = react_nativeDefault;
    const scaledHeightForText = obj2.getScaledHeightForText(arg0);
    const result = obj.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c10, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c10].lineHeight;
  let value = map.get(lineHeight);
  const obj = map;
  if (null == value) {
    const obj2 = react_nativeDefault;
    const scaledHeightForText = obj2.getScaledHeightForText(lineHeight);
    const result = obj.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(beginSearch) {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[beginSearch].lineHeight;
  let value = map.get(lineHeight);
  const obj2 = map;
  if (null == value) {
    const obj3 = react_nativeDefault;
    const scaledHeightForText = obj3.getScaledHeightForText(lineHeight);
    const result = obj2.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
