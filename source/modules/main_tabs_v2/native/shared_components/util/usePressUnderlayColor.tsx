// Module ID: 15551
// Function ID: 118663
// Name: usePressUnderlayColor
// Dependencies: []
// Exports: default

// Module 15551 (usePressUnderlayColor)
let closure_3 = require(dependencyMap[0]).DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp = importDefault(dependencyMap[1])();
  const token = require(dependencyMap[2]).useToken(importDefault(dependencyMap[3]).colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (null != arr) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      let num3 = 0.08;
      if ("dark" === tmp) {
        num3 = 0.12;
      }
      hexWithOpacityResult = require(dependencyMap[4]).hexWithOpacity(substr, num3);
      const obj2 = require(dependencyMap[4]);
    }
  }
  return hexWithOpacityResult;
};
