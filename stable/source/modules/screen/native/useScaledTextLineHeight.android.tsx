// Module ID: 10489
// Function ID: 10490
// Name: useScaledTextLineHeight
// Dependencies: [10490, 4833, 558, 576, 5289, 2]
// Exports: scaleLineHeight, scaleTextLineHeight

// Module 10489 (useScaledTextLineHeight)
import react from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4833 */;
import useFontScale from "useFontScale" /* 5289 */;
import react_nativeDefault from "react-native" /* 10490 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const map = new Map();
function scaleLineHeight(arg0) {
  let value = map.get(arg0);
  const obj = map;
  if (null == value) {
    const obj2 = react_nativeDefault;
    const scaledHeightForText = obj2.getScaledHeightForText(arg0);
    const result = obj.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
function scaleTextLineHeight(c15, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c15].lineHeight;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  if (cResult[0] === fontScale) {
    let tmp5;
    if (cResult[1] === arg0) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
  let value = map.get(lineHeight);
  const obj3 = map;
  if (null == value) {
    const obj4 = react_nativeDefault;
    const scaledHeightForText = obj4.getScaledHeightForText(lineHeight);
    const result = obj3.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  cResult[0] = fontScale;
  cResult[1] = arg0;
  cResult[2] = value;
  tmp5 = value;
}) : ((arg0) => {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
  let value = map.get(lineHeight);
  const obj2 = map;
  if (null == value) {
    const obj3 = react_nativeDefault;
    const scaledHeightForText = obj3.getScaledHeightForText(lineHeight);
    const result = obj2.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
});
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export { scaleLineHeight };
export { scaleTextLineHeight };
export const useScaledTextLineHeight = tmp3;
