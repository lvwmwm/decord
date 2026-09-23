// Module ID: 11605
// Function ID: 11606
// Name: useEmojiColorPalette
// Dependencies: [4819, 1182, 504, 4678, 8301, 2]
// Exports: useEmojiColorPalette

// Module 11605 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4678 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8301 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  return EmojiColorUtils.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
