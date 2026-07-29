// Module ID: 9456
// Function ID: 9457
// Name: useEmojiColorPalette
// Dependencies: [4181, 1302, 589, 4035, 7740, 2]
// Exports: useEmojiColorPalette

// Module 9456 (useEmojiColorPalette)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleThemeChange from "handleThemeChange";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => saturation.saturation);
  const obj = require(589) /* initialize */;
  const items1 = [handleThemeChange];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => callback(table[3]).isThemeDark(theme.theme));
  const obj2 = require(589) /* initialize */;
  return require(7740) /* buildPlatformedThemedEmojiColorPalette */.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
