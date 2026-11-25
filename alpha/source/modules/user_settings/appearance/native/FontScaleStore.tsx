// Module ID: 16825
// Function ID: 16826
// Name: FontScaleStore
// Dependencies: [1378, 6094, 1257, 2]

// Module 16825 (FontScaleStore)
import react_nativeDefault from "react-native" /* 6094 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import module_1257 from "module_1257" /* 1257 */;
import size from "module_2" /* 2 */;

let customFontScale;
if (PlatformUtils.isAndroid()) {
  const importDefaultResult = react_nativeDefault;
  customFontScale = importDefaultResult.getCustomFontScale();
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = module_1257.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;
