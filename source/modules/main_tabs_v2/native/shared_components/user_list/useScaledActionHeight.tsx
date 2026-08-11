// Module ID: 9630
// Function ID: 9631
// Name: useScaledActionHeight
// Dependencies: [4720, 4024, 712, 2]
// Exports: default

// Module 9630 (useScaledActionHeight)
const result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require(4720) /* getFontScale */.useFontScale();
  const obj = require(4720) /* getFontScale */;
  const token = require(4024) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(4024) /* map */;
  const token1 = require(4024) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
