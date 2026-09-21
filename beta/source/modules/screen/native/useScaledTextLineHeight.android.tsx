// Module ID: 11291
// Function ID: 11292
// Name: useScaledTextLineHeight
// Dependencies: [11292, 4754, 558, 568, 5195, 2]
// Exports: scaleLineHeight, scaleTextLineHeight

// Module 11291 (useScaledTextLineHeight)
import c from "c" /* 568 */;
import Text_Text from "Text/Text" /* 4754 */;
import useFontScale from "useFontScale" /* 5195 */;
import NativeFontModuleDefault from "NativeFontModule" /* 11292 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const map = new Map();
function scaleLineHeight(arg0) {
  value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
function scaleTextLineHeight(c15, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c15].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
}
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export { scaleLineHeight };
export { scaleTextLineHeight };
export const useScaledTextLineHeight = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const fontScale = useFontScale.useFontScale();
  if (cResult[0] === fontScale) {
    if (cResult[1] === arg0) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  cResult[0] = fontScale;
  cResult[1] = arg0;
  cResult[2] = value;
  tmp5 = value;
}) : ((arg0) => {
  const fontScale = useFontScale.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[arg0].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
});
