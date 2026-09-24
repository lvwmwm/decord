// Module ID: 15534
// Function ID: 15535
// Name: FontScaleStore
// Dependencies: [1368, 11328, 1247, 2]

// Module 15534 (FontScaleStore)
import NativeFontModuleDefault from "NativeFontModule" /* 11328 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import identity from "module_1247" /* 1247 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let customFontScale = NativeFontModuleDefault.getCustomFontScale();
  const importDefaultResult = NativeFontModuleDefault;
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = identity.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;
