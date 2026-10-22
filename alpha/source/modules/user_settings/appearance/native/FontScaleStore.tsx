// Module ID: 16516
// Function ID: 16517
// Name: FontScaleStore
// Dependencies: [1384, 11024, 1269, 2]

// Module 16516 (FontScaleStore)
import react_nativeDefault from "react-native" /* 11024 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import module_1269 from "module_1269" /* 1269 */;
import size from "module_2" /* 2 */;

let customFontScale;
if (PlatformUtils.isAndroid()) {
  const importDefaultResult = react_nativeDefault;
  customFontScale = importDefaultResult.getCustomFontScale();
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = module_1269.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;
