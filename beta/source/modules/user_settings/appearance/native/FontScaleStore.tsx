// Module ID: 14810
// Function ID: 14811
// Name: FontScaleStore
// Dependencies: [1364, 9579, 1243, 2]

// Module 14810 (FontScaleStore)
import react_nativeDefault from "react-native" /* 9579 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

let customFontScale;
if (PlatformUtils.isAndroid()) {
  const importDefaultResult = react_nativeDefault;
  customFontScale = importDefaultResult.getCustomFontScale();
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = module_1243.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;
