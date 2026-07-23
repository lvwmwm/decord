// Module ID: 14152
// Function ID: 108897
// Name: customFontScale
// Dependencies: [477, 9890, 677, 2]

// Module 14152 (customFontScale)
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
