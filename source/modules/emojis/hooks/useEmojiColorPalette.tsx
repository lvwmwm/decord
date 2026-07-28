// Module ID: 9432
// Function ID: 73354
// Name: useEmojiColorPalette
// Dependencies: [4157, 1278, 566, 4011, 7717, 2]
// Exports: useEmojiColorPalette

// Module 9432 (useEmojiColorPalette)
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
  return require(7717) /* buildPlatformedThemedEmojiColorPalette */.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
