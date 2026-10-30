// Module ID: 10076
// Function ID: 10077
// Name: useEmojiColorPalette
// Dependencies: [5010, 1193, 504, 5016, 8407, 2]
// Exports: useEmojiColorPalette

// Module 10076 (useEmojiColorPalette)
import get_initialized from "get initialized" /* 504 */;
import shared from "shared" /* 5016 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8407 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import ThemeStore from "ThemeStore" /* 1193 */;
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
