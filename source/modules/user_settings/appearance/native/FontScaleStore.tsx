// Module ID: 14028
// Function ID: 106669
// Name: customFontScale
// Dependencies: []

// Module 14028 (customFontScale)
const _module = require(dependencyMap[0]);
if (_module.isAndroid()) {
  let customFontScale = importDefault(dependencyMap[1]).getCustomFontScale();
  const importDefaultResult = importDefault(dependencyMap[1]);
} else {
  customFontScale = {};
}
const obj = {};
({ fontScale: obj4.persistedFontScale, isClassicChatFontScaleEnabled: obj4.persistedIsClassicChatFontScaleEnabled, fontScale: obj4.fontScale, isClassicChatFontScaleEnabled: obj4.isClassicChatFontScaleEnabled } = customFontScale);
const _module1 = require(dependencyMap[2]);
const withEqualityFn = _module1.createWithEqualityFn(() => obj);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export const DEFAULT_FONT_SCALE_STORE_STATE = obj;
export const useFontScaleStore = withEqualityFn;
