// Module ID: 9560
// Function ID: 9561
// Name: useScaledActionHeight
// Dependencies: [4718, 4005, 712, 2]
// Exports: default

// Module 9560 (useScaledActionHeight)
const result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require(4718) /* getFontScale */.useFontScale();
  const obj = require(4718) /* getFontScale */;
  const token = require(4005) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(4005) /* map */;
  const token1 = require(4005) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
