// Module ID: 10796
// Function ID: 10797
// Name: useScaledActionHeight
// Dependencies: [4943, 4197, 709, 2]
// Exports: default

// Module 10796 (useScaledActionHeight)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import getFontScale from "getFontScale" /* 4943 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = getFontScale.useFontScale();
  const obj = getFontScale;
  const token = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = map;
  const token1 = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
