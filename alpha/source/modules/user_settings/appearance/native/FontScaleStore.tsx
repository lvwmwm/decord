// Module ID: 16876
// Function ID: 16877
// Name: FontScaleStore
// Dependencies: [1379, 6125, 1258, 2]

// Module 16876 (FontScaleStore)
import react_nativeDefault from "react-native" /* 6125 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import module_1258 from "module_1258" /* 1258 */;
import size from "module_2" /* 2 */;

let customFontScale;
if (PlatformUtils.isAndroid()) {
  const importDefaultResult = react_nativeDefault;
  customFontScale = importDefaultResult.getCustomFontScale();
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = module_1258.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;
