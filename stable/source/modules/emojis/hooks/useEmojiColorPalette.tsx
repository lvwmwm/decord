// Module ID: 11554
// Function ID: 11555
// Name: useEmojiColorPalette
// Dependencies: [4780, 1182, 504, 4639, 8247, 2]
// Exports: useEmojiColorPalette

// Module 11554 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4639 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8247 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;
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
