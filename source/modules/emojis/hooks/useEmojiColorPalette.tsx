// Module ID: 9388
// Function ID: 73203
// Name: useEmojiColorPalette
// Dependencies: [4123, 1278, 566, 3977, 7681, 2]
// Exports: useEmojiColorPalette

// Module 9388 (useEmojiColorPalette)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.saturation);
  const obj = require(566) /* initialize */;
  const items1 = [closure_3];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_0(outer1_1[3]).isThemeDark(outer1_3.theme));
  const obj2 = require(566) /* initialize */;
  return require(7681) /* buildPlatformedThemedEmojiColorPalette */.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
