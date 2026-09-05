// Module ID: 11259
// Function ID: 11260
// Name: useEmojiColorPalette
// Dependencies: [4552, 1183, 504, 4411, 7957, 2]
// Exports: useEmojiColorPalette

// Module 11259 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import buildPlatformedThemedEmojiColorPalette from "buildPlatformedThemedEmojiColorPalette" /* 7957 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import closure_3 from "handleThemeChange" /* 1183 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const obj = initialize;
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => callback(table[3]).isThemeDark(theme.theme));
  const obj2 = initialize;
  return buildPlatformedThemedEmojiColorPalette.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
