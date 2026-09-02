// Module ID: 10858
// Function ID: 10859
// Name: useScaledActionHeight
// Dependencies: [4935, 4197, 709, 2]
// Exports: default

// Module 10858 (useScaledActionHeight)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import getFontScale from "getFontScale" /* 4935 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = getFontScale.useFontScale();
  const obj = getFontScale;
  const token = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = map;
  const token1 = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
