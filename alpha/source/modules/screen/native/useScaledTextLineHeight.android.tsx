// Module ID: 5885
// Function ID: 5886
// Name: useScaledTextLineHeight
// Dependencies: [5886, 5753, 5768, 2]
// Exports: scaleLineHeight, scaleTextLineHeight, useScaledTextLineHeight

// Module 5885 (useScaledTextLineHeight)
import Text_Text from "Text/Text" /* 5753 */;
import useFontScale from "useFontScale" /* 5768 */;
import react_nativeDefault from "react-native" /* 5886 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export function scaleLineHeight(fontSize) {
  let value = map.get(fontSize);
  const obj = map;
  if (null == value) {
    const obj2 = react_nativeDefault;
    const scaledHeightForText = obj2.getScaledHeightForText(fontSize);
    const result = obj.set(fontSize, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
export function scaleTextLineHeight(c10, fontScale) {
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
}
export function useScaledTextLineHeight(c7) {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[c7].lineHeight;
  let value = map.get(lineHeight);
  const obj2 = map;
  if (null == value) {
    const obj3 = react_nativeDefault;
    const scaledHeightForText = obj3.getScaledHeightForText(lineHeight);
    const result = obj2.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
