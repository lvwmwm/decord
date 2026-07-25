// Module ID: 9849
// Function ID: 76389
// Name: scaleLineHeight
// Dependencies: [9850, 4127, 4550, 2]
// Exports: useScaledTextLineHeight

// Module 9849 (scaleLineHeight)
function scaleLineHeight(lineHeight, arg1) {
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(9850).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj = importDefault(9850);
  }
  return value;
}
function scaleTextLineHeight(c17, fontScale) {
  return scaleLineHeight(require(4127) /* Text */.TextStyleSheet[c17].lineHeight);
}
const map = new Map();
let result = require("getFontScale").fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export { scaleLineHeight };
export { scaleTextLineHeight };
export const useScaledTextLineHeight = function useScaledTextLineHeight(textVariant) {
  const fontScale = require(4550) /* getFontScale */.useFontScale();
  return scaleTextLineHeight(textVariant);
};
