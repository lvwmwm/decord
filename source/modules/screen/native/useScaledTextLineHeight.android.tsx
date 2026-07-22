// Module ID: 9882
// Function ID: 76541
// Name: scaleLineHeight
// Dependencies: []
// Exports: useScaledTextLineHeight

// Module 9882 (scaleLineHeight)
function scaleLineHeight(lineHeight, arg1) {
  let value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = importDefault(dependencyMap[0]).getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
    const obj = importDefault(dependencyMap[0]);
  }
  return value;
}
function scaleTextLineHeight(closure_17, fontScale) {
  return scaleLineHeight(require(dependencyMap[1]).TextStyleSheet[closure_17].lineHeight);
}
const map = new Map();
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export { scaleLineHeight };
export { scaleTextLineHeight };
export const useScaledTextLineHeight = function useScaledTextLineHeight(textVariant) {
  const fontScale = require(dependencyMap[2]).useFontScale();
  return scaleTextLineHeight(textVariant);
};
