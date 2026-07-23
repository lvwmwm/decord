// Module ID: 9889
// Function ID: 76582
// Name: scaleLineHeight
// Dependencies: [9890, 4126, 4549, 2]
// Exports: useScaledTextLineHeight

// Module 9889 (scaleLineHeight)
function scaleLineHeight(lineHeight, arg1) {
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(9890).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj = importDefault(9890);
  }
  return value;
}
function scaleTextLineHeight(c17, fontScale) {
  return scaleLineHeight(require(4126) /* Text */.TextStyleSheet[c17].lineHeight);
}
const map = new Map();
let result = require("getFontScale").fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export { scaleLineHeight };
export { scaleTextLineHeight };
export const useScaledTextLineHeight = function useScaledTextLineHeight(textVariant) {
  const fontScale = require(4549) /* getFontScale */.useFontScale();
  return scaleTextLineHeight(textVariant);
};
