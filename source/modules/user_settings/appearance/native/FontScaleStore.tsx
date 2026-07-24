// Module ID: 14202
// Function ID: 109220
// Name: customFontScale
// Dependencies: [477, 9922, 677, 2]

// Module 14202 (customFontScale)
import set from "set";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";
import set from "useStoreWithEqualityFn";

if (set.isAndroid()) {
  let customFontScale = require("enforcing").getCustomFontScale();
  const importDefaultResult = require("enforcing");
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const obj = {};
({ fontScale: obj4.persistedFontScale, isClassicChatFontScaleEnabled: obj4.persistedIsClassicChatFontScaleEnabled, fontScale: obj4.fontScale, isClassicChatFontScaleEnabled: obj4.isClassicChatFontScaleEnabled } = customFontScale);
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn(() => obj);
const result = set.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export const DEFAULT_FONT_SCALE_STORE_STATE = obj;
export const useFontScaleStore = withEqualityFn;
