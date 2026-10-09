// Module ID: 15473
// Function ID: 15474
// Name: FontScaleStore
// Dependencies: [1382, 10481, 1267, 2]

// Module 15473 (FontScaleStore)
import react_nativeDefault from "react-native" /* 10481 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import module_1267 from "module_1267" /* 1267 */;
import size from "module_2" /* 2 */;

let customFontScale;
if (PlatformUtils.isAndroid()) {
  const importDefaultResult = react_nativeDefault;
  customFontScale = importDefaultResult.getCustomFontScale();
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = module_1267.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;
