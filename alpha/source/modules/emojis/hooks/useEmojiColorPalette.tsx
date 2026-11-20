// Module ID: 10270
// Function ID: 10271
// Name: useEmojiColorPalette
// Dependencies: [4795, 1191, 504, 4801, 8575, 2]
// Exports: useEmojiColorPalette

// Module 10270 (useEmojiColorPalette)
import get_initialized from "get initialized" /* 504 */;
import shared from "shared" /* 4801 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8575 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export function useEmojiColorPalette(burst_colors) {
  let saturation;
  let theme;
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
  const items1 = [ThemeStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const obj = shared;
    return obj.isThemeDark(theme.theme);
  });
  const obj3 = EmojiColorUtils;
  return obj3.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
}
